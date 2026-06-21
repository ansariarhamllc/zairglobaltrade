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
                <span className="inline-block text-sm uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
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

        {/* From the Field — image band */}
        <ScrollReveal>
          <section className="relative py-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&h=900&fit=crop"
              alt="Indian agricultural fields at sunrise"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/75" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-2xl text-primary-foreground">
                <span className="inline-block text-sm uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
                  From the Field
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                  Harvested with care, shipped with precision
                </h2>
                <p className="text-primary-foreground/75 text-base leading-relaxed">
                  Every consignment begins at a partner farm and ends at a buyer's port — fully traceable, quality-graded, and on schedule.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

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

        {/* Explore — contextual internal links */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <div className="mb-12 max-w-2xl">
                <span className="inline-block text-sm uppercase tracking-[0.3em] text-accent mb-3 font-semibold">
                  Explore More
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                  Discover Zair Global Trade
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
              {[
                { to: "/commodities", title: "Browse Our Commodities", desc: "Explore our full range of premium agricultural commodities and FMCG products available for export." },
                { to: "/about", title: "About Zair Global Trade", desc: "Learn how we connect Indian farms to global buyers with quality-graded, lab-tested produce." },
                { to: "/experience", title: "Our Export Experience", desc: "See recent shipments and the markets we've successfully delivered to worldwide." },
                { to: "/founder", title: "Meet the Founder", desc: "Get to know Shahbaz Ansari and the vision behind Zair Global Trade." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <Link to={item.to} className="block bg-card p-8 h-full hover:bg-muted transition-colors group">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center justify-between">
                      {item.title}
                      <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              Looking for something specific? Request a quote on our{" "}
              <Link to="/commodities" className="text-accent hover:underline font-medium">commodities page</Link>,
              read about our{" "}
              <Link to="/about" className="text-accent hover:underline font-medium">company values</Link>,
              review our{" "}
              <Link to="/experience" className="text-accent hover:underline font-medium">export track record</Link>, or
              connect directly with our{" "}
              <Link to="/founder" className="text-accent hover:underline font-medium">founder</Link>.
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
