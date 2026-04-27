import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { EngineSpecsCard } from "@/components/EngineSpecsCard";
import { RevealItem, StaggerGroup } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";
import { heroStats, heroTypewriterWords, marqueeItems } from "@/lib/data";

export function Hero() {
  const marqueeText = `${marqueeItems.join(" \u2022 ")} \u2022`;

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 flex-col overflow-hidden pt-6"
    >
      <div className="section-shell flex flex-1 items-center">
        <div className="grid w-full items-center gap-14 py-12 lg:grid-cols-[1.15fr_0.85fr]">
          <StaggerGroup className="space-y-8" amount={0.2} stagger={0.14}>
            <RevealItem>
              <p className="font-mono text-sm uppercase tracking-[0.4em] text-f1-red">
                Driver Profile
              </p>
            </RevealItem>

            <RevealItem>
              <h1
                className="font-display uppercase leading-[0.92] text-white"
                style={{
                  fontSize: "clamp(60px, 10vw, 120px)",
                  textShadow: "0 0 28px rgba(0, 102, 204, 0.32)",
                }}
              >
                BHARGAV
              </h1>
            </RevealItem>

            <RevealItem>
              <Typewriter
                words={heroTypewriterWords}
                className="text-xl text-white/80 sm:text-3xl"
              />
            </RevealItem>

            <RevealItem>
              <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Building scalable systems at BNY. IIT Roorkee EE. Based in Pune.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="#projects" className="action-button action-button-outline">
                  View Garage
                </Link>
                <a
                  href="https://drive.google.com/file/d/1rH5QzT2JPBz8qxnl2YdpklaVv58dBGiN/view?usp=sharing"
                  className="action-button action-button-solid"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-wrap gap-3">
                {heroStats.map((stat) => (
                  <span key={stat} className="stat-chip">
                    {stat}
                  </span>
                ))}
              </div>
            </RevealItem>
          </StaggerGroup>

          <StaggerGroup className="relative" amount={0.2}>
            <RevealItem>
              <EngineSpecsCard />
            </RevealItem>
          </StaggerGroup>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-24 hidden justify-center md:flex">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em]">
            Scroll
          </span>
          <IconChevronDown className="animate-chevron-bounce" size={22} />
        </div>
      </div>

      <div className="marquee-shell mt-auto">
        <div className="marquee-track py-4 text-sm font-mono uppercase tracking-[0.28em] text-white/55">
          <span className="pr-10">{marqueeText}</span>
          <span className="pr-10">{marqueeText}</span>
        </div>
      </div>
    </section>
  );
}
