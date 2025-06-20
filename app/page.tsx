"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Network,
  Calendar,
  Mail,
  Linkedin,
  Twitter,
  Github,
  BookOpen,
  Clock,
  Youtube,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AgentCarousel from "@/components/agent-carousel"
import { ThemeToggle } from "@/components/theme-toggle"
import AgentCarouselSide from "@/components/agent-carousel-side"
import ELL3ArchitectureSketch from "@/public/ELL3ArchitectureSketch.png"

export default function BanyanIntelligenceLanding() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white dotted-background">
      {/* Navbar comes from layout */}

      {/* Hero Section */}
      <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-900/20 dark:to-purple-900/20" />
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <Badge
                variant="secondary"
                className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700 text-xs sm:text-sm"
              >
                🤖 AI-Powered Workflow Transformation
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="text-gray-900 dark:text-white">AI Assistants for </span>
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                everyone
                </span>
                <br />
                <span className="text-gray-600 dark:text-gray-400"> at work </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Transform your team's workflow with specialized AI agents that eliminate repetitive tasks and amplify
                human capabilities, letting your experts focus on high-impact work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/schedule-demo">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>

              {/* Mobile Link */}
              <Link
                href="#agent-demos"
                className="inline-flex items-center text-cyan-600 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-colors sm:hidden"
              >
                Explore Solutions
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>

              {/* Desktop/Tablet Button */}
              <Link href="#agent-demos">
              <Button
                variant="outline"
                size="lg"
                className="hidden sm:inline-flex border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                Explore Our Solutions
              </Button>
              </Link>
            </div>

            <div className="hidden sm:flex flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500 dark:text-gray-400 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                <span>Specialized AI Agents</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                <span>Seamless Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                <span>Human-Centered AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section 
      <section
        id="vision"
        className="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50 dotted-background-dense relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 dark:from-purple-900/10 dark:to-cyan-900/10" />
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700"
              >
                Our Vision
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                A Future Where AI Handles the Mundane
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We're creating a future where AI handles repetitive tasks while humans apply their creativity and
                expertise to meaningful challenges. Banyan Intelligence builds specialized agents that free your team
                from mundane work and multiply their impact.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Our Agents Section 
      <section id="agents" className="py-20 md:py-32 dotted-background-cyan relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 dark:from-cyan-900/5 dark:to-purple-900/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700"
            >
              Our Solutions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
            Our Agents in action            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized agents designed to eliminate toil and amplify human capabilities across different domains.
            </p>
          </div>

          <AgentCarousel />
        </div>
      </section>*/}

      {/* Agent Detailed Demos Section */}
      <section id="agent-demos" className="py-6 md:py-10 dotted-background-cyan relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 dark:from-cyan-900/5 dark:to-purple-900/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700"
            >
              Our Solutions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
            Our Agents in Action   
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specialized agents designed to eliminate toil and amplify human capabilities across different domains.
            </p>
          </div>

          {/* Side-by-side carousel */}
          <AgentCarouselSide />
        </div>
      </section>

      {/* ROP Analytical Bot Section */}
      <section id="rop" className="py-6 md:py-10 dotted-background-cyan relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/10 dark:from-blue-900/5 dark:to-blue-900/10" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center px-4 md:px-4 space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700"
            >
              ROP ( RAN Observability Platform )
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Real-Time Network Intelligence at Scale
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Unlock deep insights into your radio network with enterprise-grade observability. Our platform seamlessly integrates OpenTelemetry-standard data sources, processes high-volume telemetry through real-time Spark pipelines, and delivers actionable intelligence through intuitive dashboards.
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 mx-auto max-w-5xl backdrop-blur-sm px-8 md:px-6 py-8 md:py-6">
            <CardHeader className="pb-4 sm:pb-6 p-4 sm:p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/30">
                <BarChart3 className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-gray-900 dark:text-white">ROP ( RAN Observability Platform )</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                Unlock deep insights into your radio network with enterprise-grade observability.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pb-8 sm:pb-10">
              <div className="grid gap-6 md:grid-cols-2 items-start">
                {/* Bullet List */}
                <div className="space-y-4 md:order-2 order-2">
                  {[
                    {
                      title: 'OpenTelemetry Integration',
                      description: 'Standards-based data ingestion from any network element',
                    },
                    {
                      title: 'Real-Time Processing',
                      description: 'Apache Spark/Kafka pipelines for sub-second-latency analytics',
                    },
                    {
                      title: 'Time Series Database',
                      description: 'High-performance storage for instant queries and historical analysis',
                    },
                    {
                      title: 'OLAP Analytics Engine',
                      description: 'Apache Pinot and other query engines on Apache Iceberg enable sub-second complex queries',
                    },
                    {
                      title: 'Plug-and-Play Dashboards',
                      description: 'Customizable KPI views with zero configuration required',
                    },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">{feature.title}</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Demo Image */}
                <div className="w-full md:order-1 order-1 h-full flex items-stretch">
                  <div className="rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/40 p-4 flex items-center justify-center w-full">
                    <Image
                      src="/rop.jpg"
                      alt="ROP Platform dashboard"
                      className="object-contain w-full h-full"
                      width={800}
                      height={600}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Banyan Section */}
      <section id="why-choose-us" className="py-12 md:py-20 bg-gray-50/50 dark:bg-gray-900/50 dotted-background-purple relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-500/5 to-green-500/5 dark:from-purple-900/10 dark:to-green-900/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700"
            >
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Why Choose Banyan's Agents?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="bg-white/80 dark:bg-black/50 border-gray-200 dark:border-gray-700 text-center backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/30">
                  <Users className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white min-h-[3.5rem] flex items-center justify-center">Human-Centered AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Our agents enhance human work rather than replace it, eliminating mundane tasks while preserving the
                  uniquely human elements of your operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/50 border-gray-200 dark:border-gray-700 text-center backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30">
                  <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white min-h-[3.5rem] flex items-center justify-center">Specialized for Your Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Each AI agent targets specific use cases, delivering focused solutions instead of generic tools
                  requiring extensive customization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/50 border-gray-200 dark:border-gray-700 text-center backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30">
                  <Network className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white min-h-[3.5rem] flex items-center justify-center">Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Our solutions plug into your existing workflows and tools with minimal disruption and maximum impact.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/50 border-gray-200 dark:border-gray-700 dark:text-gray-300 text-center backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/20 border border-orange-200 dark:border-orange-500/30">
                  <BarChart3 className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white min-h-[3.5rem] flex items-center justify-center">Continuous Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  As you use our agents, they become smarter and more tailored to your specific needs, continuously
                  enhancing your ROI.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-12 md:py-20 dotted-background-sparse relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 dark:from-cyan-900/5 dark:to-purple-900/10" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700"
            >
              Architecture
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Under the Hood: Architecture
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built on robust, scalable architecture designed for enterprise-grade performance and security.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-600 dark:to-purple-600 rounded-lg blur opacity-20 dark:opacity-25 group-hover:opacity-30 dark:group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 p-8 transform perspective-1000 hover:rotateX-2 hover:rotateY-2 transition-transform duration-300">
                <div className="relative transform-gpu">
                  <Image
                    src={ELL3ArchitectureSketch}
                    alt="Banyan Intelligence Architecture Diagram"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 dark:from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-12 md:py-20 bg-gray-50/50 dark:bg-gray-900/50 dotted-background-dense relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 dark:from-cyan-900/10 dark:to-purple-900/10" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700"
            >
              Latest Insights
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              From Our Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI agents, workflow automation, and the future of work.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 justify-center max-w-4xl mx-auto">
            {/* Post 1 */}
            <Card className="bg-white/80 dark:bg-black/50 border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-700/20 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/20 dark:to-cyan-700/20 rounded-t-lg border-b border-gray-200 dark:border-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-cyan-200 dark:bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-300 dark:border-cyan-500/30">
                    <BookOpen className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                  <span>•</span>
                  <span>Apr 24</span>
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Beyond Text-to-SQL: Harnessing the Power of Function Calling for Time Series Data Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore how Function Calling combined with Text-to-SQL techniques unlocks faster, richer insights from massive time-series datasets.
                </CardDescription>
                <Link href="/blog/function-calling-time-series" className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card className="bg-white/80 dark:bg-black/50 border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-700/20 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-700/20 rounded-t-lg border-b border-gray-200 dark:border-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-200 dark:bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-300 dark:border-purple-500/30">
                    <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>4 min read</span>
                  <span>•</span>
                  <span>Apr 24</span>
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  From Dashboards to Dialogue: How CodeACT & MCP Power Autonomous Root Cause Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  Dive into the shift from static dashboards to conversational analytics that automate RCA across distributed systems.
                </CardDescription>
                <Link href="/blog/codeact-mcp-rca" className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6">
            <Link href="/blog" className="inline-flex items-center border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-lg font-medium px-8 py-6 rounded-md transition-colors">
              View All Posts
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-900/20 dark:to-purple-900/20 dotted-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/10 dark:from-cyan-900/10 dark:to-purple-900/15" />
        <div className="container px-4 md:px-6 text-center relative">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Let's Reduce Your Team's Toil
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to transform how your team works? Schedule a consultation to explore how our AI agents can address
              your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg px-8 py-6">
                  Book a Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-base px-6 py-4 sm:text-lg sm:px-8 sm:py-6"
              >
                Learn More
              </Button>
            </div>
            <h4 className="text-xl font-bold tracking-tight sm:text-xl md:text-xl text-gray-900 dark:text-white">
            AI Assistants for everyone
            at work
            </h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black dark:text-white border-t border-gray-200 dark:border-gray-800 py-16">
        <div className="container px-4 md:px-6">
          {/* Main Footer Content */}
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <Image 
                    src="/BI_logo-1cm[36].png" 
                    alt="Banyan Intelligence Logo" 
                    width={40} 
                    height={40} 
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <span className="text-xl font-bold dark:bg-black dark:text-white">Banyan Intelligence</span>
              </div>
              <div className="text-md dark:bg-black dark:text-white">
              AI Assistants for everyone at work
              </div>
              <div className="text-sm dark:bg-black dark:text-white">
                <Link 
                  href="mailto:hello@banyanintelligence.com"
                  className="hover:text-gray-900 dark:bg-black dark:text-white transition-colors"
                >
                  hello@banyanintelligence.com
                </Link>
              </div>
             
            </div>

             {/* Agents */}
          <div className="space-y-4 dark:bg-black dark:text-white">
            <h3 className="text-lg font-semibold dark:bg-black dark:text-white">Our Solutions</h3>
            <ul className="space-y-2 dark:bg-black dark:text-white">
              <li>
                <Link href="https://ell3.ai/" className="hover:text-gray-900 dark:bg-black dark:text-white transition-colors">
                  ELL3 – Business Agent
                </Link>
              </li>
              <li>
                <Link href="https://ell3.ai/" className="hover:text-gray-900 dark:bg-black dark:text-white transition-colors">
                  ELL3 – Ops Agent
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:bg-black dark:text-white transition-colors">
                  BICO Agent
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:bg-black dark:text-white transition-colors">
                  ROP
                </Link>
              </li>
            </ul>
          </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold dark:bg-black dark:text-white">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#blog" className="hover:text-gray-900 dark:bg-black dark:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-900 dark:bg-black dark:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-gray-900 dark:bg-black dark:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold  dark:bg-black dark:text-white">Subscribe</h3>
              <p className="text-sm dark:bg-black dark:text-white">
                We're expanding our suite of AI agents to address more workplace challenges. Sign up for our newsletter to be the first to know about new solutions.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
                />
                <Button 
                  className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-2 transition-all duration-300"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-sm dark:bg-black dark:text-white">
                  &copy; {new Date().getFullYear()} banyanintelligence.com
                </p>
                
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <Link
                  href="https://www.linkedin.com/company/banyan-intelligence/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-black dark:text-white hover:text-gray-700 transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/BanyanIntel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-black dark:text-white hover:text-gray-700 transition-colors"
                >
                  X
                </Link>
                <Link
                  href="https://www.instagram.com/banyanintelligence/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-black dark:text-white hover:text-gray-700 transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.youtube.com/@BanyanIntelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-black dark:text-white hover:text-gray-700 transition-colors"
                >
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Link href="#" className="fixed bottom-6 right-6 z-40 group">
        <button aria-label="Back to top" className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-transform transform group-hover:-translate-y-1">
          <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
        </button>
      </Link>
    </div>
  )
}
