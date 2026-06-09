import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Leaf } from "lucide-react";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <Hero />

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="inline-block text-xs uppercase tracking-[0.25em] text-accent mb-4 font-medium">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                  Trade with Confidence
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto border border-border rounded-lg overflow-hidden">
              {[
                { icon: Leaf, title: "Farm Fresh Quality", desc: "Direct sourcing from certified Indian farms ensuring premium-grade produce." },
                { icon: Truck, title: "Global Delivery", desc: "Reliable logistics and cold-chain management for timely worldwide delivery." },
                { icon: ShieldCheck, title: "Certified & Safe", desc: "International quality certifications with rigorous lab testing at every stage." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-card p-10 h-full">
                    <item.icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.5} />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Exports Banner */}
        <ScrollReveal>
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-5xl mx-auto">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">Recent Exports Delivered Successfully</h2>
                  <p className="text-primary-foreground/70 text-base">Fresh produce shipped globally with 100% client satisfaction.</p>
                </div>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-3 rounded-md font-medium text-sm transition-colors whitespace-nowrap"
                >
                  View Our Journey <ArrowRight className="h-4 w-4" />
                </Link>
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
