import { Check } from "lucide-react";
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
        "group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105",
        "bg-card border-2 shadow-product hover:shadow-product-hover",
        isSelected ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
      )}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground rounded-full p-1">
          <Check className="h-4 w-4" />
        </div>
      )}

      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-left">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{category}</p>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to inquire →
        </p>
      </div>
    </button>
  );
};

export default ProductCard;
