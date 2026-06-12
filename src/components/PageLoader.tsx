import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 10 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-10 w-full max-w-xs">
        {/* Minimal brand mark */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[11px] font-semibold tracking-[0.35em] uppercase text-foreground/90">
            Zair Global Trade
          </h2>
        </motion.div>

        {/* Thin minimal progress line */}
        <div className="w-full h-px bg-border overflow-hidden">
          <motion.div
            className="h-full bg-foreground/80"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.15, ease: "linear" }}
          />
        </div>

        {/* Percentage counter */}
        <motion.span
          className="text-[10px] font-medium tracking-widest text-muted-foreground tabular-nums"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Math.min(Math.round(progress), 100).toString().padStart(3, "0")}
        </motion.span>
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
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default LoaderWrapper;
