import { useState } from "react";
import ProductCard from "./ProductCard";
import LeadForm from "./LeadForm";
import ScrollReveal from "./ScrollReveal";
import greenBananaImg from "@/assets/green-banana.png";
import onionImg from "@/assets/onion.png";
import greenChilliImg from "@/assets/green-chilli.jpg";
import custardAppleImg from "@/assets/custard-apple.png";
import grapesImg from "@/assets/grapes.png";

const products = [
  { id: 1, name: "Green Banana", category: "Fruits", image: greenBananaImg },
  { id: 2, name: "Onion", category: "Vegetables", image: onionImg },
  { id: 3, name: "Green Chilli", category: "Vegetables", image: greenChilliImg },
  { id: 4, name: "Tomato", category: "Vegetables", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop" },
  { id: 5, name: "Custard Apple", category: "Fruits", image: custardAppleImg },
  { id: 6, name: "Basmati Rice", category: "Grains", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop" },
  { id: 7, name: "Yellow Corn", category: "Grains", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop" },
  { id: 8, name: "Honey", category: "FMCG", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop" },
  { id: 9, name: "Arabica Coffee", category: "Beverages", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop" },
  { id: 10, name: "Farm Fresh Grapes", category: "Fruits", image: grapesImg },
];

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleProductSelect = (productName: string) => {
    setSelectedProduct(productName);
    setShowForm(true);
  };

  return (
    <section id="products" className="py-20 bg-section-warm">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
              Premium <span className="text-gradient">Agricultural</span> Commodities
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Select any product below to request a competitive quote. We source the finest quality
              commodities directly from certified Indian farms.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              image={product.image}
              isSelected={selectedProduct === product.name}
              onSelect={() => handleProductSelect(product.name)}
              index={i}
            />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see what you're looking for?</p>
            <button
              onClick={() => handleProductSelect("Custom Product Inquiry")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover-lift shadow-elevation"
            >
              Contact Us for Custom Sourcing
            </button>
          </div>
        </ScrollReveal>
      </div>

      {showForm && selectedProduct && (
        <LeadForm
          selectedProduct={selectedProduct}
          onClose={() => { setShowForm(false); setSelectedProduct(null); }}
        />
      )}
    </section>
  );
};

export default ProductsSection;
