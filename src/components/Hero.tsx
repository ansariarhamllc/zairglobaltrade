import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import hero1 from "@/assets/hero-1.mp4.asset.json";
import hero2 from "@/assets/hero-2.mp4.asset.json";

const videos = [hero1.url, hero2.url];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0); // 0 -> A visible, 1 -> B visible
  const [srcA, setSrcA] = useState(videos[0]);
  const [srcB, setSrcB] = useState(videos[1]);
  const indexRef = useRef(1); // index of what's currently in B

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const mediaRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleEnded = (which: "A" | "B") => {
    // Swap active layer
    const next = which === "A" ? 1 : 0;
    setActive(next);
    // Preload next video into the layer that just finished
    const nextIndex = (indexRef.current + 1) % videos.length;
    indexRef.current = nextIndex;
    if (which === "A") {
      setSrcA(videos[nextIndex]);
      // play the now-visible B
      videoBRef.current?.play().catch(() => {});
    } else {
      setSrcB(videos[nextIndex]);
      videoARef.current?.play().catch(() => {});
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          y: mediaY,
          scale: mediaScale,
          rotateX: mediaRotate,
          transformStyle: "preserve-3d",
        }}
      >
        <video
          ref={videoARef}
          key={srcA}
          src={srcA}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => handleEnded("A")}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            active === 0 ? "opacity-100" : "opacity-0"
          }`}
        />
        <video
          ref={videoBRef}
          key={srcB}
          src={srcB}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleEnded("B")}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            active === 1 ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />

      <motion.div
        className="container mx-auto px-4 pt-20 relative z-10 will-change-transform"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-6 font-semibold"
          >
            Trusted Global Trading Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 leading-[1.1] tracking-tight"
          >
            Connecting Agriculture
            <br />
            <span className="text-accent">to the World</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-primary-foreground/75 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Premium agricultural commodities and FMCG products sourced from India,
            delivered globally with trust and quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button variant="hero" size="lg" asChild className="text-sm px-7">
              <Link to="/commodities">
                Explore Products
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="text-sm px-7">
              <Link to="/about">About Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-primary-foreground/15 max-w-lg mx-auto"
          >
            {[
              { val: "2+", label: "Years" },
              { val: "12+", label: "Products" },
              { val: "50+", label: "Clients" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-primary-foreground">{s.val}</p>
                <p className="text-sm uppercase tracking-widest text-primary-foreground/55 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
