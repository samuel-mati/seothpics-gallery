
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const License = () => {
  return (
    <div className="min-h-screen flex flex-col bg-grey-100">
      <Navbar isLoggedIn={false} />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center gap-2">
            <FileText className="h-6 w-6 text-teal-600" />
            <CardTitle className="text-3xl font-bold">License Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-500 mb-4">Last updated: May 1, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Image Licensing</h2>
            <p className="mb-4">
              At Seothpics, we believe in providing high-quality images with clear licensing terms. 
              The following explains how our images can be used and what restrictions apply.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Our Standard License</h2>
            <p className="mb-4">
              All images on Seothpics are provided under our Standard License, which grants you a 
              worldwide, non-exclusive, royalty-free license to use, download, copy, and modify the 
              images for both personal and commercial purposes.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-medium mb-4">What you CAN do with our images:</h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Use in digital and printed materials</li>
                <li>Use in social media posts, websites, blogs, and mobile apps</li>
                <li>Use in advertisements and marketing campaigns</li>
                <li>Use in educational materials</li>
                <li>Use in templates and themes that you sell</li>
                <li>Modify or adapt the images to suit your needs</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-medium mb-4">What you CANNOT do with our images:</h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Sell or distribute the images as standalone files</li>
                <li>Use the images in a way that suggests endorsement by Seothpics or the image creator</li>
                <li>Use images featuring identifiable people in a way that is defamatory, obscene, or controversial</li>
                <li>Use images featuring trademarks or logos in a way that infringes upon those trademarks</li>
                <li>Claim copyright or ownership of the original images</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Attribution</h2>
            <p className="mb-4">
              While attribution is not required under our Standard License, it is always appreciated. 
              If you wish to provide attribution, please include "Image from Seothpics" with a link back 
              to our website when possible.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Extended License</h2>
            <p className="mb-4">
              For certain uses that fall outside our Standard License, we offer an Extended License. 
              Please contact us at license@seothpics.com for more information about obtaining an Extended License.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Model and Property Releases</h2>
            <p className="mb-4">
              While we strive to ensure that all our images with recognizable people have appropriate model 
              releases, we cannot guarantee this for all images. It is your responsibility to ensure that 
              your use of the images does not infringe any rights of individuals or property depicted in the images.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Questions?</h2>
            <p className="mb-4">
              If you have any questions about our license terms, please contact us at license@seothpics.com.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default License;
