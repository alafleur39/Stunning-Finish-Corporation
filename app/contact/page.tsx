import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to start your project? Get in touch for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Get Your Free Quote</CardTitle>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">(917) 560-2977</p>
                      <p className="text-sm text-slate-500">Call for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">
                        <a
                          href="mailto:sfinishcorp@gmail.com"
                          className="text-orange-600 hover:text-orange-700 hover:underline"
                        >
                          sfinishcorp@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-slate-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Service Area</h3>
                      <p className="text-slate-600">New York City, NY</p>
                      <p className="text-sm text-slate-500">Licensed in all 5 boroughs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                      <div className="text-slate-600 space-y-1">
                        <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">We are licensed to serve all 5 boroughs of New York City:</p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Manhattan</li>
                    <li>• Brooklyn</li>
                    <li>• Queens</li>
                    <li>• The Bronx</li>
                    <li>• Staten Island</li>
                  </ul>
                  <p className="text-sm text-slate-500 mt-4">Licensed and insured in all NYC boroughs!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
