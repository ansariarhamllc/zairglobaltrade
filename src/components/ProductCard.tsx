import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}

const ProductCard = ({ name, category, image, isSelected, onSelect }: ProductCardProps) => {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-500 card-3d",
        "bg-card border-2 shadow-3d hover:shadow-3d-hover",
        isSelected ? "border-accent ring-2 ring-accent/30" : "border-border hover:border-accent/50"
      )}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground rounded-full p-1.5 shadow-lg animate-scale-in">
          <Check className="h-4 w-4" />
        </div>
      )}

      {/* Shimmer overlay */}
      <div className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 text-left relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{category}</p>
        </div>
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors font-serif">{name}</h3>
        <div className="flex items-center gap-1 text-sm text-accent mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="font-medium">Get Quote</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
