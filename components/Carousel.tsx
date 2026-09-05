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
  const [containerWidth, setContainerWidth] = useState<number>(baseWidth);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const clientWidth = containerRef.current.clientWidth;
        if (clientWidth > 0) {
          setContainerWidth(Math.min(baseWidth, clientWidth));
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(Math.min(baseWidth, entry.contentRect.width));
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", updateWidth);
      resizeObserver.disconnect();
    };
  }, [baseWidth]);

  const itemWidth = containerWidth > 0 ? containerWidth : baseWidth;
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
    const threshold = Math.min(itemWidth * 0.2, 80);

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
        maxWidth: "100%",
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
          width: "max-content",
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
              width: `${itemWidth}px`,
              maxWidth: "100%",
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
            marginTop: 20,
          }}
        >
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                background: i === index ? "#df8b64" : "rgba(23, 59, 54, 0.25)",
                cursor: "pointer",
                transition: "all 250ms ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}