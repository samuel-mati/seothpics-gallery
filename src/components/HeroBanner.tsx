
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading delay for smooth transition
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative min-h-[400px] flex items-center transition-all duration-1000 ${
        imageLoaded 
          ? "bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center bg-no-repeat" 
          : "bg-teal-500"
      }`}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Stunning Free Images for Your Projects
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto text-white/90">
          Over thousands of high-quality stock photos free to use for your personal and commercial projects
        </p>
        <Button 
          variant="default" 
          size="lg" 
          className="bg-white text-teal-600 hover:bg-teal-50"
        >
          Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
