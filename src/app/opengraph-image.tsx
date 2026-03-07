import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Artecho AI — Brushstroke-Aware Restoration Previews";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0d0d0d",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Orange radial glow top-right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "700px",
          height: "600px",
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(249,115,22,0.2) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background: "#f97316",
        }}
      />

      {/* Brand name */}
      <div
        style={{
          fontSize: 96,
          fontWeight: 700,
          color: "#f0f0f0",
          letterSpacing: "-3px",
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        Artecho AI
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 26,
          color: "#666666",
          letterSpacing: "-0.5px",
          marginBottom: 36,
        }}
      >
        Brushstroke-aware restoration previews for museums &amp; heritage teams
      </div>

      {/* Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#1a0a00",
          borderRadius: "20px",
          padding: "8px 22px",
          width: "fit-content",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#f97316",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Early Access
        </span>
      </div>

      {/* Right decorative bars */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 140,
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "8px",
            background: "#f97316",
            borderRadius: "4px",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            width: "112px",
            height: "8px",
            background: "#f97316",
            borderRadius: "4px",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            width: "60px",
            height: "8px",
            background: "#f97316",
            borderRadius: "4px",
            opacity: 0.18,
          }}
        />
      </div>

      {/* Domain */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 80,
          fontSize: 15,
          color: "#3a3a3a",
          letterSpacing: "0.5px",
        }}
      >
        artecho-ai.vercel.app
      </div>
    </div>,
    { ...size },
  );
}
