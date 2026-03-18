"use client";

import { useRef, useCallback, useEffect, useState } from "react";

interface TiltOptions {
  maxTilt?: number;
  scale?: number;
  perspective?: number;
}

export function useTiltEffect(options: TiltOptions = {}) {
  const { maxTilt = 6, scale = 1.02, perspective = 1000 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  useEffect(() => {
    setIsHoverDevice(window.matchMedia("(hover: hover)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current || !isHoverDevice) return;

      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * maxTilt * 2;
      const rotateY = (x - 0.5) * maxTilt * 2;

      ref.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [maxTilt, scale, perspective, isHoverDevice]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective]);

  return {
    ref,
    handlers: isHoverDevice
      ? {
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
        }
      : {},
    style: {
      transition: "transform 0.15s ease-out",
      willChange: "transform" as const,
    },
  };
}
