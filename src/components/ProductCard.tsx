import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  varieties?: string[];
  isSelected: boolean;
  onSelect: (variety?: string) => void;
  index?: number;
}

const ProductCard = ({ name, category, image, varieties = [], isSelected, onSelect, index = 0 }: ProductCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl text-left",
        "bg-card border-2 shadow-3d hover:shadow-3d-hover transition-shadow duration-500",
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

      {/* Image */}
      <button onClick={() => onSelect()} className="block w-full aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>

      {/* Content */}
      <div className="p-5 relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">{category}</p>
        </div>

        <div className="flex items-start justify-between gap-3">
          <button onClick={() => onSelect()} className="text-left">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
          </button>

          {varieties.length > 0 && (
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={`Choose variety of ${name}`}
              className="shrink-0 rounded-full border border-border p-1.5 text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
            >
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
            </button>
          )}
        </div>

        <AnimatePresence initial={false}>
          {open && varieties.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-4 mb-2 text-[13px] uppercase tracking-widest font-semibold text-muted-foreground">
                Select export format
              </p>
              <ul className="flex flex-col gap-1.5">
                {varieties.map((v) => (
                  <li key={v}>
                    <button
                      onClick={() => onSelect(v)}
                      className="w-full flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground hover:border-accent hover:bg-accent/10 transition-colors"
                    >
                      <span>{v}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-accent" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => onSelect()}
          className="mt-4 inline-flex items-center gap-1 text-sm text-accent font-medium hover:gap-2 transition-all"
        >
          Get Quote
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
