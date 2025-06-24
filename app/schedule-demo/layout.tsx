import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Book a Consultation | Banyan Intelligence",
  description:
    "Schedule a consultation to discover how Banyan Intelligence's AI agents can transform your workflows and reduce toil.",
  openGraph: {
    title: "Book a Consultation | Banyan Intelligence",
    description:
      "Schedule a consultation to discover how Banyan Intelligence's AI agents can transform your workflows and reduce toil.",
    url: "https://banyanintelligence.com/schedule-demo",
    siteName: "Banyan Intelligence",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://banyanintelligence.com/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Banyan Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation | Banyan Intelligence",
    images: [
      "https://banyanintelligence.com/placeholder-logo.png",
    ],
  },
}

export default function ScheduleDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 