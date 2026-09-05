"use client";

import { useEffect, useState } from "react";

const backgrounds = [
  {
    id: "hero",
    src: "/BG.png",
  },
  {
    id: "treatments",
    src: "/service5.png",
  },
  {
    id: "gallery",
    src: "/service5.png",
  },
  {
    id: "process",
    src: "/service5.png",
  },
  {
    id: "recovery",
    src: "/service5.png",
  },
  {
    id: "reviews",
    src: "/service5.png",
  },
  {
    id: "recovery-2",
    src: "/service6.png",
  },
];

export default function SiteBackground() {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const sections = [
      "hero",
      "treatments",
      "gallery",
      "process",
      "recovery",
      "reviews",
      "recovery-2",
    ];

    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sections.forEach((id, index) => {
        const element = document.getElementById(id);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        const sectionCenter =
          rect.top + rect.height / 2;

        const distance = Math.abs(
          sectionCenter - viewportCenter
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveBackground(closestIndex);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  return (
    <div
      className="site-background"
      aria-hidden="true"
    >
      {backgrounds.map((background, index) => (
        <div
          key={background.id}
          className={`site-background-layer ${
            activeBackground === index
              ? "is-active"
              : ""
          }`}
        >
          <img
            src={background.src}
            alt=""
          />
        </div>
      ))}

      <div className="site-background-overlay" />
    </div>
  );
}