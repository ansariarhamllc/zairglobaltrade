import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Truck, Shield, Clock, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Truck, title: "Fast Shipping", desc: "Global logistics in 7–15 days" },
  { icon: Shield, title: "Quality Assured", desc: "Lab tested, certified produce" },
  { icon: Clock, title: "24/7 Support", desc: "Always available for inquiries" },
  { icon: Globe2, title: "Worldwide", desc: "Delivering to 10+ countries" },
];

const Commodities = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <div className="pt-20">
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
              >
                Our Commodities
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="text-base text-primary-foreground/70"
              >
                Explore our premium range of agricultural products and FMCG goods. Click any product to request a competitive quote.
              </motion.p>
            </div>
          </section>

          <section className="py-8 border-b border-border bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {features.map((f, i) => (
                  <ScrollReveal key={i} delay={i * 0.06}>
                    <div className="flex items-center gap-3">
                      <f.icon className="h-5 w-5 text-accent shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{f.title}</p>
                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <ProductsSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Commodities;
