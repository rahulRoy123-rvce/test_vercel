import { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Privacy Policy | Banyan Intelligence",
  description: "Read how Banyan Intelligence collects, uses, and protects your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-20 dotted-background">
      <div className="container px-4 md:px-8 max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700">
            Last updated: May&nbsp;1,&nbsp;2025
          </Badge>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Your privacy is important to us. This policy explains what data we collect, how we use it, and the choices you have.
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-10 md:p-14 w-full shadow-lg">
          <div className="prose dark:prose-invert max-w-none text-justify">
            <p>Banyan Intelligence ("we", "our", or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website (the "Site").</p>

            <h2 className="font-semibold">1. Information We Collect</h2>
            <p>We collect limited personal information to help us improve your experience and communicate with you:</p>
            <h3 className="font-semibold">Information you provide:</h3>
            <p>When you fill out a form (e.g., to request a demo or join a waitlist), we may collect your name, email address, company name, and other relevant details.</p>
            <h3 className="font-semibold">Information collected automatically:</h3>
            <p>We may use cookies and similar technologies to collect information about your device, browser, IP address, and usage patterns.</p>

            <h2 className="font-semibold">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Communicate with you (e.g., respond to inquiries, send updates or offers)</li>
              <li>Improve and personalize our website and services</li>
              <li>Analyze how users interact with our site to improve performance</li>
            </ul>

            <h2 className="font-semibold">3. Cookies</h2>
            <p>
              We use cookies to understand how visitors use our site and to improve your experience. You can adjust your browser settings to
              refuse cookies, though some features may not work as intended.
            </p>

            <h2 className="font-semibold">4. Third-Party Services</h2>
            <p>
              We may use trusted third-party services (such as analytics tools or email marketing platforms) to help us operate our website and
              communicate with you. These services only have access to your information as needed to perform their functions and are
              contractually obligated to keep your data secure.
            </p>

            <h2 className="font-semibold">5. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, or loss. However, no
              method of transmission over the internet is 100% secure.
            </p>

            <h2 className="font-semibold">6. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
            <ul>
              <li>Accessing or correcting your information</li>
              <li>Requesting deletion of your data</li>
              <li>Opting out of marketing communications</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <Link href="mailto:hello@banyanintelligence.com" className="underline">hello@banyanintelligence.com</Link>.
            </p>

            <h2 className="font-semibold">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we'll notify you by updating the "Last updated"
              date and, where appropriate, through other means.
            </p>

            <h2 className="font-semibold">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please reach out to us at:</p>
            <ul>
              <li>Email: <Link href="mailto:hello@banyanintelligence.com" className="underline">hello@banyanintelligence.com</Link></li>
              <li>Website: <Link href="https://banyanintelligence.com" className="underline" target="_blank">https://banyanintelligence.com</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-10">
          <Link href="/" className="text-cyan-600 hover:text-cyan-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 