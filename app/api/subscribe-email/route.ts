import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    // TODO: Integrate with mailing service or forward via email
    console.log("New subscriber:", email)

    return NextResponse.json({ message: "Thanks for subscribing!" }, { status: 200 })
  } catch (err) {
    console.error("Subscribe API error", err)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
} 