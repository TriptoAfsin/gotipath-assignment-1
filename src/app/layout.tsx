import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Providers from "@/providers/provider";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gotipath",
  description: "Gotipath | CDN, Edge and Cloud Services",
  openGraph: {
    title: "Gotipath",
    images:
      "https://images.prismic.io/gotipath-website/8e294320-11bb-4ab5-b5a5-2db37626a8e4_og.jpg",
    description: "Gotipath | CDN, Edge and Cloud Services",
  },
  twitter: {
    title: "Gotipath",
    description: "Gotipath | CDN, Edge and Cloud Services",
    images:
      "https://images.prismic.io/gotipath-website/8e294320-11bb-4ab5-b5a5-2db37626a8e4_og.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning={true}
      >
        <Providers>
          <NextTopLoader color="#314ccd" showSpinner={false} />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
