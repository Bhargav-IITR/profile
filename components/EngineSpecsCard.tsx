"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { heroEngineSpecs } from "@/lib/data";

const easing = [0.22, 1, 0.36, 1] as const;

const rowContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.15,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
};

export function EngineSpecsCard() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <div
      ref={ref}
      className="carbon-panel relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/60 p-4 shadow-glass sm:p-6"
    >
      <div className="relative space-y-4 sm:space-y-5">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#555]">
            ECU READOUT
          </span>

          <div className="flex items-center gap-2">
            <span className="ecu-live-dot" aria-hidden="true" />
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-f1-red">
              LIVE
            </span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={rowContainerVariants}
          className="space-y-3.5"
        >
          {heroEngineSpecs.map((spec) => (
            <motion.div
              key={spec.label}
              variants={rowVariants}
              className="grid grid-cols-[56px_minmax(0,1fr)_112px] items-center gap-x-2 font-mono text-[9px] uppercase tracking-[0.08em] sm:grid-cols-[78px_minmax(0,1fr)_auto] sm:gap-x-3 sm:text-xs sm:tracking-[0.14em]"
            >
              <span className="text-white/55">{spec.label}</span>
              <span className="ecu-dot-leader h-px flex-1" aria-hidden="true" />
              <span
                className="max-w-[112px] text-right text-[8px] leading-tight tracking-[0.02em] [overflow-wrap:anywhere] sm:max-w-none sm:justify-self-end sm:whitespace-nowrap sm:text-xs sm:tracking-[0.14em]"
                style={{ color: spec.accent }}
              >
                {spec.value}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="h-px bg-white/10" />

        <div className="space-y-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#666]">
            OUTPUT
          </p>

          <div className="space-y-2 font-mono uppercase">
            <span className="block text-[9px] tracking-[0.18em] text-[#777]">
              SYSTEMS ONLINE
            </span>

            <div className="flex min-w-0 items-center gap-1 text-white/30">
              <span>[</span>
              <div className="h-2 flex-1 overflow-hidden rounded-sm bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isInView ? "86%" : 0 }}
                  transition={{ duration: 1.2, ease: easing }}
                  className="h-full rounded-sm bg-gradient-to-r from-bmw-blue to-f1-red"
                />
              </div>
              <span>]</span>
              <span className="shrink-0 pl-2 text-xs text-white">86%</span>
            </div>
          </div>
        </div>

        <div className="pt-1 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-white/35 sm:text-[9px] sm:tracking-[0.18em]">
          {"BHARGAV-IITR \u00B7 BNY \u00B7 IIT ROORKEE"}
        </div>
      </div>
    </div>
  );
}
