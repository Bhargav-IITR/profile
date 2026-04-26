import type { CSSProperties } from "react";
import {
  IconBrandGithub,
  IconExternalLink,
  IconRocketOff,
} from "@tabler/icons-react";
import { projects } from "@/lib/data";
import { RevealItem, StaggerGroup } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <StaggerGroup className="space-y-14" amount={0.15}>
          <RevealItem>
            <SectionHeader title="THE GARAGE" subtitle="Projects I've Built" />
          </RevealItem>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <RevealItem key={project.name}>
                <article
                  className="carbon-panel glass-card group h-full rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:[box-shadow:0_22px_48px_-28px_var(--accent)]"
                  style={{ "--accent": project.accent } as CSSProperties}
                >
                  <div
                    className="mb-6 h-[3px] w-full rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />

                  <div className="flex h-full flex-col">
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl uppercase tracking-[0.12em] text-white">
                        {project.name}
                      </h3>
                      <p className="text-sm leading-7 text-white/72 sm:text-[0.96rem]">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="skill-pill"
                          style={{ borderColor: `${project.accent}B3` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                          aria-label={`${project.name} GitHub repository`}
                        >
                          <IconBrandGithub size={18} />
                        </a>
                      ) : (
                        <span
                          className={cn("project-link project-link-disabled")}
                          aria-label={`${project.name} GitHub unavailable`}
                        >
                          <IconBrandGithub size={18} />
                        </span>
                      )}

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                          aria-label={`${project.name} live demo`}
                        >
                          <IconExternalLink size={18} />
                        </a>
                      ) : (
                        <span
                          className={cn("project-link project-link-disabled")}
                          aria-label={`${project.name} live demo unavailable`}
                        >
                          <IconRocketOff size={18} />
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
