
import { useEffect, useRef } from "react";
import ImageCard from "./ImageCard";

interface Image {
  id: string;
  src: string;
  alt: string;
  photographer: string;
  likes: number;
  width: number;
  height: number;
  categories: string[];
}

interface ImageGridProps {
  images: Image[];
  selectedCategory: string;
}

const ImageGrid = ({ images, selectedCategory }: ImageGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.categories.includes(selectedCategory));

  useEffect(() => {
    // Resizing logic for the masonry grid
    const resizeGridItems = () => {
      const grid = gridRef.current;
      if (!grid) return;
      
      const rowGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      
      const items = grid.querySelectorAll(".image-card");
      items.forEach(item => {
        const itemElement = item as HTMLElement;
        const rowSpan = Math.ceil((itemElement.querySelector('img')?.getBoundingClientRect().height || 0) / (rowHeight + rowGap));
        itemElement.style.gridRowEnd = `span ${rowSpan}`;
      });
    };
    
    // Initial resize
    resizeGridItems();
    
    // Resize on window resize
    window.addEventListener("resize", resizeGridItems);
    
    // Resize on image load
    const images = gridRef.current?.querySelectorAll('img') || [];
    images.forEach((img) => {
      img.addEventListener('load', resizeGridItems);
    });
    
    return () => {
      window.removeEventListener("resize", resizeGridItems);
      images.forEach((img) => {
        img.removeEventListener('load', resizeGridItems);
      });
    };
  }, [filteredImages]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[10px]"
      >
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <ImageCard
              key={image.id}
              id={image.id}
              src={image.src}
              alt={image.alt}
              photographer={image.photographer}
              likes={image.likes}
              width={image.width}
              height={image.height}
              aspectRatio={image.height / image.width}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-lg text-gray-500">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGrid;
