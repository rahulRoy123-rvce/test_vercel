"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, BarChart3, Search, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"

const agents = [
  {
    id: "ops-agent",
    title: "Ops Agent (ELL3)",
    subtitle: "User Interviews, Not Surveys",
    description:
      "Ditch boring forms. GoBot is your AI-powered interviewer that chats with your users—over WhatsApp, email, or web—capturing feedback that feels human.",
    icon: MessageSquare,
    color: "cyan",
    videoUrl: "https://www.youtube.com/embed/oT-UJadH1yw?si=LHu84lzyPArEypSo",
    features: [
      {
        title: "Feels Human",
        description: "Conversations that sound real—so users actually respond",
      },
      {
        title: "Multi-Modal Feedback",
        description: "Capture both words and emotion with voice notes",
      },
      {
        title: "Insights, Not Spreadsheets",
        description: "Themes, summaries, quotes—automatically delivered",
      },
      {
        title: "Frictionless User Experience",
        description: "No forms, no dashboards, just chats",
      },
    ],
  },
  {
    id: "business-agent",
    title: "ELL3 - Business Agent",
    subtitle: "Gen AI Agent for Data Analysis and Insights",
    description:
      "Replace overwhelming dashboarding tools and rigid views with dynamic insights that reveal what matters most by just asking, instead of writing SQL.",
    icon: BarChart3,
    color: "purple",
    videoUrl: "https://www.youtube.com/embed/ySABFzWJENw?si=EFsKSFm0HDlyxFqO",
    features: [
      {
        title: "Plain Language Queries",
        description: "Ask questions in plain language instead of SQL to instantly uncover key insights",
      },
      {
        title: "Seamless Integrations",
        description: "Connects seamlessly to databases, Shopify, GSuite, Google Analytics, and files",
      },
      {
        title: "Dynamic Views",
        description: "Adapts to your unique business needs with dynamic, focused views",
      },
      {
        title: "Hidden Patterns",
        description: "Reveals hidden patterns and opportunities traditional dashboards miss",
      },
    ],
  },
  {
    id: "bico-agent",
    title: "BICO",
    subtitle: "Gen AI Deep Reasoning Agent for Root Cause Analysis",
    description:
      "Unlock advanced insights with BICO's AI-powered analysis for incident root cause, network, sales, and business operations.",
    icon: Search,
    color: "green",
    features: [
      {
        title: "Eliminate RCA Toil",
        description: "Automate time-consuming root cause analysis",
      },
      {
        title: "Overcome Dashboard Overload",
        description: "Replace rigid views with dynamic insights",
      },
      {
        title: "Navigate Complex Incident Landscapes",
        description: "Quickly identify anomalies and root causes",
      },
      {
        title: "Reduce Expert Dependency",
        description: "Access critical connections without specialized staff",
      },
    ],
  },
]

const colorClasses = {
  cyan: {
    border: "hover:border-cyan-500/50",
    shadow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    iconBg: "bg-cyan-100 dark:bg-cyan-500/20 border-cyan-200 dark:border-cyan-500/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    checkColor: "text-cyan-600 dark:text-cyan-400",
    demoBg: "bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/20 dark:to-cyan-700/20",
    demoBorder: "border-cyan-300 dark:border-cyan-500/30",
    demoIconBg: "bg-cyan-200 dark:bg-cyan-500/20 border-cyan-300 dark:border-cyan-500/30",
    demoText: "text-cyan-700 dark:text-cyan-300",
  },
  purple: {
    border: "hover:border-purple-500/50",
    shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    iconBg: "bg-purple-100 dark:bg-purple-500/20 border-purple-200 dark:border-purple-500/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    checkColor: "text-purple-600 dark:text-purple-400",
    demoBg: "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-700/20",
    demoBorder: "border-purple-300 dark:border-purple-500/30",
    demoIconBg: "bg-purple-200 dark:bg-purple-500/20 border-purple-300 dark:border-purple-500/30",
    demoText: "text-purple-700 dark:text-purple-300",
  },
  green: {
    border: "hover:border-green-500/50",
    shadow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    iconBg: "bg-green-100 dark:bg-green-500/20 border-green-200 dark:border-green-500/30",
    iconColor: "text-green-600 dark:text-green-400",
    checkColor: "text-green-600 dark:text-green-400",
    demoBg: "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-700/20",
    demoBorder: "border-green-300 dark:border-green-500/30",
    demoIconBg: "bg-green-200 dark:bg-green-500/20 border-green-300 dark:border-green-500/30",
    demoText: "text-green-700 dark:text-green-300",
  },
}

export default function AgentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % agents.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % agents.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + agents.length) % agents.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {agents.map((agent, index) => {
            const Icon = agent.icon
            const colors = colorClasses[agent.color as keyof typeof colorClasses]

            return (
              <div key={agent.id} className="w-full flex-shrink-0 px-4">
                <Card
                  className={`bg-white/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 ${colors.border} ${colors.shadow} transition-all duration-300 mx-auto max-w-4xl`}
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${colors.iconBg}`}>
                        <Icon className={`h-8 w-8 ${colors.iconColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white">{agent.title}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400 text-lg">
                          {agent.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{agent.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features Grid */}
                    <div className="grid gap-4 md:grid-cols-2">
                      {agent.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 ${colors.checkColor} mt-0.5 flex-shrink-0`} />
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white">{feature.title}</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Demo Section */}
                    <div className="mt-8 p-6 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-600">
                      {agent.videoUrl ? (
                        <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                          <iframe 
                            width="100%" 
                            height="100%" 
                            src={agent.videoUrl}
                            title={`${agent.title} Demo Video`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      ) : (
                        <div
                          className={`aspect-video ${colors.demoBg} rounded-lg flex items-center justify-center border ${colors.demoBorder}`}
                        >
                          <div className="text-center space-y-3">
                            <div
                              className={`w-20 h-20 mx-auto ${colors.demoIconBg} rounded-full flex items-center justify-center border`}
                            >
                              <Icon className={`h-10 w-10 ${colors.iconColor}`} />
                            </div>
                            <p className={`${colors.demoText} font-semibold text-lg`}>Interactive Demo</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">See {agent.title} in action</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-cyan-500/50 backdrop-blur-sm z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-cyan-500/50 backdrop-blur-sm z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {agents.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-cyan-500 dark:bg-cyan-400 scale-125"
                : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / agents.length) * 100}%` }}
        />
      </div>

      {/* Auto-play Control */}
      <div className="flex justify-center mt-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
        </Button>
      </div>
    </div>
  )
}
