import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, projectType, budget, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would typically send an email or save to database
    // For now, we'll log the submission and return success
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement email sending here
    // Options:
    // 1. Use Resend, SendGrid, or similar email service
    // 2. Use Nodemailer with SMTP
    // 3. Use a form service like Formspree or Netlify Forms

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
