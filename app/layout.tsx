import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "Dipak | Full Stack Developer & Competitive Programmer",
    template: "%s | Dipak Portfolio",
  },
  metadataBase: new URL("https://dipak-portfolio.vercel.app"),
  description: "Portfolio of Dipak, a Full Stack Developer and Competitive Programmer specializing in Next.js, React, Node.js, and AI integrations.",
  keywords: ["Dipak", "Full Stack Developer", "Competitive Programmer", "Next.js", "React", "Portfolio", "Web Developer", "Software Engineer"],
  authors: [{ name: "Dipak" }],
  creator: "Dipak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dipak-portfolio.vercel.app",
    title: "Dipak | Full Stack Developer",
    description: "Explore my projects, skills, and coding journey.",
    siteName: "Dipak Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dipak Portfolio Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipak | Full Stack Developer",
    description: "Explore my projects, skills, and coding journey.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0a0e27",
  width: "device-width",
  initialScale: 1,
};

import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased selection:bg-accent/30 selection:text-white`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
