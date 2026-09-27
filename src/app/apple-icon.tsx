import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Icono para iOS: mismo monograma "SP" que `app/icon.svg`, generado como PNG porque Apple no
// acepta SVG para `apple-touch-icon`. Colores fijos del sistema (docs/BLUEPRINT.md §4.2).
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0e2033",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "#eff1f4",
          fontFamily: 'system-ui, "Segoe UI", -apple-system, sans-serif',
        }}
      >
        SP
      </div>
    </div>,
    { ...size },
  );
}
