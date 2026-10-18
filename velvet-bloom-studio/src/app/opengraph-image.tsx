import { ImageResponse } from "next/og";

export const alt = "Velvet Bloom Studio — Beauty, in its most intentional form.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#100f0e", color: "#f1e7dd", padding: 48 }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", border: "1px solid #66523b", padding: 54 }}>
        <div style={{ display: "flex", fontSize: 18, color: "#c5a577", letterSpacing: 6, marginBottom: 38 }}>THE ART OF SELF-CARE</div>
        <div style={{ display: "flex", fontSize: 84, letterSpacing: -4 }}>Velvet Bloom Studio</div>
        <div style={{ display: "flex", fontSize: 29, color: "#dfc59c", marginTop: 25 }}>Beauty, in its most intentional form.</div>
        <div style={{ display: "flex", fontSize: 14, color: "#b1a59a", letterSpacing: 3, marginTop: 58 }}>BEAUTY & WELLNESS · PORTFOLIO CONCEPT</div>
      </div>
    </div>,
    size,
  );
}
