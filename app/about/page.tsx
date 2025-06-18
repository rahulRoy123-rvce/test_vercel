import dynamic from "next/dynamic"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/site-footer"

const SiteHeader = dynamic(() => import("@/components/site-header"), { ssr: false })

export const metadata = {
  title: "About Us | Banyan Intelligence",
  description: "Learn about Banyan Intelligence's vision and impact.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <section className="min-h-screen pt-24 pb-32 relative text-gray-900 dark:text-white dotted-background">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-900/20 dark:to-purple-900/20" />
        <div className="container px-4 md:px-6 text-center space-y-8 max-w-5xl mx-auto relative">
          <div>
            <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700 px-6 py-2 text-sm md:text-base rounded-full font-medium inline-flex items-center gap-2 backdrop-blur-sm">
              ✨ Our Vision
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">Our Vision</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're creating a future where AI handles repetitive tasks while humans apply their creativity and expertise to meaningful challenges. Banyan Intelligence builds specialized agents that free your team from mundane work and multiply their impact.
          </p>

          {/* Stats */}
          <div className="grid gap-12 sm:gap-16 md:grid-cols-3 mt-12">
            {[
              { value: "975", label: "RCs Identified" },
              { value: "6410", label: "Logs Analyzed" },
              { value: "339", label: "Debugging Hours Saved" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3">
                <span className="text-5xl sm:text-6xl font-extrabold text-cyan-600 dark:text-cyan-400">{stat.value}</span>
                <span className="text-lg font-medium text-gray-600 dark:text-gray-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
      </section>
      <SiteFooter />
    </>
  )
} 