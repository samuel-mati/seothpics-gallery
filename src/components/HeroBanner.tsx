
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="bg-grey-100 text-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Stunning Free Images for Your Projects
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
          Over thousands of high-quality stock photos free to use for your personal and commercial projects
        </p>
        <Button 
          variant="default" 
          size="lg" 
          className="bg-teal-500 text-white hover:bg-teal-600"
        >
          Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
