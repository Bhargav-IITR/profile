import { aboutStats } from "@/lib/data";
import { ProgressBar } from "@/components/ProgressBar";
import { RevealItem, StaggerGroup } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <StaggerGroup className="space-y-14" amount={0.18}>
          <RevealItem>
            <SectionHeader title="ABOUT THE DRIVER" subtitle="Profile Overview" />
          </RevealItem>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <RevealItem className="glass-card rounded-[28px] p-7 sm:p-9">
              <p className="text-lg leading-9 text-white/72 sm:text-[1.15rem]">
                I&apos;m Bhargav Pratim Nath, a Software Development Engineer at BNY,
                Pune. I graduated from IIT Roorkee with a B.Tech in Electrical
                Engineering (CGPA: 8.63). I build distributed backend systems,
                multi-agent LLM workflows, and scalable infrastructure and I believe
                great engineering, like great racing, is about precision,
                reliability, and pushing limits.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="carbon-panel glass-card relative overflow-hidden rounded-[28px] border-l-4 border-l-bmw-blue p-7 sm:p-9">
                <span className="pointer-events-none absolute right-5 top-2 font-display text-[5rem] leading-none text-white/10">
                  01
                </span>

                <div className="relative space-y-7">
                  <div>
                    <p className="section-kicker">Driver Card</p>
                    <h3 className="mt-3 font-display text-3xl uppercase tracking-[0.18em] text-white">
                      BHARGAV
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {aboutStats.map((stat) => {
                      const rowClassName =
                        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-white/72";

                      if (stat.href) {
                        return (
                          <a
                            key={stat.label}
                            href={stat.href}
                            className={`${rowClassName} transition-colors duration-300 hover:text-bmw-blue`}
                          >
                            <span className="shrink-0">{stat.label}</span>
                            <span className="h-px flex-1 border-b border-dotted border-white/15" />
                            <span className="shrink-0 text-right text-white">
                              {stat.value}
                            </span>
                          </a>
                        );
                      }

                      return (
                        <div key={stat.label} className={rowClassName}>
                          <span className="shrink-0">{stat.label}</span>
                          <span className="h-px flex-1 border-b border-dotted border-white/15" />
                          <span className="shrink-0 text-right text-white">{stat.value}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/55">
                      Performance Index
                    </p>
                    <ProgressBar value={86} />
                    <div className="mt-2 flex justify-end font-mono text-xs uppercase tracking-[0.2em] text-white/55">
                      86%
                    </div>
                  </div>
                </div>
              </div>
            </RevealItem>
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
