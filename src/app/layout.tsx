import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Deploy on Fridays | Fearless Production Releases",
    template: "%s | Deploy on Fridays",
  },
  description: "A developer culture movement about building systems so reliable that you can deploy with confidence anytime. Even on Fridays.",
  keywords: ["CI/CD", "DevOps", "Continuous Deployment", "Engineering Culture", "Software Deployment", "Vercel", "Next.js"],
  authors: [{ name: "Deploy on Fridays Community" }],
  creator: "Deploy on Fridays",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deployonfridays.com",
    siteName: "Deploy on Fridays",
    title: "Deploy on Fridays",
    description: "If your tests pass, ship it. Join the movement for fearless production releases.",
    images: [
      {
        url: "/og-image.png", // Assuming this will be added later
        width: 1200,
        height: 630,
        alt: "Deploy on Fridays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deploy on Fridays",
    description: "Fearless production releases. If your tests pass, ship it.",
    creator: "@deployonfridays",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${jetbrainsMono.variable} font-mono bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark antialiased`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
