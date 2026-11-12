import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BOUCEDRA MOHAMED | Chargé d'affaires et partenariat";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b1f3a",
          backgroundImage: "radial-gradient(circle at 50% 30%, #1e3a5f 0%, #0b1f3a 70%, #061326 100%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "white",
          border: "12px solid #b58e45",
          boxSizing: "border-box",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 24px",
            backgroundColor: "rgba(181, 142, 69, 0.15)",
            border: "1px solid #c8a96d",
            borderRadius: "9999px",
            color: "#f4eedf",
            fontSize: "20px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Auto-entrepreneur — Algérie
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "900",
            letterSpacing: "4px",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          BOUCEDRA MOHAMED
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            letterSpacing: "3px",
            color: "#c8a96d",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "36px",
          }}
        >
          Chargé d&apos;affaires et partenariat
        </div>

        {/* Bottom Details */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(200, 169, 109, 0.3)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#d9e2ec",
          }}
        >
          <span>📍 Aïn Sefra — Naâma — Algérie</span>
          <span>📞 +213 777 28 72 19</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
