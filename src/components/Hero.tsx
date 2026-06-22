import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import hero1 from "@/assets/hero-1.mp4.asset.json";
import hero2 from "@/assets/hero-2.mp4.asset.json";
import heroPoster from "@/assets/hero-banner.jpg";

// Asset pointers resolve to /__l5e/... which is only served by Lovable hosting.
// When deployed elsewhere (e.g. Netlify), prefix with the Lovable CDN origin
// so the videos still load from Lovable's asset storage.
const ASSET_ORIGIN =
  typeof window !== "undefined" && !window.location.host.includes("lovable")
    ? "https://zairglobaltrade.lovable.app"
    : "";
const videos = [`${ASSET_ORIGIN}${hero1.url}`, `${ASSET_ORIGIN}${hero2.url}`];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [srcA, setSrcA] = useState<string | null>(null);
  const [srcB, setSrcB] = useState<string | null>(null);
  const [enableVideo, setEnableVideo] = useState(false);
  const indexRef = useRef(0);

  // Load videos on all devices. Only skip if the user explicitly prefers reduced motion.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // keep poster only

    const smallScreen = window.matchMedia?.("(max-width: 640px)").matches;

    const start = () => {
      setSrcA(videos[0]);
      setEnableVideo(true);
      // Some mobile browsers (iOS Safari, in-app webviews) need an explicit play() call.
      requestAnimationFrame(() => {
        videoARef.current?.play().catch(() => {});
      });
      setTimeout(() => setSrcB(videos[1]), smallScreen ? 6000 : 3000);
    };

    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void })
        .requestIdleCallback(start);
    } else {
      setTimeout(start, 400);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleEnded = (which: "A" | "B") => {
    const next = which === "A" ? 1 : 0;
    setActive(next);
    const nextIndex = (indexRef.current + 1) % videos.length;
    indexRef.current = nextIndex;
    if (which === "A") {
      // Free the just-finished layer and queue next clip there.
      setSrcA(videos[(nextIndex + 1) % videos.length]);
      videoBRef.current?.play().catch(() => {});
    } else {
      setSrcB(videos[(nextIndex + 1) % videos.length]);
      videoARef.current?.play().catch(() => {});
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: mediaY, scale: mediaScale }}
      >
        {/* Poster — instant LCP, always visible behind videos */}
        <img
          src={heroPoster}
          alt="Premium agricultural commodities ready for export"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />

        {enableVideo && srcA && (
          <video
            ref={videoARef}
            src={srcA}
            poster={heroPoster}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => handleEnded("A")}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              active === 0 ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        {enableVideo && srcB && (
          <video
            ref={videoBRef}
            src={srcB}
            poster={heroPoster}
            muted
            playsInline
            preload="metadata"
            onEnded={() => handleEnded("B")}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              active === 1 ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
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
