import { useState } from "react";
import ProductCard from "./ProductCard";
import LeadForm from "./LeadForm";
import ScrollReveal from "./ScrollReveal";
import greenBananaImg from "@/assets/green-banana.png";
import onionImg from "@/assets/onion.png";
import greenChilliImg from "@/assets/green-chilli.jpg";
import custardAppleImg from "@/assets/custard-apple.png";
import grapesImg from "@/assets/grapes.png";
import drumstickImg from "@/assets/drumstick.png";
import roseWaterImg from "@/assets/rose-water.png";
import tomatoImg from "@/assets/tomato.png";
import basmatiRiceImg from "@/assets/basmati-rice.png";
import yellowCornImg from "@/assets/yellow-corn.png";
import honeyImg from "@/assets/honey.png";
import arabicaCoffeeImg from "@/assets/arabica-coffee.png";
import onionBaristaImg from "@/assets/onion-barista.png";

const products = [
  { id: 1, name: "Green Banana", category: "Fruits", image: greenBananaImg, varieties: ["Cavendish — Fresh green", "Robusta — Fresh green", "Grand Naine — Fresh green", "Nendran — Semi-ripe"] },
  { id: 2, name: "Onion", category: "Vegetables", image: onionImg, varieties: ["Red Onion — Fresh bulb", "White Onion — Fresh bulb", "Pink Onion — Fresh bulb", "Dehydrated Onion — Dried flakes"] },
  { id: 13, name: "Onion Barista", category: "Vegetables", image: onionBaristaImg, varieties: ["Barista Fried Onion — Crispy fried", "Golden Fried Onion — Crispy fried", "Onion Flakes — Dehydrated", "Onion Powder — Dried powder"] },
  { id: 3, name: "Green Chilli", category: "Vegetables", image: greenChilliImg, varieties: ["G4 Chilli — Fresh green", "Jwala Chilli — Fresh green", "Byadgi Chilli — Dried red", "Teja Chilli — Dried red"] },
  { id: 4, name: "Tomato", category: "Vegetables", image: tomatoImg, varieties: ["Roma Tomato — Fresh firm", "Round Tomato — Fresh firm", "Cherry Tomato — Fresh firm"] },
  { id: 5, name: "Drumstick", category: "Vegetables", image: drumstickImg, varieties: ["PKM-1 Moringa — Fresh pods", "PKM-2 Moringa — Fresh pods", "Moringa Leaves — Fresh leaves"] },
  { id: 6, name: "Custard Apple", category: "Fruits", image: custardAppleImg, varieties: ["Balanagar — Fresh fruit", "Arka Sahan — Fresh fruit", "Red Sitaphal — Fresh fruit"] },
  { id: 7, name: "Basmati Rice", category: "Grains", image: basmatiRiceImg, varieties: ["1121 Steam — Parboiled rice", "1121 Sella — Parboiled rice", "Pusa Basmati — Raw rice", "Golden Sella — Parboiled rice"] },
  { id: 8, name: "Yellow Corn", category: "Grains", image: yellowCornImg, varieties: ["Feed Corn — Dried kernels", "Food-Grade Corn — Dried kernels", "Sweet Corn — Fresh cobs"] },
  { id: 9, name: "Honey", category: "FMCG", image: honeyImg, varieties: ["Multiflora Honey — Raw liquid", "Acacia Honey — Raw liquid", "Organic Honey — Raw liquid", "Bulk Honey — Liquid drum"] },
  { id: 10, name: "Arabica Coffee", category: "Beverages", image: arabicaCoffeeImg, varieties: ["Green Arabica Beans — Unroasted", "Roasted Arabica Beans — Whole roasted", "Ground Arabica Coffee — Ground"] },
  { id: 11, name: "Farm Fresh Grapes", category: "Fruits", image: grapesImg, varieties: ["Thompson Seedless — Fresh table grapes", "Flame Seedless — Fresh table grapes", "Black Seedless — Fresh table grapes"] },
  { id: 12, name: "Rose Water", category: "FMCG", image: roseWaterImg, varieties: ["Pure Rose Water — Liquid", "Edible Rose Water — Food grade liquid", "Rose Water — Bulk liquid"] },
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
              varieties={product.varieties}
              isSelected={selectedProduct?.startsWith(product.name) ?? false}
              onSelect={(variety) => handleProductSelect(variety ? `${product.name} — ${variety}` : product.name)}
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
