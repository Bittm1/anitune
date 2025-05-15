// src/hooks/useCardEffects.js
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export function useCardEffects(tiltRef, shineRef, options = {}) {
  useEffect(() => {
    const card = tiltRef.current;
    const shine = shineRef.current;

    if (!card || !shine) return;

    VanillaTilt.init(card, {
      max: options.max ?? 15,
      speed: options.speed ?? 300,
      glare: true,
      "max-glare": options.glare ?? 0.2,
      gyroscope: true,
    });

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      shine.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255,255,255,${options.opacity ?? 0.3}), transparent 80%)`;
    };

    card.addEventListener("mousemove", handleMouseMove);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, [tiltRef, shineRef, options]);
}
