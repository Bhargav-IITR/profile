import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { contactCards } from "@/lib/data";
import { RevealItem, StaggerGroup } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const contactIcons = {
  Email: IconMail,
  GitHub: IconBrandGithub,
  LinkedIn: IconBrandLinkedin,
} as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <StaggerGroup className="space-y-14 text-center" amount={0.15}>
          <RevealItem>
            <SectionHeader title="PIT LANE" subtitle="Let's Connect" align="center" />
          </RevealItem>

          <RevealItem>
            <p className="mx-auto max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Open to SDE1/SDE2 roles at product companies. Let&apos;s talk.
            </p>
          </RevealItem>

          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = contactIcons[card.label];

              return (
                <RevealItem key={card.label}>
                  <a
                    href={card.href}
                    target={card.label === "Email" ? undefined : "_blank"}
                    rel={card.label === "Email" ? undefined : "noreferrer"}
                    className="glass-card flex h-full flex-col items-center gap-4 rounded-[28px] px-6 py-8 text-center transition-all duration-300 hover:border-bmw-blue/60 hover:[box-shadow:0_18px_42px_-30px_rgba(0,102,204,0.75)]"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 text-bmw-blue">
                      <Icon size={24} />
                    </span>
                    <div className="space-y-2">
                      <p className="font-display text-xl uppercase tracking-[0.12em] text-white">
                        {card.label}
                      </p>
                      <p className="text-sm text-white/65">{card.value}</p>
                    </div>
                  </a>
                </RevealItem>
              );
            })}
          </div>

          <RevealItem>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/Bhargav-IITR"
                target="_blank"
                rel="noreferrer"
                className="action-button border border-white/10 bg-white/[0.03] px-4 py-2 text-white/75 hover:border-bmw-blue/50 hover:text-white"
                aria-label="Open GitHub"
              >
                <IconBrandGithub size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bhargav-pratim-nath"
                target="_blank"
                rel="noreferrer"
                className="action-button border border-white/10 bg-white/[0.03] px-4 py-2 text-white/75 hover:border-bmw-blue/50 hover:text-white"
                aria-label="Open LinkedIn"
              >
                <IconBrandLinkedin size={18} />
                LinkedIn
              </a>
              <a
                href="mailto:bhargav.nath.work@gmail.com"
                className="action-button border border-white/10 bg-white/[0.03] px-4 py-2 text-white/75 hover:border-bmw-blue/50 hover:text-white"
                aria-label="Send email"
              >
                <IconMail size={18} />
                Email
              </a>
            </div>
          </RevealItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
