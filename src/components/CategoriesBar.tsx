
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoriesBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoriesBar = ({ 
  categories,
  selectedCategory,
  onCategoryChange
}: CategoriesBarProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="relative bg-white py-3 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-grey-100 shadow-sm hover:bg-grey-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Categories list */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-x-auto scrollbar-hide px-2 flex space-x-2 py-1 no-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            <Button
              onClick={() => onCategoryChange("all")}
              variant={selectedCategory === "all" ? "default" : "ghost"}
              size="sm"
              className={`rounded-full flex-shrink-0 ${
                selectedCategory === "all" 
                  ? "bg-teal-600 hover:bg-teal-700 text-white" 
                  : "bg-grey-100 text-grey-600 hover:bg-grey-200"
              }`}
            >
              All
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => onCategoryChange(category)}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                className={`rounded-full flex-shrink-0 ${
                  selectedCategory === category 
                    ? "bg-teal-600 hover:bg-teal-700 text-white" 
                    : "bg-grey-100 text-grey-600 hover:bg-grey-200"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-grey-100 shadow-sm hover:bg-grey-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;
