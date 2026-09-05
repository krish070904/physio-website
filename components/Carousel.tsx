"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, type PanInfo } from "motion/react";

export interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  gap?: number;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  { id: 1, content: <div style={{ padding: 24 }}>Slide 1</div> },
  { id: 2, content: <div style={{ padding: 24 }}>Slide 2</div> },
  { id: 3, content: <div style={{ padding: 24 }}>Slide 3</div> },
];

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  gap = 16,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const itemWidth = baseWidth;
  const trackItemOffset = itemWidth + gap;
  const count = items.length;

  const goTo = (nextIndex: number) => {
    let clamped = nextIndex;

    if (loop) {
      clamped = ((nextIndex % count) + count) % count;
    } else {
      clamped = Math.max(0, Math.min(nextIndex, count - 1));
    }

    setIndex(clamped);
  };

  useEffect(() => {
    controls.start({
      x: -index * trackItemOffset,
      transition: { type: "spring", stiffness: 300, damping: 32 },
    });
  }, [index, trackItemOffset, controls]);

  useEffect(() => {
    if (!autoplay || isPaused || count <= 1) return;

    const interval = setInterval(() => {
      goTo(index + 1);
    }, autoplayDelay);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, autoplayDelay, isPaused, index, count]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = itemWidth * 0.25;

    if (info.offset.x < -threshold) {
      goTo(index + 1);
    } else if (info.offset.x > threshold) {
      goTo(index - 1);
    } else {
      controls.start({
        x: -index * trackItemOffset,
        transition: { type: "spring", stiffness: 300, damping: 32 },
      });
    }
  };

  const dragConstraints = useMemo(() => {
    if (loop) return undefined;
    const maxDrag = 0;
    const minDrag = -(trackItemOffset * (count - 1));
    return { left: minDrag, right: maxDrag };
  }, [loop, trackItemOffset, count]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: itemWidth,
        margin: "0 auto",
        overflow: "hidden",
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        style={{
          display: "flex",
          gap,
          cursor: "grab",
          x,
        }}
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.15}
        animate={controls}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              flex: `0 0 ${itemWidth}px`,
              width: itemWidth,
              borderRadius: round ? "50%" : 24,
              aspectRatio: round ? "1 / 1" : undefined,
              overflow: "hidden",
              userSelect: "none",
            }}
          >
            {item.content}
          </div>
        ))}
      </motion.div>

      {/* Dots */}
      {count > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 16,
          }}
        >
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: i === index ? 20 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                background: i === index ? "#173b36" : "#cfd6d3",
                cursor: "pointer",
                transition: "all 200ms ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}