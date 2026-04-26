"use client";

import { motion, useInView, type HTMLMotionProps, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const easing = [0.22, 1, 0.36, 1] as const;

type Direction = "up" | "left" | "right";

function getVariants(direction: Direction, distance: number, duration: number): Variants {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: easing },
    },
  };
}

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  amount?: number;
  delay?: number;
  stagger?: number;
};

export function StaggerGroup({
  children,
  className,
  amount = 0.2,
  delay = 0,
  stagger = 0.12,
  ...props
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = HTMLMotionProps<"div"> & {
  direction?: Direction;
  distance?: number;
  duration?: number;
};

export function RevealItem({
  children,
  className,
  direction = "up",
  distance = 32,
  duration = 0.7,
  ...props
}: RevealItemProps) {
  return (
    <motion.div
      variants={getVariants(direction, distance, duration)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type InViewFadeProps = RevealItemProps & {
  amount?: number;
};

export function InViewFade({
  children,
  className,
  direction = "up",
  distance = 32,
  duration = 0.7,
  amount = 0.25,
  ...props
}: InViewFadeProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants(direction, distance, duration)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

