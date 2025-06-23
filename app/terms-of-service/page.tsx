import { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Terms of Service | Banyan Intelligence",
  description: "Review the terms governing use of Banyan Intelligence services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-20 dotted-background">
      <div className="container px-4 md:px-8 max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700">
            Last updated: June&nbsp;19,&nbsp;2025
          </Badge>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Please read these terms carefully before using Banyan Intelligence's services. By accessing or using our services, you agree to be bound by these Terms of Service.
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-10 md:p-14 w-full shadow-lg">
          <div className="prose dark:prose-invert max-w-none text-justify">
            <h2 className="font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Banyan Intelligence's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-semibold">2. Description of Service</h2>
            <p>
              Banyan Intelligence provides AI-powered analytics and operations support for businesses. Our service includes automated analysis, reporting, and operational support.
            </p>

            <h2 className="font-semibold">3. User Responsibilities</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
            </p>

            <h2 className="font-semibold">4. Data Privacy</h2>
            <p>
              We are committed to protecting your privacy. Our data collection and usage practices are outlined in our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
            </p>

            <h2 className="font-semibold">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our service are owned by Banyan Intelligence and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="font-semibold">6. Limitation of Liability</h2>
            <p>
              Banyan Intelligence shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>

            <h2 className="font-semibold">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>

            <h2 className="font-semibold">8. Contact Information</h2>
            <p>
              For any questions about these Terms of Service, please contact us at <Link href="mailto:hi@banyanintelligence.com" className="underline">hi@banyanintelligence.com</Link>.
            </p>
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