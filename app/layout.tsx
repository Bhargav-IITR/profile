import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import { AuroraBackground } from "@/components/AuroraBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhargav Pratim Nath | Portfolio",
  description:
    "Bhargav Pratim Nath \u2014 Software Engineer, IIT Roorkee. Backend, Distributed Systems, LLMs.",
  applicationName: "Bhargav Portfolio",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, orbitron.variable, "dark")}
    >
      <body className="relative isolate overflow-x-hidden bg-background font-sans text-white antialiased">
        <ThemeProvider>
          <AuroraBackground />
          <div className="relative z-10">{children}</div>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
