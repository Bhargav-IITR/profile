import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
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
                    id={card.label === "GitHub" ? "contact-github" : undefined}
                    href={card.href}
                    target={card.label === "Email" ? undefined : "_blank"}
                    rel={card.label === "Email" ? undefined : "noreferrer"}
                    className="scroll-mt-28 glass-card flex h-full flex-col items-center gap-4 rounded-[28px] px-6 py-8 text-center transition-all duration-300 hover:border-bmw-blue/60 hover:[box-shadow:0_18px_42px_-30px_rgba(0,102,204,0.75)]"
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
        </StaggerGroup>
      </div>
    </section>
  );
}
