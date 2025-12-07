"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("Sending...")
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setStatus("Message sent — thanks!")
      setForm({ name: "", email: "", message: "" })
    } else {
      setStatus("Failed to send. Try again.")
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6 bg-white rounded-lg shadow p-8">
        <h3 className="text-2xl font-bold">Get in touch</h3>
        <p className="text-gray-600 mt-2">Have questions? We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 border rounded"
            placeholder="Your name"
            required
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 border rounded"
            placeholder="Email"
            type="email"
            required
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="md:col-span-2 p-3 border rounded"
            placeholder="Message"
            rows={5}
            required
          ></textarea>
          <button type="submit" className="md:col-span-2 px-6 py-3 bg-indigo-600 text-white rounded">
            {status || "Send message"}
          </button>
        </form>
      </div>
    </section>
  )
}
