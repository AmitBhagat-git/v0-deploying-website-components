export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically send the email or save to a database
    console.log("Contact form submission:", { name, email, message })

    return Response.json({ success: true, message: "Message received" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json({ error: "Failed to process request" }, { status: 500 })
  }
}
