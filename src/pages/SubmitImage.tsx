
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Upload, Image as ImageIcon } from "lucide-react";

// Form schema
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Please select a category"),
  imageFile: z.instanceof(File, { message: "Please upload an image" }).or(
    z.any().refine((val) => val instanceof FileList && val.length > 0, {
      message: "Please upload an image",
    })
  ),
});

const SubmitImage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    navigate("/login");
  }

  // Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      form.setValue("imageFile", file);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Image submitted",
        description: "Your image has been submitted for review!",
      });
      
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-grey-100">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Submit a New Image</CardTitle>
            <CardDescription className="text-center">
              Your image will be reviewed before being published on the site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Image Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter a descriptive title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">Select a category</option>
                              <option value="nature">Nature</option>
                              <option value="travel">Travel</option>
                              <option value="architecture">Architecture</option>
                              <option value="food">Food</option>
                              <option value="portrait">Portrait</option>
                              <option value="street">Street</option>
                              <option value="abstract">Abstract</option>
                              <option value="other">Other</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Provide some details about your image" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="w-full md:w-1/2 space-y-4">
                    <FormField
                      control={form.control}
                      name="imageFile"
                      render={() => (
                        <FormItem>
                          <FormLabel>Upload Image</FormLabel>
                          <FormControl>
                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 h-[240px]">
                              {!previewUrl ? (
                                <div className="flex flex-col items-center justify-center text-gray-500">
                                  <div className="mb-2 text-teal-500">
                                    <Upload size={48} />
                                  </div>
                                  <p className="mb-2 text-sm font-medium">Click to upload or drag and drop</p>
                                  <p className="text-xs">PNG, JPG, WEBP up to 10MB</p>
                                </div>
                              ) : (
                                <div className="relative w-full h-full">
                                  <img 
                                    src={previewUrl} 
                                    className="w-full h-full object-contain" 
                                    alt="Preview" 
                                  />
                                </div>
                              )}
                              <Input
                                type="file"
                                onChange={handleFileChange}
                                accept="image/*"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {selectedFile && (
                      <div className="text-sm text-gray-500">
                        Selected file: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
                      </div>
                    )}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  <ImageIcon size={16} />
                  {isLoading ? "Submitting..." : "Submit Image"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitImage;
