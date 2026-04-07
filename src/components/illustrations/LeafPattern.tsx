import { motion } from "framer-motion";

interface LeafPatternProps {
  className?: string;
  delay?: number;
}

const LeafPattern = ({ className = "", delay = 0 }: LeafPatternProps) => (
  <motion.svg
    viewBox="0 0 120 120"
    fill="none"
    className={className}
    initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Main leaf */}
    <motion.path
      d="M60 10 Q20 40 30 80 Q40 100 60 110 Q80 100 90 80 Q100 40 60 10Z"
      fill="hsl(38 70% 50% / 0.08)"
      stroke="hsl(38 70% 50% / 0.2)"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: delay + 0.2 }}
    />
    {/* Vein */}
    <motion.path
      d="M60 20 L60 100"
      stroke="hsl(38 70% 50% / 0.15)"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: delay + 0.5 }}
    />
    {/* Side veins */}
    {[35, 50, 65, 80].map((y, i) => (
      <motion.path
        key={i}
        d={`M60 ${y} Q${40 - i * 2} ${y - 8} ${35 + i * 2} ${y - 5}`}
        stroke="hsl(38 70% 50% / 0.12)"
        strokeWidth="0.8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.7 + i * 0.1 }}
      />
    ))}
    {[35, 50, 65, 80].map((y, i) => (
      <motion.path
        key={`r${i}`}
        d={`M60 ${y} Q${80 + i * 2} ${y - 8} ${85 - i * 2} ${y - 5}`}
        stroke="hsl(38 70% 50% / 0.12)"
        strokeWidth="0.8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.8 + i * 0.1 }}
      />
    ))}
  </motion.svg>
);

export default LeafPattern;
