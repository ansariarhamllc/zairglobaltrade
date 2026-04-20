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
    const size = 120 + Math.random() * 60;
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
          {/* Outer water ring */}
          <span
            className="absolute rounded-full animate-water-ripple"
            style={{
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              marginLeft: -r.size / 2,
              marginTop: -r.size / 2,
              border: "2px solid hsl(var(--accent) / 0.6)",
              background:
                "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, hsl(var(--accent) / 0.05) 40%, transparent 70%)",
              boxShadow:
                "0 0 20px hsl(var(--accent) / 0.4), inset 0 0 15px hsl(var(--background) / 0.3)",
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
              border: "1px solid hsl(var(--primary) / 0.5)",
              background:
                "radial-gradient(circle, hsl(var(--background) / 0.2) 0%, transparent 60%)",
            }}
          />
          {/* Center splash */}
          <span
            className="absolute rounded-full animate-water-splash"
            style={{
              left: r.x,
              top: r.y,
              width: 12,
              height: 12,
              marginLeft: -6,
              marginTop: -6,
              background: "hsl(var(--accent))",
              boxShadow: "0 0 16px hsl(var(--accent) / 0.9)",
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default TouchRipple;
