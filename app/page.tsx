import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ImageLightbox from "@/components/image-lightbox"
import { ServiceStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Stunning Finish Corp - Licensed general contractor in New York City. Professional bathroom renovations, kitchen remodeling, custom carpentry, and flooring installation services.",
  openGraph: {
    title: "Stunning Finish Corp - Professional Contracting Services",
    description:
      "Licensed general contractor serving all 5 boroughs of New York City. Specializing in luxury bathroom renovations and kitchen remodeling.",
    url: "https://stunningfinishcorp.com",
    images: [
      {
        url: "/images/hero-bathroom.jpeg",
        width: 1200,
        height: 630,
        alt: "Luxury bathroom renovation by Stunning Finish Corp",
      },
    ],
  },
}

export default function HomePage() {
  const breadcrumbItems = [{ name: "Home", url: "https://stunningfinishcorp.com" }]

  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <ServiceStructuredData />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Stunning Finish Corp</h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Professional contracting services with exceptional craftsmanship. We deliver stunning finishes that
                exceed expectations, on time and within budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-bathroom.jpeg"
                alt="Luxury blue marble bathroom renovation by Stunning Finish Corp"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From residential renovations to commercial construction, we provide comprehensive contracting services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kitchen Remodeling",
                description: "Complete kitchen transformations with modern designs and quality finishes.",
                icon: "🏠",
              },
              {
                title: "Bathroom Renovation",
                description: "Luxury bathroom upgrades with attention to every detail.",
                icon: "🚿",
              },
              {
                title: "Flooring Installation",
                description: "Professional installation of hardwood, tile, and luxury vinyl flooring.",
                icon: "🔨",
              },
              {
                title: "Painting & Finishing",
                description: "Interior and exterior painting with premium materials and techniques.",
                image: "/images/painter-orange-wall.png",
              },
              {
                title: "Custom Carpentry",
                description: "Bespoke woodwork and built-in solutions for your space.",
                image: "/images/carpenter.png",
              },
              {
                title: "Commercial Projects",
                description: "Office renovations and commercial space improvements.",
                icon: "🏢",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {service.image ? (
                    <div className="h-16 mb-4 flex items-center justify-center">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-4xl mb-4">{service.icon}</div>
                  )}
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Transformation */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Amazing Transformations</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we transform spaces from construction to stunning finished results. Click images to view full
              size.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Before Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <ImageLightbox
                  src="/images/bathroom-before.jpeg"
                  alt="Bathroom renovation before - construction phase showing exposed materials and work in progress"
                  title="BEFORE: Construction Phase"
                  description="Raw construction with exposed cement board, waterproofing membrane, and materials in progress. This shows the foundation work before our transformation begins."
                  width={1200}
                  height={800}
                />
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">BEFORE</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Construction Phase</h3>
                <p className="text-slate-600">Raw construction with exposed materials and work in progress</p>
                <p className="text-sm text-orange-600 mt-2 font-medium">Click image to view details</p>
              </div>
            </div>

            {/* After Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <ImageLightbox
                  src="/images/bathroom-after.jpeg"
                  alt="Bathroom renovation after - luxury finished bathroom with marble tiles and premium fixtures"
                  title="AFTER: Luxury Spa Bathroom"
                  description="Complete transformation featuring white marble-look tiles, rainfall shower system with LED lighting, mosaic tile flooring, built-in niche, and premium fixtures. A stunning example of our craftsmanship."
                  width={1200}
                  height={800}
                />
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Luxury Spa Bathroom</h3>
                <p className="text-slate-600">
                  Complete transformation with marble tiles, rainfall shower, and premium finishes
                </p>
                <p className="text-sm text-orange-600 mt-2 font-medium">Click image to view details</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/portfolio">View More Transformations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Why Choose Stunning Finish Corp?</h2>
              <div className="space-y-4">
                {[
                  "Licensed and fully insured contractors",
                  "15+ years of industry experience",
                  "100% satisfaction guarantee",
                  "Competitive pricing with transparent quotes",
                  "On-time project completion",
                  "Premium materials and craftsmanship",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-bathroom.jpeg"
                alt="Premium bathroom renovation showcasing quality craftsmanship"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Get a free consultation and quote for your next contracting project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-orange-600"
            >
              <Link href="tel:9175602977">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
