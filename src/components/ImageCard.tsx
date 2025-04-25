
import { useState } from "react";
import { Heart, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ImageCardProps {
  id: string;
  src: string;
  alt: string;
  photographer: string;
  likes: number;
  width: number;
  height: number;
  aspectRatio: number;
}

const ImageCard = ({ 
  id,
  src,
  alt,
  photographer,
  likes,
  aspectRatio
}: ImageCardProps) => {
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(likes);
  
  // Calculate the grid row span based on aspect ratio
  const rowSpan = Math.round(aspectRatio * 10);

  const handleLike = () => {
    setLiked(!liked);
    setLocalLikes(liked ? localLikes - 1 : localLikes + 1);
    
    if (!liked) {
      toast.success("Added to your favorites");
    }
  };

  const handleDownload = () => {
    // In a real app, this would trigger the download
    toast.success("Download started");
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    toast.success("Share options opened");
  };

  return (
    <div 
      className="image-card relative rounded-lg overflow-hidden bg-white shadow-sm"
      style={{ gridRowEnd: `span ${rowSpan}` }}
    >
      {/* Image */}
      <img 
        src={src} 
        alt={alt}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      
      {/* Overlay (mobile: always visible, desktop: on hover) */}
      <div className="image-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 md:opacity-0 transition-opacity duration-200 flex flex-col justify-between p-4">
        {/* Top action buttons */}
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
            onClick={handleLike}
          >
            <Heart 
              className={cn("h-4 w-4", {
                "fill-red-500 text-red-500": liked,
              })} 
            />
            <span className="sr-only">Like</span>
          </Button>
        </div>
        
        {/* Bottom information and actions */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-white font-medium truncate">
              Photo by {photographer}
            </p>
            <span className="text-xs text-white/80 flex items-center gap-1">
              <Heart className="h-3 w-3" /> {localLikes}
            </span>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile action bar - always visible on mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-black/60 backdrop-blur-sm">
        <span className="text-xs text-white truncate">
          {photographer}
        </span>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-black/40"
            onClick={handleLike}
          >
            <Heart 
              className={cn("h-4 w-4", {
                "fill-red-500 text-red-500": liked,
              })} 
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-black/40"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-black/40"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
