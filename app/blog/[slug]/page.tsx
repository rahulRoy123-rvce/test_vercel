import { blogPosts } from "@/components/blog-data"
import { blogContents } from "@/components/blog-contents"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import type { Metadata } from "next"
const SiteHeader = dynamic(() => import("@/components/site-header"), { ssr: false })
import SiteFooter from "@/components/site-footer"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) {
    return {
      title: "Blog | Banyan Intelligence",
    }
  }

  return {
    title: `${post.title} | Banyan Intelligence Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Banyan Intelligence Blog`,
      description: post.excerpt,
      url: `https://banyanintelligence.com/blog/${post.slug}`,
      siteName: "Banyan Intelligence Blog",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Banyan Intelligence Blog`,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <>
    <SiteHeader />
    <div className="min-h-screen bg-white dark:bg-black dotted-background pt-24 pb-20 text-gray-900 dark:text-white">
      <div className="container px-4 md:px-10 max-w-6xl mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700">
            {post.updated ? `Updated: ${post.updated}` : post.date}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">{post.title}</h1>
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <article className="prose prose-xl lg:prose-2xl 2xl:prose-2xl dark:prose-invert text-justify max-w-none space-y-10">
          {blogContents[post.slug]}
        </article>

        <div className="pt-10 text-center">
          <Link href="/blog" className="text-cyan-600 hover:text-cyan-800 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
    <SiteFooter />
    </>
  )
} 