"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

function Tachometer() {
  const [isRevved, setIsRevved] = useState(false);

  return (
    <button
      type="button"
      aria-label="Rev tachometer"
      className="hidden rounded-full border border-white/10 bg-white/[0.03] p-2 text-white/80 transition-colors hover:text-white md:flex"
      onMouseEnter={() => setIsRevved(true)}
      onMouseLeave={() => setIsRevved(false)}
    >
      <svg width="74" height="42" viewBox="0 0 74 42" fill="none" aria-hidden="true">
        <path
          d="M10 32C15 19 24 10 37 10C50 10 59 19 64 32"
          stroke="rgba(255,255,255,0.24)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 32C15 19 24 10 37 10C50 10 59 19 64 32"
          stroke="url(#tach-gradient)"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
        <circle cx="37" cy="32" r="3" fill="#FFFFFF" />
        <motion.g
          animate={{ rotate: isRevved ? 150 : 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 16 }}
          style={{ transformOrigin: "37px 32px" }}
        >
          <line
            x1="37"
            y1="32"
            x2="18"
            y2="18"
            stroke="#E8002D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </motion.g>
        <defs>
          <linearGradient id="tach-gradient" x1="10" y1="32" x2="64" y2="32">
            <stop stopColor="#0066CC" />
            <stop offset="0.55" stopColor="#E8002D" />
            <stop offset="1" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.6],
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="#home" className="relative inline-flex items-center">
            <svg
              className="absolute -left-3 -top-3 h-12 w-16 text-bmw-blue/60"
              viewBox="0 0 100 60"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 44C24 18 44 6 72 10C82 12 89 16 94 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="relative font-display text-2xl tracking-[0.18em] text-white">
              [B]
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                data-active={activeSection === item.id}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Tachometer />
            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-white/20 md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/5 bg-black/80 md:hidden"
          >
            <div className="section-shell py-5">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={handleNavClick}
                    className={cn("nav-link w-fit", activeSection === item.id && "text-bmw-blue")}
                    data-active={activeSection === item.id}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

