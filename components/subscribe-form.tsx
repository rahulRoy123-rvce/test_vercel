"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"

interface SubmitStatus {
  success: boolean
  message: string
}

export default function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Guard clause for empty email
    if (!email.trim()) {
      setSubmitStatus({ success: false, message: "Please enter a valid email." })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/subscribe-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message || "Subscribed successfully!" })
        setEmail("")
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error("Subscribe error:", error)
      setSubmitStatus({ success: false, message: error instanceof Error ? error.message : "Something went wrong." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full max-w-md space-x-2">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
          required
        />
        <Button
          type="submit"
          className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-2 transition-all duration-300 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "..." : "Submit"}
        </Button>
      </form>
      {submitStatus && (
        <p
          className={`mt-2 text-sm ${submitStatus.success ? "text-green-600" : "text-red-600"}`}
        >
          {submitStatus.message}
        </p>
      )}
    </>
  )
} 