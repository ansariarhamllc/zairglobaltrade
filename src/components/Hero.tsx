import { ArrowRight, Leaf, Ship, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="h-12 w-12 text-accent/30" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float-delayed">
        <Ship className="h-16 w-16 text-accent/20" />
      </div>
      <div className="absolute top-40 right-32 animate-float-delayed">
        <Sparkles className="h-8 w-8 text-accent/20" />
      </div>

      {/* Warm gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-slide-up inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-accent/20">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent tracking-wide">Trusted Global Trading Partner</span>
          </div>

          <h1 className="animate-slide-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-8 leading-[1.1] tracking-tight">
            Connecting{" "}
            <span className="relative inline-block">
              <span className="text-accent">Agriculture</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 6" stroke="hsl(38 70% 50%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <br />to the World
          </h1>

          <p className="animate-slide-up-delay-2 text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium quality agricultural commodities and FMCG products sourced from India, 
            delivered globally with trust, quality, and commitment.
          </p>

          <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild className="text-base px-8 py-6 animate-pulse-glow rounded-xl">
              <Link to="/commodities">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="text-base px-8 py-6 rounded-xl">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>

          {/* Stats row */}
          <div className="animate-slide-up-delay-3 grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-primary-foreground/15 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-accent">2+</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-accent">10+</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Products</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-accent">50+</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
