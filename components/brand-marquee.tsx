"use client";

import { useEffect, useRef } from "react";

export default function BrandMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let currentX = 0;
    let targetX = 0;
    let animationFrame: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      // Move according to scroll direction
      targetX -= delta * 1.2;

      // Keep the movement within a reasonable range
      if (targetX < -10000) {
        targetX += 5000;
      }

      if (targetX > 0) {
        targetX -= 5000;
      }

      lastScrollY = currentScrollY;
    };

    const animate = () => {
      // Smoothly catch up to the target position
      currentX += (targetX - currentX) * 0.12;

      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translate3d(${currentX}px, 0, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const items = [
    "PAIN FREE",
    "PHYSIOTHERAPY",
    "MOVE BETTER",
    "LIVE PAIN FREE",
    "REHABILITATION",
     "PAIN FREE",
    "PHYSIOTHERAPY",
    "MOVE BETTER",
    "LIVE PAIN FREE",
    "REHABILITATION",
  ];

  return (
    <section className="relative w-full overflow-hidden border-y border-[#e9956d]/10 bg-[#f2e1d8]">
      <div
        ref={marqueeRef}
        className="flex w-max will-change-transform"
      >
        {/* First set */}
        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <MarqueeItem
              key={`first-${index}`}
              text={item}
            />
          ))}
        </div>

        {/* Second set */}
        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <MarqueeItem
              key={`second-${index}`}
              text={item}
            />
          ))}
        </div>

        {/* Third set */}
        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <MarqueeItem
              key={`third-${index}`}
              text={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeItem({ text }: { text: string }) {
  return (
    <div className="flex shrink-0 items-center">
      <span
        className={`px-7 py-5 text-[30px] font-light tracking-[-1.5px] sm:px-10 sm:py-6 sm:text-[40px] lg:text-[48px] ${
          text === "PAIN FREE" || text === "MOVE BETTER"
            ? "text-[#111111]"
            : "text-[#df8b64]"
        }`}
      >
        {text}
      </span>

      <span className="h-2 w-2 shrink-0 rounded-full bg-[#df8b64] sm:h-2.5 sm:w-2.5" />
    </div>
  );
}