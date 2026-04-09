import { ArrowRight, TrendingUp, Leaf, Globe, Package, Sparkles, Star, Gem } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

interface FallingItem {
  icon: React.ElementType;
  x: string;
  y: string;
  delay: number;
  size: number;
}

const floatingItems: FallingItem[] = [
  { icon: Leaf, x: "10%", y: "20%", delay: 0, size: 32 },
  { icon: Globe, x: "85%", y: "30%", delay: 0.5, size: 28 },
  { icon: Package, x: "75%", y: "70%", delay: 1, size: 24 },
  { icon: Leaf, x: "15%", y: "75%", delay: 1.5, size: 20 },
  { icon: Sparkles, x: "50%", y: "15%", delay: 0.3, size: 22 },
  { icon: Star, x: "90%", y: "60%", delay: 0.8, size: 18 },
  { icon: Gem, x: "25%", y: "45%", delay: 1.2, size: 26 },
];

const ClickableFloatingIcon = ({ item, index }: { item: FallingItem; index: number }) => {
  const [fallen, setFallen] = useState(false);

  const handleClick = useCallback(() => {
    if (fallen) return;
    setFallen(true);
    setTimeout(() => setFallen(false), 2500);
  }, [fallen]);

  return (
    <motion.div
      key={index}
      className="absolute z-10 text-accent/40 cursor-pointer select-none"
      style={{ left: item.x, top: item.y }}
      animate={
        fallen
          ? {
              y: [0, -15, -25, -30, -28, -20, 0, 40, 100, 200, 350, 550, 900],
              rotate: [0, -5, -8, -3, 5, 15, 30, 55, 90, 140, 200, 280, 400],
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9, 0.7, 0.4, 0],
              scale: [1, 1.1, 1.15, 1.1, 1.05, 1, 0.95, 0.9, 0.85, 0.8, 0.7, 0.5, 0.3],
              x: [0, 2, -3, 5, -4, 6, -2, 8, -5, 10, -3, 7, 0],
            }
          : {
              y: [0, -20, 0],
              rotateY: [0, 360],
              rotateX: [0, 15, 0],
              opacity: 1,
              scale: 1,
              rotate: 0,
            }
      }
      transition={
        fallen
          ? { duration: 2, times: [0, 0.05, 0.1, 0.15, 0.18, 0.22, 0.3, 0.4, 0.5, 0.62, 0.75, 0.88, 1], ease: "linear" }
          : { duration: 6, delay: item.delay, repeat: Infinity, ease: "easeInOut" }
      }
      onClick={handleClick}
      whileHover={{ scale: 1.4, color: "hsl(38 70% 50%)" }}
      whileTap={{ scale: 0.8 }}
    >
      <item.icon size={item.size} />
    </motion.div>
  );
};

const ClickableGlassCard = ({
  className,
  animateProps,
  transitionProps,
}: {
  className: string;
  animateProps: Record<string, any>;
  transitionProps: Record<string, any>;
}) => {
  const [fallen, setFallen] = useState(false);

  const handleClick = useCallback(() => {
    if (fallen) return;
    setFallen(true);
    setTimeout(() => setFallen(false), 3000);
  }, [fallen]);

  return (
    <motion.div
      className={`${className} cursor-pointer`}
      style={{ transformStyle: "preserve-3d" }}
      animate={
        fallen
          ? {
              y: [0, -20, -35, -40, -38, -30, -10, 30, 90, 180, 320, 500, 850],
              rotate: [0, 3, 8, 5, -2, -10, -20, -35, -55, -80, -120, -170, -240],
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 0.95, 0.85, 0.6, 0.3, 0],
              scale: [1, 1.05, 1.1, 1.08, 1.04, 1, 0.97, 0.93, 0.88, 0.8, 0.65, 0.45, 0.2],
            }
          : animateProps
      }
      transition={
        fallen
          ? { duration: 2.2, times: [0, 0.05, 0.1, 0.15, 0.18, 0.22, 0.3, 0.4, 0.5, 0.62, 0.75, 0.88, 1], ease: "linear" }
          : transitionProps
      }
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
    />
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <img
          src={heroBanner}
          alt="Golden wheat fields"
          className="w-full h-[120%] object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
      </motion.div>

      {/* Static overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      {/* Clickable floating icons */}
      {floatingItems.map((item, i) => (
        <ClickableFloatingIcon key={i} item={item} index={i} />
      ))}

      {/* Orbital rings - CSS animation for better perf */}
      <div
        className="absolute z-[1] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-accent/10 animate-[spin_60s_linear_infinite]"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute z-[1] w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-accent/5 animate-[spin_45s_linear_infinite_reverse]"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Clickable 3D glass cards */}
      <ClickableGlassCard
        className="absolute z-[2] top-[15%] left-[5%] md:left-[10%] w-20 h-14 md:w-28 md:h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
        animateProps={{
          y: [0, -15, 0],
          rotateX: [0, 10, 0],
          rotateY: [-15, 15, -15],
        }}
        transitionProps={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <ClickableGlassCard
        className="absolute z-[2] bottom-[20%] right-[5%] md:right-[12%] w-24 h-16 md:w-32 md:h-22 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20 shadow-2xl"
        animateProps={{
          y: [0, 20, 0],
          rotateX: [5, -5, 5],
          rotateY: [10, -10, 10],
        }}
        transitionProps={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <ClickableGlassCard
        className="absolute z-[2] top-[55%] left-[3%] md:left-[8%] w-16 h-12 md:w-24 md:h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl"
        animateProps={{
          y: [0, 12, 0],
          rotateX: [-5, 8, -5],
          rotateY: [5, -12, 5],
        }}
        transitionProps={{ duration: 9, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content with parallax */}
      <motion.div
        className="container mx-auto px-4 pt-20 relative z-10"
        style={{ y: contentY }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-accent/30"
          >
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent tracking-wide">
              Trusted Global Trading Partner
            </span>
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
            <br />
            to the World
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
            <motion.div
              className="relative group"
              style={{ perspective: 800 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                whileHover={{ rotateX: -8, rotateY: 5, z: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button variant="hero" size="lg" asChild className="text-base px-8 py-6 animate-pulse-glow rounded-xl relative overflow-hidden">
                  <Link to="/commodities">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    Explore Our Products
                    <motion.span
                      className="inline-block ml-2"
                      whileHover={{ x: 5, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
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
      </motion.div>
    </section>
  );
};

export default Hero;
