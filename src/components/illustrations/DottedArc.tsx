import { motion } from "framer-motion";

interface DottedArcProps {
  className?: string;
  delay?: number;
}

const DottedArc = ({ className = "", delay = 0 }: DottedArcProps) => (
  <motion.svg
    viewBox="0 0 200 100"
    fill="none"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
  >
    <motion.path
      d="M10 90 Q50 10 100 50 Q150 90 190 20"
      stroke="hsl(38 70% 50% / 0.2)"
      strokeWidth="2"
      strokeDasharray="4 8"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: delay + 0.2 }}
    />
    {/* Dots at curve points */}
    {[
      [10, 90], [55, 30], [100, 50], [145, 70], [190, 20]
    ].map(([cx, cy], i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={cy}
        r="3"
        fill="hsl(38 70% 50% / 0.3)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.5 + i * 0.2 }}
      />
    ))}
  </motion.svg>
);

export default DottedArc;
