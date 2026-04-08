import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  const blocks = Array.from({ length: 20 }, (_, i) => i);
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "hsl(25 40% 12%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Floating particles */}
      {particles.map((i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: `hsl(38 70% ${45 + Math.random() * 20}% / ${0.3 + Math.random() * 0.4})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -60 - Math.random() * 80],
            x: [0, (Math.random() - 0.5) * 60],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="flex flex-col items-center gap-8">
        {/* Block grid loader */}
        <div className="grid grid-cols-5 grid-rows-4 gap-1.5">
          {blocks.map((i) => {
            const row = Math.floor(i / 5);
            const col = i % 5;
            const delay = (row + col) * 0.08;
            const isActive = progress > (i / blocks.length) * 100;

            return (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-sm"
                initial={{ opacity: 0.15, scale: 0.5 }}
                animate={{
                  opacity: isActive ? 1 : 0.15,
                  scale: isActive ? [0.5, 1.2, 1] : 0.5,
                  background: isActive
                    ? "hsl(38 70% 50%)"
                    : "hsl(35 30% 30%)",
                }}
                transition={{
                  duration: 0.4,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            );
          })}
        </div>

        {/* Brand text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2
            className="text-xl font-bold tracking-wider"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "hsl(38 70% 50%)",
            }}
          >
            ZAIR GLOBAL TRADE
          </h2>
          <p
            className="text-xs mt-1 tracking-widest uppercase"
            style={{ color: "hsl(35 30% 60%)" }}
          >
            Loading Excellence
          </p>
        </motion.div>

        {/* Progress bar */}
        <div
          className="w-48 h-0.5 rounded-full overflow-hidden"
          style={{ background: "hsl(25 20% 20%)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: "hsl(38 70% 50%)" }}
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default LoaderWrapper;
