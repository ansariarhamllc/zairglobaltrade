import { useEffect, useRef, useState } from "react";

const GlassCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Inner dot follows instantly
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      if (!isVisible) setIsVisible(true);

      // Detect interactive elements
      const target = e.target as HTMLElement;
      const interactive = !!target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      );
      setIsPointer(interactive);
    };

    const animateTrail = () => {
      // Smooth lerp for the glass orb
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateTrail);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    rafId = requestAnimationFrame(animateTrail);

    // Hide native cursor
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
      document.documentElement.style.cursor = "";
    };
  }, [isVisible]);

  return (
    <>
      {/* Glassmorphism trailing orb */}
      <div
        ref={trailRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: isPointer ? 64 : 40,
          height: isPointer ? 64 : 40,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle at 30% 30%, hsl(var(--accent) / 0.35), hsl(var(--primary) / 0.15) 60%, transparent 80%)",
          backdropFilter: "blur(8px) saturate(180%)",
          WebkitBackdropFilter: "blur(8px) saturate(180%)",
          border: "1px solid hsl(var(--accent) / 0.4)",
          boxShadow:
            "0 8px 32px hsl(var(--accent) / 0.25), inset 0 0 12px hsl(var(--background) / 0.3)",
          opacity: isVisible ? (isClicking ? 0.6 : 1) : 0,
          transition:
            "width 0.35s cubic-bezier(0.23, 1, 0.32, 1), height 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease, background 0.3s ease",
          willChange: "transform, width, height",
        }}
      />
      {/* Inner precision dot */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block"
        style={{
          width: isClicking ? 6 : 8,
          height: isClicking ? 6 : 8,
          borderRadius: "9999px",
          background: "hsl(var(--accent))",
          boxShadow: "0 0 10px hsl(var(--accent) / 0.8)",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default GlassCursor;
