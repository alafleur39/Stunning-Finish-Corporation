"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageSquare } from "lucide-react"

interface ProjectInquiryModalProps {
  projectTitle: string
  projectCategory: string
}

export default function ProjectInquiryModal({ projectTitle, projectCategory }: ProjectInquiryModalProps) {
  const [isOpen, setIsOpen] = useState(false)
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
        setTimeout(() => {
          setIsOpen(false)
          form.reset()
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Project inquiry error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          <MessageSquare className="h-4 w-4 mr-2" />
          Inquire About This Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Project Inquiry</DialogTitle>
          <DialogDescription>
            Interested in a similar project? Tell us about your vision and we'll provide a free consultation.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-slate-50 p-3 rounded-lg mb-4">
          <p className="text-sm text-slate-600">
            <strong>Inquiring about:</strong> {projectTitle}
          </p>
          <p className="text-sm text-slate-500">{projectCategory}</p>
        </div>

        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-4">
            Thank you for your inquiry! We'll contact you within 24 hours.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-4">
            There was an error submitting your inquiry. Please try again or call us directly at (917) 560-2977.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden fields for Formspree */}
          <input type="hidden" name="_subject" value={`Project Inquiry: ${projectTitle} - Stunning Finish Corp`} />
          <input type="hidden" name="_next" value="https://stunningfinishcorp.com/thank-you" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="inquiredProject" value={projectTitle} />
          <input type="hidden" name="inquiredCategory" value={projectCategory} />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(917) 560-2977" required />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>

          <div>
            <Label htmlFor="projectType">What type of project are you considering?</Label>
            <select
              id="projectType"
              name="projectType"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
            >
              <option value="">Select project type</option>
              <option value="similar">Similar to this project</option>
              <option value="bathroom">Bathroom Renovation</option>
              <option value="kitchen">Kitchen Remodeling</option>
              <option value="fireplace">Fireplace Installation</option>
              <option value="carpentry">Custom Carpentry</option>
              <option value="interior-design">Interior Design</option>
              <option value="feature-wall">Feature Wall</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="timeline">Desired Timeline</Label>
              <select
                id="timeline"
                name="timeline"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6-12months">6-12 months</option>
                <option value="planning">Just planning ahead</option>
              </select>
            </div>
            <div>
              <Label htmlFor="budget">Estimated Budget</Label>
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
                <option value="discuss">Prefer to discuss</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Tell us about your project vision</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your space, style preferences, specific requirements, or any questions you have about this type of project..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-neutral-800 hover:bg-neutral-900 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>

        <div className="text-xs text-slate-500 mt-4">
          <p>
            By submitting this form, you agree to be contacted by Stunning Finish Corp regarding your project inquiry.
            We typically respond within 24 hours.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
