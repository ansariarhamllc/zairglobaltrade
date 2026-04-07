import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, Globe2, Handshake, Shield, Target, Users, Leaf, Heart, Truck } from "lucide-react";
import { motion } from "framer-motion";
import WheatStalk from "@/components/illustrations/WheatStalk";
import LeafPattern from "@/components/illustrations/LeafPattern";
import DottedArc from "@/components/illustrations/DottedArc";
import OrganicBlob from "@/components/illustrations/OrganicBlob";

const features = [
  { icon: Globe2, title: "Global Network", description: "Established trade connections across multiple countries and continents, bridging Indian farms to world markets." },
  { icon: Shield, title: "Quality Assured", description: "Every shipment undergoes strict quality control with international certifications and independent lab testing." },
  { icon: Handshake, title: "Reliable Partner", description: "Built on trust and transparency — we are committed to on-time delivery and honest business practices." },
  { icon: Award, title: "Industry Expertise", description: "2+ years of hands-on experience in agricultural commodity trading and international logistics." },
];

const values = [
  { icon: Target, title: "Mission", desc: "To provide the world's markets with the finest Indian agricultural produce at competitive prices, fostering long-term partnerships built on trust." },
  { icon: Heart, title: "Vision", desc: "To become India's most trusted agricultural export company, recognized globally for quality, reliability, and farmer-first sourcing." },
  { icon: Leaf, title: "Sustainability", desc: "We prioritize sustainable farming practices and eco-friendly packaging, ensuring our exports benefit both people and the planet." },
  { icon: Users, title: "Community", desc: "We work directly with local farming communities, ensuring fair pricing and supporting rural livelihoods across India." },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <div className="pt-20">
          {/* Hero */}
          <section className="py-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-5" />
            <WheatStalk className="absolute left-2 top-10 w-16 opacity-20" delay={0.3} />
            <WheatStalk className="absolute right-2 bottom-0 w-14 opacity-15" delay={0.6} flip />
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="container mx-auto px-4 relative z-10 max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/20"
              >
                About Zair Global Trade
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight"
              >
                From Indian Farms to <span className="text-accent">Global Tables</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-primary-foreground/70 leading-relaxed"
              >
                We are a passionate team of trade professionals dedicated to showcasing India's rich agricultural heritage to the world.
              </motion.p>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20 bg-section-warm relative overflow-hidden">
            <LeafPattern className="absolute right-0 top-10 w-28 opacity-40" delay={0.5} />
            <OrganicBlob className="absolute -left-16 bottom-0 w-64 opacity-20" delay={0.3} />
            <DottedArc className="absolute bottom-20 left-1/4 w-80 opacity-20 pointer-events-none" delay={1} />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal direction="left">
                  <div>
                    <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">Our Story</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">Your Trusted Partner in Global Agricultural Trade</h2>
                    <p className="text-muted-foreground mb-5 leading-relaxed text-lg">
                      Zair Global Trade was founded with a simple yet powerful vision — to bridge the gap between India's hardworking farmers and global markets hungry for premium-quality produce. Based in Malegaon, Maharashtra, we specialize in sourcing, processing, and exporting the finest agricultural commodities and FMCG products.
                    </p>
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      Our journey began with a deep understanding of India's agricultural landscape. From the lush banana plantations of Maharashtra to the spice gardens of the South, we've built a network of trusted farmers, cooperatives, and processing facilities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What sets us apart is our commitment to end-to-end quality control. From farm to port, we oversee every step — harvesting, grading, packaging, and cold-chain logistics.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right">
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotateX: 3, rotateY: -4, scale: 1.02 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      style={{ perspective: 1200 }}
                      className="aspect-[4/5] rounded-3xl overflow-hidden shadow-3d"
                    >
                      <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=750&fit=crop" alt="Agricultural field" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [-5, 8, -5] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-6 -left-6 glass-card rounded-2xl shadow-3d p-6"
                    >
                      <p className="text-4xl font-black text-accent">2+</p>
                      <p className="text-sm text-muted-foreground font-medium">Years of Excellence</p>
                    </motion.div>
                    <motion.div
                      animate={{ y: [5, -8, 5] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -top-4 -right-4 glass-card rounded-2xl shadow-3d p-4"
                    >
                      <p className="text-2xl font-bold text-accent">100%</p>
                      <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                    </motion.div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 bg-background relative overflow-hidden">
            <WheatStalk className="absolute left-0 top-20 w-16 opacity-30" delay={0.2} />
            <WheatStalk className="absolute right-0 bottom-10 w-14 opacity-25" delay={0.4} flip />
            <OrganicBlob className="absolute right-0 top-0 w-80 opacity-15 pointer-events-none" delay={0.6} color="hsl(25 45% 25% / 0.04)" />
            <div className="container mx-auto px-4 relative z-10">
              <ScrollReveal>
                <div className="text-center mb-14">
                  <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">What We Offer</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">Why Trade <span className="text-gradient">With Us</span></h2>
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {features.map((feature, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} direction="scale">
                    <motion.div
                      whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      style={{ perspective: 1200 }}
                      className="glass-card rounded-2xl p-7 text-center shadow-3d cursor-default group"
                    >
                      <div className="w-16 h-16 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/25 transition-colors duration-500">
                        <feature.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2 text-lg font-serif">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-section-cream relative overflow-hidden">
            <LeafPattern className="absolute left-4 top-10 w-24 opacity-35" delay={0.3} />
            <DottedArc className="absolute right-0 bottom-10 w-72 opacity-20 pointer-events-none" delay={0.8} />
            <div className="container mx-auto px-4 relative z-10">
              <ScrollReveal>
                <div className="text-center mb-14">
                  <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">Our Values</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">What <span className="text-gradient">Drives Us</span></h2>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {values.map((v, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                    <motion.div
                      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      style={{ perspective: 1200 }}
                      className="bg-card rounded-2xl p-8 shadow-3d border border-border"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center">
                          <v.icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground font-serif">{v.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Exports */}
          <section className="py-20 bg-background relative overflow-hidden">
            <OrganicBlob className="absolute -left-20 top-10 w-60 opacity-15 pointer-events-none" delay={0.4} />
            <WheatStalk className="absolute right-0 bottom-0 w-12 opacity-20" delay={0.6} flip />
            <div className="container mx-auto px-4 relative z-10">
              <ScrollReveal>
                <div className="text-center mb-14">
                  <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">Track Record</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">Recent <span className="text-gradient">Exports</span></h2>
                </div>
              </ScrollReveal>
              <div className="max-w-4xl mx-auto space-y-4">
                {[
                  { product: "Green Banana", destination: "Middle East", qty: "20 MT", date: "March 2025" },
                  { product: "Onion", destination: "Southeast Asia", qty: "50 MT", date: "February 2025" },
                  { product: "Basmati Rice", destination: "Europe", qty: "30 MT", date: "January 2025" },
                  { product: "Green Chilli", destination: "Gulf Countries", qty: "15 MT", date: "December 2024" },
                  { product: "Farm Fresh Grapes", destination: "Russia", qty: "25 MT", date: "November 2024" },
                ].map((exp, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -4, x: 4, rotateY: -1 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="bg-card rounded-2xl p-6 shadow-product hover:shadow-product-hover border border-border flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center">
                          <Truck className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{exp.product}</h3>
                          <p className="text-sm text-muted-foreground">to {exp.destination}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">{exp.qty}</span>
                        <span className="text-muted-foreground">{exp.date}</span>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
