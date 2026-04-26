import { experienceEntries } from "@/lib/data";
import { InViewFade, RevealItem, StaggerGroup } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <StaggerGroup className="space-y-14" amount={0.15}>
          <RevealItem>
            <SectionHeader title="RACE HISTORY" subtitle="Career Seasons" />
          </RevealItem>

          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

            {experienceEntries.map((entry, index) => {
              const isRight = index % 2 === 1;

              return (
                <div
                  key={`${entry.company}-${entry.date}`}
                  className="relative mb-10 md:grid md:grid-cols-2 md:gap-12"
                >
                  <div
                    className={cn(
                      "pl-12 md:pl-0",
                      isRight ? "md:col-start-2" : "md:col-start-1",
                    )}
                  >
                    <InViewFade
                      direction={isRight ? "right" : "left"}
                      className={cn(
                        "carbon-panel glass-card rounded-[28px] border-l-4 p-6 sm:p-8",
                        isRight ? "md:ml-8" : "md:mr-8",
                      )}
                      style={{ borderLeftColor: entry.accent }}
                    >
                      <div className="space-y-5">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/45">
                              Pit Stop
                            </p>
                            <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.12em] text-white">
                              {entry.company}
                            </h3>
                            <p className="mt-2 text-sm text-white/70 sm:text-base">
                              {entry.role}
                            </p>
                          </div>

                          <div className="space-y-2 text-right">
                            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/60">
                              {`Season ${entry.date}`}
                            </p>
                            <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/65">
                              {entry.location}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-3 text-sm leading-7 text-white/72 sm:text-[0.96rem]">
                          {entry.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span
                                className="mt-3 h-px w-4 shrink-0"
                                style={{ backgroundColor: entry.accent }}
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </InViewFade>
                  </div>

                  <div
                    className="absolute left-5 top-7 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background md:left-1/2"
                    style={{ backgroundColor: entry.accent }}
                  />
                </div>
              );
            })}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}

