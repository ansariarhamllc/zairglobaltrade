import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, Calendar, Globe2, TrendingUp, Users, Truck, Ship, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const milestones = [
  { year: "2023", title: "Company Founded", description: "Zair Global Trade was established in Malegaon, Maharashtra, with a vision to connect Indian agriculture to the world.", icon: Calendar },
  { year: "2023", title: "First Export Shipment", description: "Successfully completed our first international shipment of premium agricultural commodities to the Middle East.", icon: Ship },
  { year: "2024", title: "Product Range Expansion", description: "Expanded our portfolio to include 10+ products — fresh fruits, vegetables, grains, honey, coffee, and more.", icon: Package },
  { year: "2024", title: "50+ Clients Milestone", description: "Reached 50+ satisfied clients across multiple countries with zero quality complaints.", icon: Users },
  { year: "2025", title: "Growing Global Presence", description: "Actively expanding into European, Russian, and Southeast Asian markets with strong buyer partnerships.", icon: Globe2 },
];

const stats = [
  { label: "Years in Business", value: "2+", icon: Award },
  { label: "Products Exported", value: "10+", icon: Package },
  { label: "Happy Clients", value: "50+", icon: Users },
  { label: "Countries Reached", value: "10+", icon: Globe2 },
];

const recentExports = [
  { product: "Green Banana", destination: "Dubai, UAE", qty: "20 MT", status: "Delivered" },
  { product: "Onion", destination: "Kuala Lumpur, Malaysia", qty: "50 MT", status: "Delivered" },
  { product: "Basmati Rice", destination: "London, UK", qty: "30 MT", status: "Delivered" },
  { product: "Custard Apple", destination: "Jeddah, Saudi Arabia", qty: "10 MT", status: "Delivered" },
  { product: "Farm Fresh Grapes", destination: "Moscow, Russia", qty: "25 MT", status: "Delivered" },
  { product: "Green Chilli", destination: "Doha, Qatar", qty: "15 MT", status: "Delivered" },
];

const Experience = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <div className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-5" />
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/20"
              >
                Our Journey
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
              >
                2+ Years of <span className="text-accent">Trading Excellence</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed"
              >
                From our humble beginnings to becoming a trusted name in agricultural exports, every step has been driven by quality, trust, and relentless commitment.
              </motion.p>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-background relative">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-20 relative z-10">
                {stats.map((stat, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} direction="scale">
                    <motion.div
                      whileHover={{ y: -8, rotateX: 3, rotateY: -2 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      style={{ perspective: 1200 }}
                      className="glass-card text-center p-8 rounded-2xl shadow-3d"
                    >
                      <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                      <p className="text-4xl font-black text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 bg-section-cream">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <div className="text-center mb-14">
                  <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">Milestones</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our <span className="text-gradient">Growth Story</span></h2>
                </div>
              </ScrollReveal>
              <div className="max-w-3xl mx-auto space-y-6">
                {milestones.map((milestone, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                    <div className="flex gap-6 items-start group">
                      <div className="flex flex-col items-center">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-500 shadow-lg"
                        >
                          <milestone.icon className="h-7 w-7 text-accent" />
                        </motion.div>
                        {i < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2 min-h-[20px]" />}
                      </div>
                      <motion.div
                        whileHover={{ y: -4, x: 4, rotateY: -1 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="flex-1 bg-card border border-border rounded-2xl p-6 shadow-product hover:shadow-product-hover mb-2"
                      >
                        <span className="text-sm font-bold text-accent">{milestone.year}</span>
                        <h3 className="text-lg font-bold text-foreground mt-1 font-serif">{milestone.title}</h3>
                        <p className="text-muted-foreground mt-2 leading-relaxed">{milestone.description}</p>
                      </motion.div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Exports */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <div className="text-center mb-14">
                  <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">Export History</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">Recent <span className="text-gradient">Exports</span></h2>
                  <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A snapshot of our successful international shipments.</p>
                </div>
              </ScrollReveal>
              <div className="max-w-4xl mx-auto grid gap-4">
                {recentExports.map((exp, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -4, x: 4, rotateY: -1 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="bg-card rounded-2xl p-6 shadow-product hover:shadow-product-hover border border-border flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-500">
                          <Truck className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{exp.product}</h3>
                          <p className="text-sm text-muted-foreground">→ {exp.destination}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">{exp.qty}</span>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{exp.status}</span>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <ScrollReveal direction="scale">
            <section className="py-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern opacity-5" />
              <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Trade With Us?</h2>
                <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">Browse our premium product range and get a competitive quote today.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/commodities" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-elevation animate-pulse-glow">
                    Explore Our Products <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </section>
          </ScrollReveal>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Experience;
