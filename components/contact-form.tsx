"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

interface ContactFormProps {
  onSubmit?: () => void
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Save to localStorage so dashboard can display submissions
    try {
      const stored = localStorage.getItem('contactMessages')
      const existing = stored ? JSON.parse(stored) : []
      const payload = {
        id: Date.now(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      }
      localStorage.setItem('contactMessages', JSON.stringify([payload, ...existing]))
    } catch (err) {
      // ignore localStorage errors
      console.error('contact save error', err)
    }

    setIsSubmitting(false)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    onSubmit?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        {/* First Name */}
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: "150ms" }}>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Email */}
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: "250ms" }}>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
        >
          <option value="">Select a subject</option>
          <option value="booking">Booking Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2 animate-fade-in" style={{ animationDelay: "350ms" }}>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your inquiry..."
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group animate-fade-in"
        style={{ animationDelay: "400ms" }}
      >
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
