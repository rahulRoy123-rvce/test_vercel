import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

// Google Analytics Measurement ID for Banyan landing page
const GA_MEASUREMENT_ID = "G-C7XB4FFVTS"

export const metadata: Metadata = {
  title: "Banyan Intelligence - AI Assistants for everyone at work",
  description:
    "Transform your team's workflow with specialized AI agents that eliminate repetitive tasks and amplify human capabilities.",
  keywords: "AI, GenAI, AI Agents, Workflow automation, Business intelligence",
  authors: [{ name: "Banyan Intelligence" }],
  creator: "Banyan Intelligence",
  publisher: "Banyan Intelligence",
  robots: "index, follow",
  generator: "Banyan Intelligence",
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
  openGraph: {
    title: "Banyan Intelligence - AI Assistants for everyone at work",
    description:
      "Transform your team's workflow with specialized AI agents that eliminate repetitive tasks and amplify human capabilities.",
    url: "https://banyanintelligence.com",
    siteName: "Banyan Intelligence",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://banyanintelligence.com/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Banyan Intelligence - AI Assistants for everyone at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BanyanIntel", // update if an official handle exists
    creator: "@BanyanIntel",
    title: "Banyan Intelligence - AI Assistants for everyone at work",
    images: ["https://banyanintelligence.com/placeholder-logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://banyanintelligence.com" />

        {/* Enhanced mobile/SEO meta */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Banyan Intelligence" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
