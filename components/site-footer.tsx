import Image from "next/image"
import Link from "next/link"
import SubscribeForm from "./subscribe-form"

export default function SiteFooter() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-16 text-gray-900 dark:text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center">
                {/* Light logo */}
                <Image
                  src="/BI_logo-1cm[36].png"
                  alt="Banyan Intelligence Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain block dark:hidden"
                />
                {/* Dark logo */}
                <Image
                  src="/Logo white.png"
                  alt="Banyan Intelligence Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain hidden dark:block"
                />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Banyan Intelligence</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-white">
              <Link href="mailto:hi@banyanintelligence.com" className="hover:text-gray-900 transition-colors">
                hi@banyanintelligence.com
              </Link>
            </div>
            <div className="text-md text-white">Deep Reasoning Agents
            for your team</div>
          </div>

          {/* Agents */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Agents</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="https://ell3.ai/" className="hover:text-gray-900 transition-colors">
                  ELL3 – Business Agent
                </Link>
              </li>
              <li>
                <Link href="https://ell3.ai/" className="hover:text-gray-900 transition-colors">
                  ELL3 – Ops Agent
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  BICO Agent
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subscribe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We're expanding our suite of AI agents to address more workplace challenges. Sign up for our newsletter to be the first to know about new solutions.
            </p>
            <SubscribeForm />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} banyanintelligence.com</p>
              <p className="text-sm text-gray-500 hidden md:block">AI Assistants for everyone at work</p>
            </div>
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com/company/banyan-intelligence/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                LinkedIn
              </Link>
              <Link href="https://x.com/BanyanIntel" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                X
              </Link>
              <Link href="https://www.instagram.com/banyanintelligence/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                Instagram
              </Link>
              <Link href="https://www.youtube.com/@BanyanIntelligence" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                Youtube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 