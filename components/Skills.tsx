import { skillCategories } from "@/lib/data";
import { RevealItem, StaggerGroup } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const palette = ["#0066CC", "#E8002D", "#D4AF37"];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <StaggerGroup className="space-y-14" amount={0.15}>
          <RevealItem>
            <SectionHeader title="TECHNICAL SPECS" subtitle="Under the Hood" />
          </RevealItem>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => (
              <RevealItem key={category.title}>
                <article className="carbon-panel glass-card rounded-[28px] p-6 sm:p-7">
                  <div className="mb-6">
                    <p className="section-kicker">System Group</p>
                    <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.12em] text-white">
                      {category.title}
                    </h3>
                  </div>

                  <StaggerGroup className="flex flex-wrap gap-2.5" amount={0.45} stagger={0.06}>
                    {category.skills.map((skill, index) => (
                      <RevealItem key={skill} distance={20}>
                        <span
                          className="skill-pill inline-flex"
                          style={{ borderColor: `${palette[index % palette.length]}CC` }}
                        >
                          {skill}
                        </span>
                      </RevealItem>
                    ))}
                  </StaggerGroup>
                </article>
              </RevealItem>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}

