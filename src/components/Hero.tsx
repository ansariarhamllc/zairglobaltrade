import { ArrowRight, Leaf, Ship, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="h-12 w-12 text-accent/30" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-20"
        animate={{ y: [10, -15, 10], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Ship className="h-16 w-16 text-accent/20" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-32"
        animate={{ y: [-5, 12, -5], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Sparkles className="h-8 w-8 text-accent/20" />
      </motion.div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-accent/20"
          >
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent tracking-wide">Trusted Global Trading Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-8 leading-[1.1] tracking-tight"
          >
            Connecting{" "}
            <span className="relative inline-block">
              <span className="text-accent">Agriculture</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                <motion.path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 6"
                  stroke="hsl(38 70% 50%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </motion.svg>
            </span>
            <br />to the World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Premium quality agricultural commodities and FMCG products sourced from India,
            delivered globally with trust, quality, and commitment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild className="text-base px-8 py-6 animate-pulse-glow rounded-xl">
              <Link to="/commodities">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="text-base px-8 py-6 rounded-xl">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-primary-foreground/15 max-w-2xl mx-auto"
          >
            {[
              { val: "2+", label: "Years Experience" },
              { val: "10+", label: "Products" },
              { val: "50+", label: "Happy Clients" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-black text-accent">{s.val}</p>
                <p className="text-sm text-primary-foreground/60 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
