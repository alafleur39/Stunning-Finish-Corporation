import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectInquiryModal from "@/components/project-inquiry-modal"
import ImageLightbox from "@/components/image-lightbox"
import { BreadcrumbStructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - Our Recent Projects",
  description:
    "View our portfolio of completed projects including luxury bathroom renovations, kitchen remodeling, custom carpentry, and flooring installation in New York City.",
  openGraph: {
    title: "Portfolio - Stunning Finish Corp Projects",
    description:
      "Browse our portfolio of luxury bathroom renovations, kitchen remodeling, and custom carpentry projects.",
    url: "https://stunningfinishcorp.com/portfolio",
  },
}

export default function PortfolioPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://stunningfinishcorp.com" },
    { name: "Portfolio", url: "https://stunningfinishcorp.com/portfolio" },
  ]

  const projects = [
    {
      title: "Modern Gray Kitchen with Island",
      category: "Kitchen Remodeling",
      description:
        "Contemporary kitchen featuring light gray shaker cabinets, white quartz countertops, subway tile backsplash, and a spacious island with designer lighting.",
      image: "/images/modern-gray-kitchen.jpeg",
      tags: ["Kitchen", "Modern Design", "Quartz Countertops", "Kitchen Island"],
    },
    {
      title: "Classic Cherry Wood Kitchen",
      category: "Kitchen Remodeling",
      description:
        "Elegant kitchen renovation featuring rich cherry wood cabinets, granite countertops, natural stone backsplash, and premium stainless steel appliances.",
      image: "/images/cherry-wood-kitchen.jpeg",
      tags: ["Kitchen", "Cherry Wood", "Granite", "Stone Backsplash"],
    },
    {
      title: "Custom Wooden Staircase",
      category: "Custom Carpentry",
      description:
        "Professional outdoor staircase construction with pressure-treated lumber, custom railings, and concrete foundation.",
      image: "/images/custom-wooden-stairs.jpeg",
      tags: ["Carpentry", "Outdoor", "Structural"],
    },
    {
      title: "Luxury Master Bathroom",
      category: "Bathroom Renovation",
      description:
        "Spa-like master bathroom with marble tile, floating vanity, walk-in shower, and contemporary fixtures.",
      image: "/images/luxury-bathroom.jpeg",
      tags: ["Bathroom", "Marble Tile", "Modern Design"],
    },
    {
      title: "Dramatic Blue Marble Bathroom",
      category: "Luxury Bathroom",
      description:
        "Bold and sophisticated bathroom featuring stunning blue marble with gold veining, brass fixtures, and seamless tile installation throughout.",
      image: "/images/blue-marble-bathroom.jpeg",
      tags: ["Luxury", "Blue Marble", "Brass Fixtures"],
    },
    {
      title: "Classic Bathroom Renovation",
      category: "Bathroom Remodel",
      description:
        "Timeless bathroom renovation with marble-look tile, soft blue walls, and updated fixtures for a clean, fresh aesthetic.",
      image: "/images/classic-bathroom.jpeg",
      tags: ["Bathroom", "Classic Design", "Tile Work"],
    },
    {
      title: "Modern Entertainment Wall",
      category: "Custom Feature Wall",
      description:
        "Contemporary entertainment center with textured vertical paneling, integrated electric fireplace, and mounted television.",
      image: "/images/modern-entertainment-wall.jpeg",
      tags: ["Feature Wall", "Electric Fireplace", "Modern Design"],
    },
    {
      title: "Stone Fireplace Feature Wall",
      category: "Fireplace Installation",
      description:
        "Elegant stone fireplace wall with stacked gray stone, custom white mantel, and linear electric fireplace with LED lighting.",
      image: "/images/stone-fireplace-wall.jpeg",
      tags: ["Stone Work", "Fireplace", "Feature Wall"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our recent projects and see the quality craftsmanship that sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <ImageLightbox
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    title={project.title}
                    description={project.description}
                    width={1200}
                    height={800}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-900">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <ProjectInquiryModal projectTitle={project.title} projectCategory={project.category} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-neutral-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Dream Space?</h2>
          <p className="text-xl mb-8 text-neutral-300">Let's discuss your project and bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-neutral-800 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19175602977"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-neutral-800 transition-colors"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
