import { blogPosts } from "@/components/blog-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BookOpen, BarChart3 } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import Image from "next/image"
import type { Metadata } from "next"
const SiteHeader = dynamic(() => import("@/components/site-header"), { ssr: false })
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: "Blog | Banyan Intelligence",
  description: "Read insights on AI agents, workflow automation, and more from Banyan Intelligence.",
}

export default function BlogListing() {
  return (
    <>
    
    <div className="min-h-screen bg-gray-50 dark:bg-black dotted-background pt-24 pb-24 text-gray-900 dark:text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700">
            Insights
          </Badge>
          <h1 className="text-4xl font-bold">Banyan Intelligence Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Deep dives and practical guides on AI agents, observability, and data automation.
          </p>
        </div>

        <div className="grid auto-rows-[1fr] gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <Card className="bg-white/80 dark:bg-gray-900/60 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                {post.cover ? (
                  <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden border-b border-gray-200 dark:border-gray-600">
                    <Image src={post.cover} alt={`${post.title} cover image`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-t-lg border-b border-gray-200 dark:border-gray-600 flex items-center justify-center bg-purple-100 dark:bg-purple-900/20">
                    <BarChart3 className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 group-hover:underline">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6 pt-0 pb-3">
                  <CardDescription className="text-gray-600 dark:text-gray-300 flex-grow">
                    {post.excerpt}
                  </CardDescription>
                  <span className="inline-flex items-center text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 font-medium transition-colors">
                    Read More
                    <BookOpen className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <SiteFooter />
    </>
  )
} 