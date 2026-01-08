import { ArrowDown, Leaf, Ship, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="h-12 w-12 text-accent/30" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float-delayed">
        <Ship className="h-16 w-16 text-accent/20" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Trusted Global Trading Partner</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Connecting <span className="text-accent">Agriculture</span> to the World
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Premium quality agricultural commodities and FMCG products sourced and delivered globally. 
            Your trusted partner in international trade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={scrollToProducts}>
              Explore Products
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">2+</p>
              <p className="text-sm text-primary-foreground/70">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
