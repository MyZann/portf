import type { Metadata } from "next";
import { Space_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Script from "next/script";
import SiteFrame from "@/components/site-frame";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { UMAMI_SRC } from "@/lib/umami";

const spaceGroteskSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.author}`,
  },
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  creator: config.author,
  metadataBase: new URL(config.site),
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    siteName: config.title,
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: config.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        spaceGroteskSans.variable,
        unbounded.variable,
        "font-sans",
      ].join(" ")}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>

        {process.env.UMAMI_SITE_ID && (
          <Script
            defer
            src={UMAMI_SRC}
            data-website-id={process.env.UMAMI_SITE_ID}
          />
        )}

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}