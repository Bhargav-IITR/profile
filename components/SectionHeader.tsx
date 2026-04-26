import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export function SectionHeader({
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      <p className="section-kicker">{subtitle}</p>
      <h2 className="font-display text-3xl uppercase tracking-[0.16em] text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

