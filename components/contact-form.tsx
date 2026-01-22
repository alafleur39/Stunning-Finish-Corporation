"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xjkrvanz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
          There was an error submitting your form. Please try again or call us directly at (917) 560-2977.
        </div>
      )}

      {/* Hidden fields for Formspree */}
      <input type="hidden" name="_subject" value="New Contact Form Submission - Stunning Finish Corp" />
      <input type="hidden" name="_next" value="https://stunningfinishcorp.com/thank-you" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
            First Name *
          </label>
          <Input id="firstName" name="firstName" placeholder="John" required className="w-full" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
            Last Name *
          </label>
          <Input id="lastName" name="lastName" placeholder="Doe" required className="w-full" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email Address *
        </label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required className="w-full" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
          Phone Number *
        </label>
        <Input id="phone" name="phone" type="tel" placeholder="(917) 560-2977" required className="w-full" />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="kitchen">Kitchen Remodeling</option>
          <option value="bathroom">Bathroom Renovation</option>
          <option value="flooring">Flooring Installation</option>
          <option value="painting">Painting & Finishing</option>
          <option value="carpentry">Custom Carpentry</option>
          <option value="commercial">Commercial Project</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
          Estimated Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
        >
          <option value="">Select budget range</option>
          <option value="under-10k">Under $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="over-100k">Over $100,000</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Project Details
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          rows={4}
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-neutral-800 hover:bg-neutral-900 text-white"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
