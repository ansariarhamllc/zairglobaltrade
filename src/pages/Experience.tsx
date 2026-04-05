import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Calendar, Globe2, TrendingUp, Users, Truck, Ship, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Zair Global Trade was established in Malegaon, Maharashtra, with a vision to connect Indian agriculture to the world.",
    icon: Calendar,
  },
  {
    year: "2023",
    title: "First Export Shipment",
    description: "Successfully completed our first international shipment of premium agricultural commodities to the Middle East.",
    icon: Ship,
  },
  {
    year: "2024",
    title: "Product Range Expansion",
    description: "Expanded our portfolio to include 10+ products — fresh fruits, vegetables, grains, honey, coffee, and more.",
    icon: Package,
  },
  {
    year: "2024",
    title: "50+ Clients Milestone",
    description: "Reached 50+ satisfied clients across multiple countries with zero quality complaints.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Growing Global Presence",
    description: "Actively expanding into European, Russian, and Southeast Asian markets with strong buyer partnerships.",
    icon: Globe2,
  },
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
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="animate-slide-up inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/20">
              Our Journey
            </span>
            <h1 className="animate-slide-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              2+ Years of <span className="text-accent">Trading Excellence</span>
            </h1>
            <p className="animate-slide-up-delay-2 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              From our humble beginnings to becoming a trusted name in agricultural exports,
              every step has been driven by quality, trust, and relentless commitment.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-24 relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="card-3d glass-card text-center p-8 rounded-2xl shadow-3d hover-lift">
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-4xl font-black text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-section-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Milestones
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Our <span className="text-gradient">Growth Story</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center group-hover:bg-accent/25 transition-colors shadow-lg">
                      <milestone.icon className="h-7 w-7 text-accent" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2 min-h-[20px]" />
                    )}
                  </div>
                  <div className="flex-1 card-3d bg-card border border-border rounded-2xl p-6 shadow-product hover:shadow-product-hover transition-all mb-2">
                    <span className="text-sm font-bold text-accent">{milestone.year}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1 font-serif">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Exports */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Export History
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Recent <span className="text-gradient">Exports</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                A snapshot of our successful international shipments — delivering quality produce worldwide.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {recentExports.map((exp, i) => (
                  <div key={i} className="card-3d bg-card rounded-2xl p-6 shadow-product hover:shadow-product-hover transition-all border border-border flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center group-hover:bg-accent/25 transition-colors">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-5" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Trade With Us?</h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Browse our premium product range and get a competitive quote today.
            </p>
            <Link
              to="/commodities"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover-lift transition-all animate-pulse-glow"
            >
              Explore Our Products <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
