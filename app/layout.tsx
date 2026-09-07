import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoSense — Organizational Memory. Privately.",
  description:
    "Your company remembers everything. Every decision captured. Every commitment tracked. Every conversation searchable. Entirely on your terms.",
  keywords: [
    "Enterprise AI",
    "Conversation Intelligence",
    "Meeting Transcription",
    "Private AI Appliance",
    "Decision Intelligence",
    "Air-Gapped AI",
    "DPDP Compliance",
  ],
  authors: [{ name: "RoSense" }],
  openGraph: {
    title: "RoSense — Organizational Memory. Privately.",
    description:
      "Your company remembers everything. Every decision captured. Every commitment tracked. Entirely on your terms.",
    url: "https://rosense.local",
    siteName: "RoSense",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-600 antialiased selection:bg-[#10B981] selection:text-white">
        {children}
      </body>
    </html>
  );
}
