
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CategoriesBar from "@/components/CategoriesBar";
import HeroBanner from "@/components/HeroBanner";
import ImageGrid from "@/components/ImageGrid";
import { mockImages, getCategories } from "@/data/mockImages";

const Index = () => {
  const [isLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = getCategories();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-grey-100">
      <Navbar isLoggedIn={isLoggedIn} />
      <HeroBanner />
      <CategoriesBar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <ImageGrid 
        images={mockImages} 
        selectedCategory={selectedCategory} 
      />
    </div>
  );
};

export default Index;
