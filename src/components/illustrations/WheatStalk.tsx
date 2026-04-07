import { motion } from "framer-motion";

interface WheatStalkProps {
  className?: string;
  delay?: number;
  flip?: boolean;
}

const WheatStalk = ({ className = "", delay = 0, flip = false }: WheatStalkProps) => (
  <motion.svg
    viewBox="0 0 80 200"
    fill="none"
    className={className}
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay, ease: "easeOut" }}
  >
    {/* Stem */}
    <motion.path
      d="M40 200 Q38 150 40 100 Q42 50 40 10"
      stroke="hsl(38 70% 50% / 0.3)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: delay + 0.3 }}
    />
    {/* Grains left */}
    {[20, 35, 50, 65, 80].map((y, i) => (
      <motion.ellipse
        key={`l${i}`}
        cx={32}
        cy={y}
        rx="8"
        ry="5"
        fill="hsl(38 70% 50% / 0.15)"
        stroke="hsl(38 70% 50% / 0.25)"
        strokeWidth="1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 + i * 0.15 }}
        transform={`rotate(-30 32 ${y})`}
      />
    ))}
    {/* Grains right */}
    {[28, 43, 58, 73].map((y, i) => (
      <motion.ellipse
        key={`r${i}`}
        cx={48}
        cy={y}
        rx="8"
        ry="5"
        fill="hsl(38 70% 50% / 0.12)"
        stroke="hsl(38 70% 50% / 0.2)"
        strokeWidth="1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6 + i * 0.15 }}
        transform={`rotate(30 48 ${y})`}
      />
    ))}
  </motion.svg>
);

export default WheatStalk;
