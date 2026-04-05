import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <Hero />

        {/* Why Choose Us */}
        <section className="py-20 bg-section-warm">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Trade with <span className="text-gradient">Confidence</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Leaf, title: "Farm Fresh Quality", desc: "Direct sourcing from certified Indian farms ensuring the freshest, premium-grade produce." },
                { icon: Truck, title: "Global Delivery", desc: "Reliable logistics and cold-chain management for timely delivery worldwide." },
                { icon: ShieldCheck, title: "Certified & Safe", desc: "International quality certifications with rigorous lab testing at every stage." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.12} direction="scale">
                  <motion.div
                    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="glass-card rounded-2xl p-8 text-center shadow-3d cursor-default"
                    style={{ perspective: 1200 }}
                  >
                    <div className="w-16 h-16 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Exports Banner */}
        <ScrollReveal>
          <section className="py-16 bg-hero-gradient text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Recent Exports Delivered Successfully</h2>
                  <p className="text-primary-foreground/70 text-lg">Fresh produce shipped globally with 100% client satisfaction.</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/experience" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold shadow-elevation">
                    View Our Journey <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
