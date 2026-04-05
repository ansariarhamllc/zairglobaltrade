import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
  index?: number;
}

const ProductCard = ({ name, category, image, isSelected, onSelect, index = 0 }: ProductCardProps) => {
  return (
    <motion.button
      onClick={onSelect}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        y: -10, 
        rotateX: 2, 
        rotateY: -3,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
      whileTap={{ scale: 0.97 }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-card border-2 shadow-3d hover:shadow-3d-hover",
        isSelected ? "border-accent ring-2 ring-accent/30" : "border-border hover:border-accent/40"
      )}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground rounded-full p-1.5 shadow-lg"
        >
          <Check className="h-4 w-4" />
        </motion.div>
      )}

      {/* Shimmer */}
      <div className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer pointer-events-none" />

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 text-left relative">
        <div className="flex items-center gap-2 mb-2">
          <motion.span 
            className="inline-block w-2 h-2 rounded-full bg-accent"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{category}</p>
        </div>
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-serif">{name}</h3>
        <div className="flex items-center gap-1 text-sm text-accent mt-3 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
          <span className="font-medium">Get Quote</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.button>
  );
};

export default ProductCard;
