import { useEffect, useState, useCallback } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const TouchRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    const size = 60 + Math.random() * 30;
    setRipples((prev) => [...prev, { id, x, y, size }]);
    // Auto-remove after animation
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1400);
  }, []);

  useEffect(() => {
    // Only enable on touch devices
    if (!window.matchMedia("(pointer: coarse)").matches) return;

    const handleTouchStart = (e: TouchEvent) => {
      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        addRipple(t.clientX, t.clientY);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    return () => window.removeEventListener("touchstart", handleTouchStart);
  }, [addRipple]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden"
    >
      {ripples.map((r) => (
        <span key={r.id}>
          {/* Outer water ring - soft & blurry */}
          <span
            className="absolute rounded-full animate-water-ripple"
            style={{
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              marginLeft: -r.size / 2,
              marginTop: -r.size / 2,
              border: "1px solid hsl(var(--accent) / 0.25)",
              background:
                "radial-gradient(circle, hsl(var(--accent) / 0.06) 0%, hsl(var(--accent) / 0.02) 40%, transparent 70%)",
              filter: "blur(2px)",
            }}
          />
          {/* Inner secondary ring with delay */}
          <span
            className="absolute rounded-full animate-water-ripple-delayed"
            style={{
              left: r.x,
              top: r.y,
              width: r.size * 0.6,
              height: r.size * 0.6,
              marginLeft: (-r.size * 0.6) / 2,
              marginTop: (-r.size * 0.6) / 2,
              border: "1px solid hsl(var(--primary) / 0.2)",
              background:
                "radial-gradient(circle, hsl(var(--background) / 0.08) 0%, transparent 60%)",
              filter: "blur(1.5px)",
            }}
          />
          {/* Center splash - subtle */}
          <span
            className="absolute rounded-full animate-water-splash"
            style={{
              left: r.x,
              top: r.y,
              width: 6,
              height: 6,
              marginLeft: -3,
              marginTop: -3,
              background: "hsl(var(--accent) / 0.5)",
              filter: "blur(1px)",
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default TouchRipple;
