import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0F1C", // Deep dark automotive blue-black
          color: "#FFFFFF",
          fontSize: 42,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          borderRadius: "16px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "inset 0 0 40px rgba(0, 180, 255, 0.15)", // Subtle inner glow
        }}
      >
        {/* Background speed lines / motion effect */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-20%",
            width: "140%",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #00B4FF, transparent)",
            opacity: 0.25,
            transform: "rotate(-12deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "-20%",
            width: "140%",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #00E5FF, transparent)",
            opacity: 0.15,
            transform: "rotate(8deg)",
          }}
        />

        {/* Stylized "B" with car-inspired cutouts */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          B
        </div>

        {/* Subtle car grille / wing accent below the B */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            width: "28px",
            height: "4px",
            background: "#00B4FF",
            borderRadius: "2px",
            boxShadow: "0 0 8px #00B4FF",
          }}
        />

        {/* Tiny headlight dots for that premium car feel */}
        <div
          style={{
            position: "absolute",
            top: "18px",
            right: "14px",
            width: "5px",
            height: "5px",
            background: "#FFFFFF",
            borderRadius: "50%",
            boxShadow: "0 0 6px #A5F3FC",
            opacity: 0.9,
          }}
        />
      </div>
    ),
    size,
  );
}