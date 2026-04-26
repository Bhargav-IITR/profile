"use client";

import { useEffect, useRef, useState } from "react";

type BlobConfig = {
  className: string;
  factor: number;
  invert?: boolean;
};

type Point = {
  x: number;
  y: number;
};

const blobConfigs: BlobConfig[] = [
  { className: "aurora-blob aurora-blob--1", factor: 0.08 },
  { className: "aurora-blob aurora-blob--2", factor: 0.14 },
  { className: "aurora-blob aurora-blob--3", factor: 0.06, invert: true },
  { className: "aurora-blob aurora-blob--4", factor: 0.22 },
];

const IDLE_DELAY_MS = 3000;
const LERP_FACTOR = 0.05;

export function AuroraBackground() {
  const [isDesktop, setIsDesktop] = useState(false);
  const blobRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentPositionsRef = useRef<Point[]>(
    blobConfigs.map(() => ({ x: 0, y: 0 })),
  );
  const targetPositionsRef = useRef<Point[]>(
    blobConfigs.map(() => ({ x: 0, y: 0 })),
  );
  const idleTimeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const isIdleRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const blobs = blobRefs.current.filter(
      (blob): blob is HTMLDivElement => blob !== null,
    );

    if (blobs.length !== blobConfigs.length) {
      return;
    }

    const root = document.documentElement;

    const setSpotlightPosition = (x: number, y: number) => {
      root.style.setProperty("--mouse-x", `${x}px`);
      root.style.setProperty("--mouse-y", `${y}px`);
    };

    const setIdleState = (idle: boolean) => {
      if (isIdleRef.current === idle) {
        return;
      }

      isIdleRef.current = idle;

      blobs.forEach((blob) => {
        if (idle) {
          blob.style.removeProperty("transform");
          blob.classList.add("is-idle");
        } else {
          blob.classList.remove("is-idle");
        }
      });
    };

    const scheduleIdle = () => {
      if (idleTimeoutRef.current !== null) {
        window.clearTimeout(idleTimeoutRef.current);
      }

      idleTimeoutRef.current = window.setTimeout(() => {
        setIdleState(true);
      }, IDLE_DELAY_MS);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const offsetX = event.clientX - window.innerWidth / 2;
      const offsetY = event.clientY - window.innerHeight / 2;

      setSpotlightPosition(event.clientX, event.clientY);

      blobConfigs.forEach((config, index) => {
        const direction = config.invert ? -1 : 1;
        targetPositionsRef.current[index].x = offsetX * config.factor * direction;
        targetPositionsRef.current[index].y = offsetY * config.factor * direction;
      });

      if (isIdleRef.current) {
        setIdleState(false);
      }

      scheduleIdle();
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDesktop(false);
        return;
      }

      setSpotlightPosition(window.innerWidth / 2, window.innerHeight / 2);
    };

    setSpotlightPosition(window.innerWidth / 2, window.innerHeight / 2);
    scheduleIdle();

    const animate = () => {
      if (!isIdleRef.current) {
        blobConfigs.forEach((_, index) => {
          const current = currentPositionsRef.current[index];
          const target = targetPositionsRef.current[index];
          const blob = blobs[index];

          current.x += (target.x - current.x) * LERP_FACTOR;
          current.y += (target.y - current.y) * LERP_FACTOR;

          blob.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`;
        });
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (idleTimeoutRef.current !== null) {
        window.clearTimeout(idleTimeoutRef.current);
      }

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }

      blobs.forEach((blob) => {
        blob.classList.remove("is-idle");
        blob.style.removeProperty("transform");
      });
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="aurora-background" aria-hidden="true">
      {blobConfigs.map((config, index) => (
        <div
          key={config.className}
          ref={(element) => {
            blobRefs.current[index] = element;
          }}
          className={config.className}
        />
      ))}
      <div className="aurora-spotlight" />
    </div>
  );
}
