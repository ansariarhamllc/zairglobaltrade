import { useState } from "react";
import ProductCard from "./ProductCard";
import LeadForm from "./LeadForm";

const products = [
  { id: 1, name: "Basmati Rice", category: "Grains", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop" },
  { id: 2, name: "Wheat", category: "Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop" },
  { id: 3, name: "Yellow Corn", category: "Grains", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop" },
  { id: 4, name: "Soybeans", category: "Oilseeds", image: "https://images.unsplash.com/photo-1599592025928-a1a35d3c1e6d?w=400&h=400&fit=crop" },
  { id: 5, name: "Red Lentils", category: "Pulses", image: "https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400&h=400&fit=crop" },
  { id: 6, name: "Chickpeas", category: "Pulses", image: "https://images.unsplash.com/photo-1515543904323-87c0e58c1f35?w=400&h=400&fit=crop" },
  { id: 7, name: "Turmeric", category: "Spices", image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop" },
  { id: 8, name: "Black Pepper", category: "Spices", image: "https://images.unsplash.com/photo-1599909533670-bd9f9c840e6a?w=400&h=400&fit=crop" },
  { id: 9, name: "Raw Sugar", category: "FMCG", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop" },
  { id: 10, name: "Cotton", category: "Fiber", image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=400&h=400&fit=crop" },
  { id: 11, name: "Arabica Coffee", category: "Beverages", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop" },
  { id: 12, name: "Green Tea", category: "Beverages", image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=400&fit=crop" },
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
