import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "A+", label: "BBB Rating" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" },
  ]

  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "We take pride in delivering exceptional workmanship that stands the test of time.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, communicate, and deliver on our promises.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and complete projects on schedule without compromising quality.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance for your peace of mind.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Learn about our story, values, and commitment to exceptional contracting services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                As a licensed general contractor, we take pride in being a family-owned business with a wealth of
                professional experience and great customer service. Founded in 2008, Stunning Finish Corp began with a
                simple mission: to provide exceptional contracting services that transform spaces and exceed client
                expectations.
              </p>
              <p>
                Our family values drive everything we do. From the initial consultation to the final walkthrough, we
                understand that inviting contractors into your home is a big decision, which is why we treat every
                project with the same care and attention we would give our own family's home.
              </p>
              <p>
                With over 15 years of combined experience, our team brings both technical expertise and genuine care to
                every project. We believe that quality craftsmanship, honest communication, and exceptional customer
                service are the foundation of lasting relationships with our clients. Every project tells a story, and
                we're honored to be part of creating spaces where families make memories for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver the best possible experience for our
              clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Experience the Stunning Finish Corp difference on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
