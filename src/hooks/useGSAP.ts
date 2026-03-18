"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollParallax(
  selector: string,
  yAmount: number = 50,
  options?: { scrub?: number; start?: string; end?: string }
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch || !containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    const animations: gsap.core.Tween[] = [];

    elements.forEach((el) => {
      const tween = gsap.to(el, {
        y: yAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: options?.start || "top bottom",
          end: options?.end || "bottom top",
          scrub: options?.scrub ?? 1,
        },
      });
      animations.push(tween);
    });

    return () => {
      animations.forEach((tween) => tween.kill());
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, [selector, yAmount, options?.scrub, options?.start, options?.end]);

  return containerRef;
}

export { gsap, ScrollTrigger };
