
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Stunning Free Images for Your Projects
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
          Over thousands of high-quality stock photos free to use for your personal and commercial projects
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-white text-teal-700 hover:bg-grey-100 border-white"
        >
          Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
