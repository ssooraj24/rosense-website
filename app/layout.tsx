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
  title: "RoSense AI — Enterprise Conversation Intelligence Platform",
  description:
    "Turn every business conversation into structured action. RoSense captures meetings, strategy workshops, and offsites, extracts decisions, commitments, and risks, and builds a permanent, private memory for your enterprise.",
  keywords: [
    "Enterprise AI",
    "Conversation Intelligence",
    "Meeting Transcription",
    "Mamba SSM",
    "Private AI Appliance",
    "Decision Intelligence",
    "Air-Gapped AI",
    "DPDP Compliance",
  ],
  authors: [{ name: "RoSense AI" }],
  openGraph: {
    title: "RoSense AI — Enterprise Conversation Intelligence Platform",
    description:
      "Turn every business conversation into structured action. RoSense extracts decisions, commitments, and risks with 100% data sovereignty.",
    url: "https://rosense.local",
    siteName: "RoSense AI",
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
