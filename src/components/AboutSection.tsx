import { Award, Globe2, Handshake, Shield } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Network",
    description: "Established trade connections in over 50 countries across 6 continents.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Strict quality control with international certifications and lab testing.",
  },
  {
    icon: Handshake,
    title: "Reliable Partner",
    description: "Committed to timely delivery and transparent business practices.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "15+ years of experience in agricultural commodity trading.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Global Agricultural Trade
            </h2>
            <p className="text-muted-foreground mb-6">
              Zair Global Trade is a leading export-import company specializing in premium 
              agricultural commodities and FMCG products. We bridge the gap between producers 
              and markets worldwide, ensuring quality products reach their destination efficiently.
            </p>
            <p className="text-muted-foreground mb-8">
              With established relationships with farmers, cooperatives, and suppliers globally, 
              we provide competitive pricing, reliable logistics, and exceptional customer service 
              for all your commodity sourcing needs.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=600&fit=crop"
                alt="Agricultural field"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-6 border border-border">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
