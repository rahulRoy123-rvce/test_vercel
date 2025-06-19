"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { MessageSquare, BarChart3, Search } from "lucide-react"
import Link from "next/link"

// Reuse the same agents array as original carousel
const agents = [
  {
    id: "ops-agent",
    title: "ELL3 - Ops Agent",
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
    iconBg: "bg-cyan-100 dark:bg-cyan-500/20 border-cyan-200 dark:border-cyan-500/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    checkColor: "text-cyan-600 dark:text-cyan-400",
    border: "hover:border-cyan-500/50",
  },
  purple: {
    iconBg: "bg-purple-100 dark:bg-purple-500/20 border-purple-200 dark:border-purple-500/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    checkColor: "text-purple-600 dark:text-purple-400",
    border: "hover:border-purple-500/50",
  },
  green: {
    iconBg: "bg-green-100 dark:bg-green-500/20 border-green-200 dark:border-green-500/30",
    iconColor: "text-green-600 dark:text-green-400",
    checkColor: "text-green-600 dark:text-green-400",
    border: "hover:border-green-500/50",
  },
} as const

type ColorKey = keyof typeof colorClasses

export default function AgentCarouselSide() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % agents.length), 5000)
    return () => clearInterval(id)
  }, [auto])

  const next = () => {
    setCurrent((prev) => (prev + 1) % agents.length)
    setAuto(false)
  }
  const prev = () => {
    setCurrent((prev) => (prev - 1 + agents.length) % agents.length)
    setAuto(false)
  }

  return (
    <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {agents.map((agent) => {
            const Icon = agent.icon
            const colors = colorClasses[agent.color as ColorKey]
            return (
              <div key={agent.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                <Card
                  className={`relative bg-white/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 ${colors.border} transition-all duration-300`}
                >
                  {agent.id.includes('ops-agent') || agent.id.includes('business-agent') ? (
                    <Link href="https://ell3.ai/" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-white text-cyan-600 border border-cyan-500 hover:bg-cyan-50 font-semibold text-sm px-4 py-2 rounded-full shadow">
                      Try Now
                    </Link>
                  ) : null}
                  <CardHeader className="p-4 sm:p-6 pb-4">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.iconBg} flex-shrink-0`}>
                        <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl text-gray-900 dark:text-white">{agent.title}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                          {agent.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                      {/* Video Column (left on md) */}
                      <div className="w-full md:order-1 order-2">
                        <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                          {agent.videoUrl ? (
                            <iframe
                              width="100%"
                              height="100%"
                              src={agent.videoUrl}
                              title={`${agent.title} Demo Video`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          ) : (
                            <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                              Demo Coming Soon
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Text Column */}
                      <div className="space-y-4 md:order-2 order-1">
                        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                          {agent.description}
                        </p>
                        <div className="space-y-3">
                          {agent.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className={`h-5 w-5 ${colors.checkColor} mt-1 flex-shrink-0`} />
                              <div>
                                <span className="font-semibold text-gray-900 dark:text-white">{feat.title}</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{feat.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 bg-cyan-100/80 dark:bg-gray-900/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 backdrop-blur-sm z-10 h-8 w-8 sm:h-10 sm:w-10"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-500 dark:text-cyan-400" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 bg-cyan-100/80 dark:bg-gray-900/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 backdrop-blur-sm z-10 h-8 w-8 sm:h-10 sm:w-10"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-500 dark:text-cyan-400" />
      </Button>

      <div className="flex justify-center space-x-3 mt-4">
        {agents.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-cyan-500 dark:bg-cyan-400 scale-125" : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
            }`}
            onClick={() => {
              setCurrent(i)
              setAuto(false)
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 transition-all duration-300 ease-out"
          style={{ width: `${((current + 1) / agents.length) * 100}%` }}
        />
      </div>

      {/* Auto-play control */}
      <div className="flex justify-center mt-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label={auto ? "Pause Auto-play" : "Resume Auto-play"}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          onClick={() => setAuto(!auto)}
        >
          {auto ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
} 