import React from "react"

export const blogContents: Record<string, React.ReactNode> = {
  "codeact-mcp-rca": (
    <>
      <p className="text-xl">
        In today's highly distributed systems, the challenge in observability isn't the absence of data—it's the overwhelming flood of metrics, logs, traces, alerts, and dashboards scattered across silos. Data Analysts, Engineers and SREs are forced to manually correlate signals across tools like Prometheus, Grafana, DataDog, and CloudWatch—often under intense time pressure. The result? Slow root cause analysis, alert fatigue, and missed patterns.
      </p>
      <p className="text-xl">
        The next evolution in observability isn't more dashboards—it's conversational intelligence. Imagine asking, "Why did latency spike in us-west during deployment?" and getting a precise, data-backed answer within seconds.
      </p>
      <p className="text-xl">
        That's the vision behind a GenAI agent powered by CodeACT and the Model Context Protocol (MCP)—a self-reasoning system that turns natural language queries into deep, autonomous root cause analysis (RCA). In this blog, we explore how these two components shift observability from visual hunting to cognitive querying.
      </p>
      <h3 className="font-semibold text-2xl">The Problem with Dashboards</h3>
      <p className="text-xl">Dashboards are useful for monitoring—but they're fundamentally reactive. They expect the user to:</p>
      <ul className="text-xl">
        <li>Know what metrics to look at</li>
        <li>Understand which systems are involved</li>
        <li>Manually correlate across noisy signals from different tools</li>
      </ul>
      <p className="text-xl">
        In Network Operations Centers (NOCs) for ISPs or SRE teams managing complex distributed systems, this becomes overwhelming. One incident—like a latency spike or packet drop—can trigger alerts from a myriad of tools. Each dashboard offers a piece of the puzzle, but analysts must stitch these fragments into a cohesive diagnosis. The cognitive overload slows down time-to-resolution and often leads to false leads.
      </p>
      <h3 className="font-semibold text-2xl">Enter CodeACT and MCP: Enabling Conversational RCA</h3>
      <h4 className="font-semibold text-xl">What is CodeACT?</h4>
      <p className="text-xl">
        CodeACT (Code Adaptive Compute-efficient Tuning) enables LLMs to autonomously generate, debug, and execute code tailored to analytics tasks.
      </p>
      <ul className="text-xl">
        <li>Code Generation: SQL, Python, Bash</li>
        <li>Self-Debugging & Tool Invocation</li>
        <li>Execution Loop with reasoning engine</li>
      </ul>
      <h4 className="font-semibold text-xl">What is MCP (Model Context Protocol)?</h4>
      <p className="text-xl">
        MCP is the connective tissue that feeds live observability data into the GenAI agent, acting as its memory and sensory layer.
      </p>
      <p className="text-xl">
        Together, CodeACT and MCP create a system-aware loop that makes RCA fast and contextually accurate.
      </p>
      <h3 className="font-semibold text-2xl">A Day in the Life of Dialogue-Based RCA: Network Latency Edition</h3>
      <p className="text-xl">
        Walk-through of querying latency spike and automated steps (parsing, code generation, execution, reasoning) leading to root cause identification of router firmware upgrade.
      </p>
      <h3 className="font-semibold text-2xl">Final Thoughts</h3>
      <p className="text-xl">
        CodeACT and MCP mark the shift from dashboard hunting to conversational RCA—enabling analysts to focus on strategy, not syntax.
      </p>
    </>
  ),
  "function-calling-time-series": (
    <>
      <p>
        In today's data-driven world, time series data has become the lifeblood of countless enterprises. From monitoring application performance and IoT sensor streams to analyzing financial markets and user behavior, the ability to extract timely insights from time-stamped data is paramount. As this data deluge grows, the need for intuitive and efficient query interfaces becomes increasingly critical. Natural-language interfaces, powered by Large Language Models (LLMs), offer a promising avenue to democratize data access and empower users of all technical backgrounds to ask questions and get answers directly from their data.
      </p>
      <p>
        While Text-to-SQL has emerged as a popular approach for natural-language database querying, its application to complex time-series data—especially within star-schema warehouses—presents significant hurdles. Translating nuanced time-series questions into accurate and performant SQL can quickly become a maze of intricate joins and specialized aggregations.
      </p>
      <p>
        In this post we explore those limitations and introduce a more powerful alternative: <strong>Function Calling</strong>. We'll examine three different approaches we've tested and show how they unlock expressiveness and efficiency for faster insights.
      </p>

      <h3 className="font-semibold">The Challenge: Querying Time-Series Star Schemas with Natural Language</h3>
      <p>Key pain points where Text-to-SQL falls short:</p>

      <h4 className="font-semibold">Challenge 1 — Complex Joins</h4>
      <p>
        Even a simple question like "What is the average CPU utilization for servers in the US-West region over the last hour?" can require multiple joins across fact and dimension tables. Generating that SQL reliably from free-form language is error-prone.
      </p>

      <h4 className="font-semibold">Challenge 2 — Time-Series Aggregations</h4>
      <p>
        Databases such as TimescaleDB provide specialised functions like <code>time_bucket()</code>, <code>first()</code> and <code>last()</code>. Text-to-SQL models rarely surface these capabilities, resulting in slower queries and missed features.
      </p>

      <h4 className="font-semibold">Challenge 3 — Nuanced Analytical Intents</h4>
      <p>
        Concepts like "trend analysis" or "significant increases" are difficult to encode directly in SQL. Capturing that intent in a Text-to-SQL pipeline quickly becomes brittle.
      </p>

      <h3 className="font-semibold">Our Solution: Function Calling for Time-Series Data</h3>
      <p>
        Function Calling shifts responsibility: instead of generating raw SQL, the LLM calls vetted functions (APIs) that encapsulate business logic and schema specifics. We tested three strategies:
      </p>
      <ol>
        <li><strong>Filtered Table + Code Execution</strong> – maximal flexibility; post-processing happens in Python or notebooks.</li>
        <li><strong>Comprehensive Structured Calls</strong> – nested query dictionaries that translate directly into SQL server-side.</li>
        <li><strong>Intent-Based Calls</strong> – our preferred middle ground, mapping common analytical intents to concise function signatures.</li>
      </ol>

      <h3 className="font-semibold">Benefits of Function Calling</h3>
      <ul>
        <li>Greater expressiveness for specialised time-series analysis</li>
        <li>Lower latency and data transfer by fetching exactly what is needed</li>
        <li>User-friendly intents that mirror natural questioning</li>
        <li>A future-proof pathway to embed advanced analytics &amp; ML workflows</li>
      </ul>

      <p>
        By embracing Function Calling, organisations can move beyond the constraints of Text-to-SQL and empower everyone to gain deeper, faster insights from their time-series data.
      </p>
    </>
  ),
} 