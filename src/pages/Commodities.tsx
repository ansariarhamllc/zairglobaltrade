import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import { Truck, Shield, Clock, Globe2 } from "lucide-react";

const features = [
  { icon: Truck, title: "Fast Shipping", desc: "Global logistics in 7-15 days" },
  { icon: Shield, title: "Quality Assured", desc: "Lab tested, certified produce" },
  { icon: Clock, title: "24/7 Support", desc: "Always available for inquiries" },
  { icon: Globe2, title: "Worldwide", desc: "Delivering to 10+ countries" },
];

const Commodities = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero banner */}
        <section className="py-16 bg-hero-gradient text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="animate-slide-up text-4xl md:text-6xl font-black mb-4 tracking-tight">Our Commodities</h1>
            <p className="animate-slide-up-delay-1 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Explore our premium range of agricultural products and FMCG goods. Click any product to request a competitive quote.
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-6 bg-accent/10 border-y border-accent/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 justify-center">
                  <f.icon className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Commodities;
