import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, company, phone, message } = body

    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verify transporter (helpful during dev)
    try {
      await transporter.verify()
    } catch (e) {
      console.error('Email transporter verification failed:', e)
    }

    // Logo URL (can be stored in env later)
    const logoUrl =
      process.env.EMAIL_LOGO_URL || 'https://ell3.ai/assets/logos/ell3-logo-no-bg.png'

    // Email signature HTML
    const emailSignature = `
      <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #dddddd;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="vertical-align: top; padding-right: 15px;">
              <img src="${logoUrl}" alt="ELL3 Logo" width="60" height="60" style="display: block;" />
            </td>
            <td style="vertical-align: top; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.4;">
              <strong>The ELL3 Team</strong><br />
              <a href="mailto:hi@ell3.ai" style="color: #0066cc; text-decoration: none;">hi@ell3.ai</a><br />
              <a href="https://ell3.ai" style="color: #0066cc; text-decoration: none;">ell3.ai</a>
            </td>
          </tr>
        </table>
      </div>
    `

    // Admin notification email
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'your-email@ell3.ai',
      to: process.env.EMAIL_TO || 'demo-requests@ell3.ai',
      subject: 'New Demo Request from ELL3 Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <img src="${logoUrl}" alt="ELL3 Logo" width="150" style="max-width: 100%;" />
          </div>
          <div style="padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h1 style="color: #333333; font-size: 24px; margin-top: 0;">New Demo Request</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong> ${message || 'Not provided'}</p>
            <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            <p style="color: #777777; font-size: 14px;">This request was submitted from the ELL3 website on ${new Date().toLocaleString()}</p>
          </div>
          ${emailSignature}
        </div>
      `,
    }

    // Confirmation email to the user
    const userMailOptions = {
      from: `${process.env.EMAIL_FROM_NAME || 'ELL3 Team'} <${
        process.env.EMAIL_FROM || 'hi@ell3.ai'
      }>`,
      to: email,
      subject: 'We received your ELL3 demo request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <img src="${logoUrl}" alt="ELL3 Logo" width="150" style="max-width: 100%;" />
          </div>
          <div style="padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h1 style="color: #333333; font-size: 24px; margin-top: 0;">Thank you for your interest in ELL3!</h1>
            <p>Hello ${name},</p>
            <p>We have received your demo request and our team will be in touch with you shortly.</p>
            <p>Here's a summary of the information you provided:</p>
            <ul>
              <li><strong>Company:</strong> ${company}</li>
              <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
            </ul>
            <p>If you have any urgent questions, please don't hesitate to contact us directly at <a href="mailto:hi@ell3.ai" style="color: #0066cc;">hi@ell3.ai</a></p>
          </div>
          ${emailSignature}
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json({
      success: true,
      message: 'Demo request received and emails sent successfully',
    })
  } catch (error) {
    console.error('Error processing demo request:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
} 