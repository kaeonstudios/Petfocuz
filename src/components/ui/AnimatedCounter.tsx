import { useEffect, useState, useRef } from "react";

interface CounterProps {
  target: number;
  duration?: number; // duration in ms, default is 2000
  suffix?: string;
}

export default function AnimatedCounter({ target, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Respect user accessibility preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out cubic calculation for natural slowdown towards the target
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeOutProgress * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target); // Guarantee final exact value
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
