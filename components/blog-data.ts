export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  readTime: string
  updated?: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "codeact-mcp-rca",
    title: "From Dashboards to Dialogue: How CodeACT & MCP Power Autonomous Root Cause Analysis",
    author: "Senthilkumar Bala",
    date: "Apr 24, 2024",
    readTime: "4 min read",
    updated: "Apr 29, 2024",
    excerpt:
      "Discover how conversational intelligence powered by CodeACT and the Model Context Protocol transforms root cause analysis, eliminating dashboard overload and accelerating insights.",
  },
  {
    slug: "function-calling-time-series",
    title: "Beyond Text-to-SQL: Harnessing the Power of Function Calling for Time Series Data Insights",
    author: "Sumant Shetty",
    date: "Apr 24, 2024",
    readTime: "6 min read",
    updated: "Apr 29, 2024",
    excerpt:
      "Explore how Function Calling combined with Text-to-SQL techniques unlocks faster, richer insights from massive time-series datasets.",
  },
  {
    slug: "ell3-benchmarking",
    title: "Benchmarking an LLM-Powered Chatbot: Beyond Standard Metrics",
    author: "Senthilkumar Bala",
    date: "Jun 25, 2025",
    readTime: "8 min read",
    excerpt:
      "Why traditional LLM benchmarks fall short for specialized agents and how we designed a composite evaluation pipeline for ell3, covering quantitative, qualitative, and operational metrics.",
  },
] 