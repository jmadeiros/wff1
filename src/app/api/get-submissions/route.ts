import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import type { Submission } from "@/types"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "submissions.json")

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const submissions: Submission[] = JSON.parse(fileContent)
      return NextResponse.json({ success: true, data: submissions })
    } else {
      return NextResponse.json({ success: true, data: [] })
    }
  } catch (error) {
    console.error("Error retrieving submissions:", error)
    return NextResponse.json({ success: false, error: "Failed to retrieve submissions" }, { status: 500 })
  }
}

