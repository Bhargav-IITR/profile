import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "rgba(255,255,255,0.03)",
        "bmw-blue": "#0066CC",
        "f1-red": "#E8002D",
        "chevy-gold": "#D4AF37",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-orbitron)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glass: "0 20px 60px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "racing-stripe":
          "linear-gradient(90deg, #0066CC 0%, #E8002D 50%, #D4AF37 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        cursorBlink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        chevronBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.35" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        trackPulse: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.02)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "cursor-blink": "cursorBlink 1s step-end infinite",
        "chevron-bounce": "chevronBounce 1.8s ease-in-out infinite",
        "track-pulse": "trackPulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

