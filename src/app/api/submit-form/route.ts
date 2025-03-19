import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import type { Submission } from "@/types"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const submission: Submission = {
      id: Date.now().toString(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    }

    const dataDir = path.join(process.cwd(), "data")
    const filePath = path.join(dataDir, "submissions.json")

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    let submissions: Submission[] = []

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8")
      submissions = JSON.parse(fileContent)
    }

    submissions.push(submission)
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2))

    return NextResponse.json({ success: true, data: submission })
  } catch (error) {
    console.error("Submission error:", error)
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 })
  }
}

