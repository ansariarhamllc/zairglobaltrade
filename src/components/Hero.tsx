import { ArrowRight, TrendingUp, Leaf, Globe, Package } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const floatingItems = [
  { icon: Leaf, x: "10%", y: "20%", delay: 0, size: 32 },
  { icon: Globe, x: "85%", y: "30%", delay: 0.5, size: 28 },
  { icon: Package, x: "75%", y: "70%", delay: 1, size: 24 },
  { icon: Leaf, x: "15%", y: "75%", delay: 1.5, size: 20 },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBanner}
        alt="Golden wheat fields"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* 3D Floating icons */}
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-10 text-accent/40"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
            rotateX: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.icon size={item.size} />
        </motion.div>
      ))}

      {/* 3D rotating globe/sphere effect */}
      <motion.div
        className="absolute z-[1] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-accent/10"
        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute z-[1] w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-accent/5"
        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* 3D perspective cards floating */}
      <motion.div
        className="absolute z-[2] top-[15%] left-[5%] md:left-[10%] w-20 h-14 md:w-28 md:h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          y: [0, -15, 0],
          rotateX: [0, 10, 0],
          rotateY: [-15, 15, -15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute z-[2] bottom-[20%] right-[5%] md:right-[12%] w-24 h-16 md:w-32 md:h-22 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20 shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          y: [0, 20, 0],
          rotateX: [5, -5, 5],
          rotateY: [10, -10, 10],
        }}
        transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-accent/30"
          >
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent tracking-wide">Trusted Global Trading Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight"
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
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Premium quality agricultural commodities and FMCG products sourced from India,
            delivered globally with trust, quality, and commitment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
            className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/20 max-w-2xl mx-auto"
          >
            {[
              { val: "2+", label: "Years Experience" },
              { val: "12+", label: "Products" },
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
                <p className="text-sm text-white/60 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
