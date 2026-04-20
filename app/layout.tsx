import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { AnalyticsSnippets } from "@/components/analytics-snippets";
import { getBaseUrl } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  applicationName: "Casa Quilla",
  title: "Casa Quilla",
  description:
    "A bilingual direct-booking site concept for a warm Peruvian hostel with restorative massage rituals.",
  openGraph: {
    type: "website",
    siteName: "Casa Quilla",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <AnalyticsSnippets />
        {children}
      </body>
    </html>
  );
}
