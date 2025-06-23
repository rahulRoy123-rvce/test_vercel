import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    // Prepare Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true", // true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "hi@banyanintelligence.com",
      to: process.env.EMAIL_TO || "hi@banyanintelligence.com",
      subject: "New newsletter subscriber",
      html: `<p style="font-family: Arial, sans-serif; font-size: 16px;">This user asked to subscribe to the Banyan Intelligence newsletter:</p>
             <p style="font-family: Arial, sans-serif; font-size: 20px; font-weight: bold;">${email}</p>`,
    })

    console.log("New subscriber (email sent):", email)

    return NextResponse.json({ message: "Thanks for subscribing!" }, { status: 200 })
  } catch (err) {
    console.error("Subscribe API error", err)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
} 