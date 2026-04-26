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
          background: "#003B80",
          color: "#FFFFFF",
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: "0.06em",
          borderRadius: 16,
        }}
      >
        B
      </div>
    ),
    size,
  );
}

