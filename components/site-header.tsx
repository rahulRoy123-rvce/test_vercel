"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center">
            <Image  src="/BI_logo-1cm[36].png" alt="Banyan Intelligence Logo" width={40} height={40} className="h-10 w-10 object-contain" />
          </div>
          <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Banyan Intelligence</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#agents" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            Our Agents
          </Link>
          <Link href="/#architecture" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            Architecture
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            Blog
          </Link>
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          <ThemeToggle />
          <Button className="hidden sm:flex bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            Book Consultation
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur">
          <nav className="container px-4 py-4 space-y-4">
            <Link href="/#agents" className="block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Our Agents
            </Link>
            <Link href="/#architecture" className="block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Architecture
            </Link>
            <Link href="/about" className="block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/blog" className="block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Button className="w-full sm:hidden bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mt-4" onClick={() => setMobileMenuOpen(false)}>
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
} 