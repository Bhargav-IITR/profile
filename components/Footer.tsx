export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="h-px w-full bg-racing-stripe opacity-80" />
      <div className="section-shell flex flex-col gap-4 py-6 text-center text-sm text-white/55 md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-display uppercase tracking-[0.18em] text-white/82">
          BHARGAV PRATIM NATH
        </p>
        <p>Built with Next.js + Framer Motion</p>
        <p>© 2025</p>
      </div>
    </footer>
  );
}
