import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Commodities = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Commodities;
