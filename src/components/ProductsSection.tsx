import { useState } from "react";
import ProductCard from "./ProductCard";
import LeadForm from "./LeadForm";
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
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium Agricultural Commodities
          </h2>
          <p className="text-muted-foreground">
            Select any product below to request a competitive quote. We source the finest quality 
            commodities directly from certified farms and suppliers worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              image={product.image}
              isSelected={selectedProduct === product.name}
              onSelect={() => handleProductSelect(product.name)}
            />
          ))}
        </div>

        {/* CTA */}
        <p className="text-center text-muted-foreground mt-8">
          Don't see what you're looking for?{" "}
          <button 
            onClick={() => handleProductSelect("Custom Product Inquiry")}
            className="text-primary font-medium hover:underline"
          >
            Contact us for custom sourcing
          </button>
        </p>
      </div>

      {/* Lead Form Modal */}
      {showForm && selectedProduct && (
        <LeadForm
          selectedProduct={selectedProduct}
          onClose={() => {
            setShowForm(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </section>
  );
};

export default ProductsSection;
