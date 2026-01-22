import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, timeline, budget, message, inquiredProject, inquiredCategory } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the project inquiry
    console.log("Project inquiry submission:", {
      name,
      email,
      phone,
      projectType,
      timeline,
      budget,
      message,
      inquiredProject,
      inquiredCategory,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement email sending here
    return NextResponse.json({ message: "Project inquiry submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Project inquiry error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
