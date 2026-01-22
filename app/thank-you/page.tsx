import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You - Message Received",
  description: "Thank you for contacting Stunning Finish Corp. We'll get back to you within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h1>
              <p className="text-lg text-slate-600 mb-6">
                We've received your message and will get back to you within 24 hours. A member of our team will contact
                you soon to discuss your project.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg mb-6">
                <h2 className="font-semibold text-slate-900 mb-2">What happens next?</h2>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• We'll review your project details</li>
                  <li>• A team member will contact you within 24 hours</li>
                  <li>• We'll schedule a free consultation</li>
                  <li>• You'll receive a detailed project quote</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild variant="outline">
                  <Link href="/">Return to Home</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-slate-500 mb-4">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:9175602977"
                    className="inline-flex items-center justify-center gap-2 text-orange-600 hover:text-orange-700"
                  >
                    <Phone className="h-4 w-4" />
                    (917) 560-2977
                  </a>
                  <a
                    href="mailto:sfinishcorp@gmail.com"
                    className="inline-flex items-center justify-center gap-2 text-orange-600 hover:text-orange-700"
                  >
                    <Mail className="h-4 w-4" />
                    sfinishcorp@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
