import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Calendar, Globe2, TrendingUp, Users, Truck } from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Zair Global Trade was established with a vision to connect Indian agriculture to the world.",
    icon: Calendar,
  },
  {
    year: "2023",
    title: "First Export Shipment",
    description: "Successfully completed our first international shipment of premium agricultural commodities.",
    icon: Truck,
  },
  {
    year: "2024",
    title: "Product Range Expansion",
    description: "Expanded our portfolio to include fresh fruits, vegetables, grains, and FMCG products.",
    icon: TrendingUp,
  },
  {
    year: "2025",
    title: "Growing Global Presence",
    description: "Building trade relationships with buyers across multiple countries and continents.",
    icon: Globe2,
  },
];

const stats = [
  { label: "Years in Business", value: "2+", icon: Award },
  { label: "Product Categories", value: "5+", icon: TrendingUp },
  { label: "Happy Clients", value: "50+", icon: Users },
  { label: "Countries Reached", value: "10+", icon: Globe2 },
];

const Experience = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">2+ Years of Trading Excellence</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              From our humble beginnings to becoming a trusted name in agricultural exports,
              every step has been driven by quality, trust, and commitment.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-muted/50 border border-border">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Milestones
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <milestone.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-xl p-6">
                    <span className="text-sm font-medium text-primary">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-2">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
