"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleFormSubmit = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="bg-gradient-to-br from-background via-background to-accent/5 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Have questions about your travel plans? Our team is here to help make your journey unforgettable.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 animate-slide-up">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 animate-slide-up-delayed">
            <ContactInfo />

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-6 animate-bounce-in">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-900 dark:text-green-100">Message Sent!</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our travel booking services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 animate-fade-in-staggered"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-semibold text-lg text-foreground mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

const faqItems = [
  {
    question: "How quickly will you respond?",
    answer:
      "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our hotline.",
  },
  {
    question: "Do you offer group booking discounts?",
    answer:
      "Yes! Groups of 10+ people are eligible for special discounts. Contact our group travel specialist for details.",
  },
  {
    question: "Can I modify my booking?",
    answer: "Absolutely. Most bookings can be modified up to 7 days before your travel date at no additional charge.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and digital wallets. Payment plans are also available.",
  },
  {
    question: "Is travel insurance included?",
    answer: "Travel insurance is optional but highly recommended. It can be added during the checkout process.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer: "Yes, our support team is available 24/7 to assist with any travel emergencies or questions.",
  },
]
