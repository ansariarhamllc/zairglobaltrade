import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Linkedin, Mail, Phone, MapPin, Briefcase, Globe2, Sprout, Target } from "lucide-react";

const FOUNDER_LINKEDIN = "https://in.linkedin.com/in/shahbaz-ansari-b461b93b4";

const Founder = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="py-20 bg-background border-b border-border">
            <div className="container mx-auto px-4 max-w-5xl">
              <ScrollReveal>
                <span className="text-sm uppercase tracking-[0.3em] font-semibold text-accent">
                  Company &amp; Founder
                </span>
                <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                  Built on trust. <br className="hidden md:block" />
                  <span className="text-accent">Rooted in Indian agriculture.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                  Zair Global Trade is an India-based export–import house specializing in premium
                  agricultural commodities and FMCG products, connecting Indian producers to buyers
                  across the Middle East, Southeast Asia, Europe and beyond.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Company */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-3 gap-10">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-foreground">About the Company</h2>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Zair Global Trade
                </p>
              </ScrollReveal>
              <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Headquartered in Malegaon, Maharashtra, Zair Global Trade sources directly from
                  farmers, cooperatives and certified processing units across India. We handle
                  end-to-end export operations — procurement, quality grading, packaging,
                  documentation, cold-chain logistics and on-time delivery to port.
                </p>
                <p>
                  Our core categories include fresh produce (banana, onion, grapes, green chilli),
                  staples (basmati rice, pulses, spices) and select FMCG lines. Every shipment is
                  backed by independent quality checks and complete export documentation, so our
                  buyers receive consistent, market-ready cargo.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Globe2, label: "Export Markets", value: "Middle East · SE Asia · Europe" },
                    { icon: Sprout, label: "Sourcing", value: "Farm-direct, pan-India" },
                    { icon: Briefcase, label: "Focus", value: "Agri commodities & FMCG" },
                    { icon: Target, label: "Standard", value: "Quality-graded & lab-tested" },
                  ].map((item, i) => (
                    <div key={i} className="border border-border rounded-lg p-4 bg-card">
                      <item.icon className="h-5 w-5 text-accent mb-2" />
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                        {item.label}
                      </p>
                      <p className="text-foreground font-medium mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Founder */}
          <section className="py-20 bg-card border-t border-border">
            <div className="container mx-auto px-4 max-w-5xl">
              <ScrollReveal>
                <span className="text-sm uppercase tracking-[0.3em] font-semibold text-accent">
                  Meet the Founder
                </span>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                  Shahbaz Ansari
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Founder &amp; Director — Zair Global Trade · Malegaon, Maharashtra, India
                </p>
              </ScrollReveal>

              <div className="mt-10 grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Shahbaz Ansari leads Zair Global Trade with a hands-on, farmer-first approach.
                    Working closely with growers across Maharashtra and partner regions, he has built
                    a reliable sourcing and export pipeline focused on fresh produce, staples and
                    FMCG goods for international buyers.
                  </p>
                  <p>
                    His focus is simple: source clean, source consistent, and ship on time. From
                    negotiating directly with farmer groups to overseeing port-side dispatches, he
                    personally stays involved in every major shipment — which is why long-term
                    buyers in the Gulf, Southeast Asia and Europe continue to trade with Zair.
                  </p>
                  <p>
                    Connect with Shahbaz directly on LinkedIn to discuss bulk orders, new commodity
                    requests or long-term supply contracts.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={FOUNDER_LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                    </a>
                    <a
                      href="https://wa.me/919560288244"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
                    >
                      <Phone className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>

                <aside className="border border-border rounded-xl p-6 bg-background h-fit">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
                    Direct Contact
                  </p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Linkedin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                      <a
                        href={FOUNDER_LINKEDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent break-all"
                      >
                        linkedin.com/in/shahbaz-ansari
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                      <a href="tel:+919560288244" className="text-foreground hover:text-accent">
                        +91 9560288244
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                      <a href="mailto:zairglobaltrade@gmail.com" className="text-foreground hover:text-accent break-all">
                        zairglobaltrade@gmail.com
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Sr.42 Appartment.9, Nayaislampura, Malegaon 423203, India
                      </span>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Founder;
