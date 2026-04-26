import type { CSSProperties } from "react";
import { skillCategories } from "@/lib/data";
import { RevealItem, StaggerGroup } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const palette = ["#0066CC", "#E8002D", "#D4AF37"];
const floatPresets = [
  { animationClass: "skill-float--northwest", duration: "8.6s",  delay: "-1.8s" },
  { animationClass: "skill-float--southeast", duration: "11.2s", delay: "-4.1s" },
  { animationClass: "skill-float--orbit",     duration: "10.4s", delay: "-2.6s" },
  { animationClass: "skill-float--rise",      duration: "9.4s",  delay: "-5.2s" },
  { animationClass: "skill-float--glide",     duration: "12.1s", delay: "-3.4s" },
  { animationClass: "skill-float--drift",     duration: "10.8s", delay: "-6.1s" },
] as const;

const CONTAINER = 940;
const RADIUS    = 400;
const CX        = CONTAINER / 2; // 470
const CY        = CONTAINER / 2; // 470

function getOrbitalPos(index: number) {
  const angle = (-90 + index * 60) * (Math.PI / 180);
  return {
    left: CX + RADIUS * Math.cos(angle),
    top:  CY + RADIUS * Math.sin(angle),
  };
}

interface CardProps {
  category:      (typeof skillCategories)[number];
  categoryIndex: number;
}

function SkillCard({ category, categoryIndex }: CardProps) {
  const preset = floatPresets[categoryIndex % floatPresets.length];
  return (
    <div
      className={`skill-float-shell ${preset.animationClass}`}
      style={{ "--float-duration": preset.duration, "--float-delay": preset.delay } as CSSProperties}
    >
      <article className="skill-float-card carbon-panel glass-card h-full rounded-[28px] p-5">
        <div className="mb-4">
          <p className="section-kicker">System Group</p>
          <h3 className="mt-1 font-display text-lg uppercase tracking-[0.12em] text-white">
            {category.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span
              key={skill}
              className="skill-pill inline-flex"
              style={{ borderColor: `${palette[i % palette.length]}CC` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export function Skills() {
  // First 6 cards orbit the ring; 7th sits at center
  const outerCategories = skillCategories.slice(0, 6);
  const centerCategory  = skillCategories[6];

  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <StaggerGroup className="space-y-14" amount={0.15}>
          <RevealItem>
            <SectionHeader title="TECHNICAL SPECS" subtitle="Under the Hood" />
          </RevealItem>

          {/* ── Mobile / Tablet: 2-col grid ─────────────────────── */}
          <div className="grid gap-6 md:grid-cols-2 xl:hidden">
            {skillCategories.map((category, i) => (
              <RevealItem key={category.title}>
                <SkillCard category={category} categoryIndex={i} />
              </RevealItem>
            ))}
          </div>

          {/* ── Desktop: orbital / radial layout ────────────────── */}
          <div
            className="relative mx-auto hidden xl:block"
            style={{ width: CONTAINER, height: CONTAINER }}
          >
            {/* Decorative orbit ring */}
            <svg
              className="pointer-events-none absolute inset-0 opacity-20"
              width={CONTAINER}
              height={CONTAINER}
            >
              <circle
                cx={CX} cy={CY} r={RADIUS}
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="1"
                strokeDasharray="6 10"
              />
              <defs>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#0066CC" />
                  <stop offset="50%"  stopColor="#E8002D" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
            </svg>

            {/* ── Center card ───────────────────── */}
            {centerCategory && (
              <div
                className="absolute"
                style={{ left: CX, top: CY, transform: "translate(-50%,-50%)", width: 240 }}
              >
                <RevealItem>
                  <SkillCard category={centerCategory} categoryIndex={6} />
                </RevealItem>
              </div>
            )}

            {/* ── Orbital cards ─────────────────── */}
            {outerCategories.map((category, i) => {
              const pos = getOrbitalPos(i);
              return (
                <div
                  key={category.title}
                  className="absolute"
                  style={{ left: pos.left, top: pos.top, transform: "translate(-50%,-50%)", width: 220 }}
                >
                  <RevealItem>
                    <SkillCard category={category} categoryIndex={i} />
                  </RevealItem>
                </div>
              );
            })}
          </div>

        </StaggerGroup>
      </div>
    </section>
  );
}
