import { ImageResponse } from "next/og";
import { getLocaleContentOrThrow } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(215,181,122,0.35), transparent 32%), linear-gradient(135deg, #1b1510 0%, #312219 45%, #553824 100%)",
          color: "#fcf7ef",
          padding: "56px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          <span>Casa Quilla</span>
          <span>{content.meta.localeName}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 86, lineHeight: 0.9 }}>{content.brand.name}</div>
          <div style={{ fontSize: 48, lineHeight: 1.08, maxWidth: "78%" }}>
            {content.home.hero.title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            opacity: 0.78,
          }}
        >
          <span>{content.brand.label}</span>
          <span>{content.brand.location}</span>
        </div>
      </div>
    ),
    size,
  );
}
