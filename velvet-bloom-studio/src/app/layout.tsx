import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "../lib/site-config";

const inter = localFont({ src: "./fonts/inter-latin.woff2", weight: "100 900", display: "swap", variable: "--font-inter" });
const cormorant = localFont({ src: "./fonts/cormorant-garamond-latin.woff2", weight: "300 700", display: "swap", variable: "--font-cormorant" });

export const metadata: Metadata = {
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  title: "Velvet Bloom Studio | Beauty & Wellness Portfolio Concept",
  description: "A fictional beauty studio website concept featuring curated sample treatments, an interactive booking demo and a dark luxury design.",
  applicationName: "Velvet Bloom Studio",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Velvet Bloom Studio — The Art of Self-Care",
    description: "Where beauty becomes a ritual. A dark luxury beauty studio portfolio concept.",
    type: "website",
    locale: "en_GB",
    siteName: "Velvet Bloom Studio",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: "summary_large_image", title: "Velvet Bloom Studio", description: "Where beauty becomes a ritual. A dark luxury beauty studio portfolio concept." },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#100f0e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Writing extensions can add data attributes to body before React hydrates.
  // Limit this exception to the body element; children retain hydration checks.
  return <html lang="en" className={`${inter.variable} ${cormorant.variable}`}><body suppressHydrationWarning>{children}</body></html>;
}
