import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunil Kumar | Flutter Developer & Mobile App Architect",
  description:
    "Senior Flutter Developer with 7+ years of experience building scalable, high-performance cross-platform applications. Expert in Flutter architecture, state management, Microsoft Intune integration, and native platform development.",
  keywords: [
    "Flutter Developer",
    "Mobile App Architect",
    "Cross-platform",
    "Dart",
    "iOS",
    "Android",
    "Microsoft Intune",
    "Senior Software Engineer",
  ],
  authors: [{ name: "Sunil Kumar" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sunil Kumar | Flutter Developer & Mobile App Architect",
    description:
      "7+ years shipping production Flutter apps for enterprises — from IoT to AI-powered platforms.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
