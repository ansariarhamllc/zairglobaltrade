import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Truck, Shield, Clock, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import WheatStalk from "@/components/illustrations/WheatStalk";
import OrganicBlob from "@/components/illustrations/OrganicBlob";
import DottedArc from "@/components/illustrations/DottedArc";

const features = [
  { icon: Truck, title: "Fast Shipping", desc: "Global logistics in 7-15 days" },
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
          <section className="py-16 bg-hero-gradient text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-5" />
            <WheatStalk className="absolute left-2 top-0 w-14 opacity-20" delay={0.3} />
            <WheatStalk className="absolute right-2 top-4 w-12 opacity-15" delay={0.5} flip />
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
              >
                Our Commodities
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-lg text-primary-foreground/70 max-w-2xl mx-auto"
              >
                Explore our premium range of agricultural products and FMCG goods. Click any product to request a competitive quote.
              </motion.p>
            </div>
          </section>

          <section className="py-6 bg-accent/10 border-y border-accent/20 relative overflow-hidden">
            <DottedArc className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((f, i) => (
                  <ScrollReveal key={i} delay={i * 0.08} direction="scale">
                    <div className="flex items-center gap-3 justify-center">
                      <f.icon className="h-5 w-5 text-accent" />
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

          <div className="relative">
            <OrganicBlob className="absolute -right-20 top-20 w-72 opacity-20 pointer-events-none" delay={0.5} />
            <OrganicBlob className="absolute -left-20 bottom-40 w-60 opacity-15 pointer-events-none" delay={1} color="hsl(25 45% 25% / 0.05)" />
            <ProductsSection />
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Commodities;
