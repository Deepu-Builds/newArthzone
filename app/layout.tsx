import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
// import { CustomCursor } from '@/components/CustomCursor'
import SplashCursor from "@/components/SplashCursor";
import { Preloader } from "@/components/Preloader";
import { cn } from "@/lib/utils";

// removed non-Google font import 'Geist'

const satoshi = Inter({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
});

const clash = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arthzone Technologies | Premium Digital Solutions",
  description:
    "Award-winning digital agency specializing in web development, mobile apps, and cutting-edge technology solutions.",
  keywords: [
    "web development",
    "mobile apps",
    "UI/UX design",
    "digital agency",
    "technology solutions",
  ],
  authors: [{ name: "Arthzone Technologies" }],
  icons: {
    icon: "/img/icon.png",
    shortcut: "/img/icon.png",
    apple: "/img/icon.png",
  },
  openGraph: {
    title: "Arthzone Technologies",
    description: "Premium Digital Solutions",
    type: "website",
    locale: "en_US",
    siteName: "Arthzone Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthzone Technologies",
    description: "Premium Digital Solutions",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", satoshi.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${satoshi.variable} ${clash.variable} font-sans`}>
        <Preloader />
        {/* <CustomCursor /> */}
        <SplashCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
