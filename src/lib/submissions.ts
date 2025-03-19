export async function submitContactForm(formData: { name: string; email: string; message: string }) {
  try {
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Failed to submit form")
    }

    return await response.json()
  } catch (error) {
    console.error("Error submitting form:", error)
    throw error
  }
}

export async function getSubmissions() {
  try {
    const response = await fetch("/api/get-submissions")

    if (!response.ok) {
      throw new Error("Failed to fetch submissions")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching submissions:", error)
    throw error
  }
}

