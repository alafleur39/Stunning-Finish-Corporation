import Script from "next/script"

interface StructuredDataProps {
  type: "organization" | "localBusiness" | "service" | "breadcrumb" | "review"
  data?: any
}

export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Stunning Finish Corp",
    alternateName: "Stunning Finish Corporation",
    description:
      "Professional contracting services with exceptional craftsmanship. Licensed general contractor specializing in bathroom renovations, kitchen remodeling, custom carpentry, and flooring installation.",
    url: "https://stunningfinishcorp.com",
    logo: "https://stunningfinishcorp.com/logo.png",
    image: [
      "https://stunningfinishcorp.com/images/hero-bathroom.jpeg",
      "https://stunningfinishcorp.com/images/luxury-bathroom.jpeg",
      "https://stunningfinishcorp.com/images/blue-marble-bathroom.jpeg",
    ],
    telephone: "+19175602977",
    email: "sfinishcorp@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "New York City",
      addressLocality: "New York City",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Manhattan",
        addressRegion: "NY",
      },
      {
        "@type": "City",
        name: "Brooklyn",
        addressRegion: "NY",
      },
      {
        "@type": "City",
        name: "Queens",
        addressRegion: "NY",
      },
      {
        "@type": "City",
        name: "The Bronx",
        addressRegion: "NY",
      },
      {
        "@type": "City",
        name: "Staten Island",
        addressRegion: "NY",
      },
    ],
    serviceType: [
      "General Contractor",
      "Bathroom Renovation",
      "Kitchen Remodeling",
      "Custom Carpentry",
      "Flooring Installation",
      "Painting Services",
      "Commercial Renovation",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      recognizedBy: {
        "@type": "Organization",
        name: "New York State Department of Labor",
      },
    },
    foundingDate: "2008",
    numberOfEmployees: "5-10",
    slogan: "Professional contracting services with exceptional craftsmanship",
    openingHours: ["Mo-Fr 07:00-20:00", "Sa 08:00-16:00"],
    paymentAccepted: ["Cash", "Check", "Credit Card", "Financing Available"],
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Absolutely stunning work! The team was professional, clean, and delivered exactly what we envisioned. Our kitchen is now the heart of our home.",
      },
    ],
    sameAs: ["https://www.instagram.com/stunningfinish1?igsh=MWV1Z25wajJ4d2MwbA%3D%3D"],
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function ServiceStructuredData() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "General Contracting Services",
    provider: {
      "@type": "GeneralContractor",
      name: "Stunning Finish Corp",
      telephone: "+19175602977",
      email: "sfinishcorp@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York City",
        addressRegion: "NY",
        postalCode: "10001",
        addressCountry: "US",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Contracting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Renovation",
            description: "Complete bathroom remodeling including luxury finishes, tile work, and modern fixtures",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Remodeling",
            description: "Full kitchen transformations with modern designs and quality finishes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Carpentry",
            description: "Bespoke woodwork, built-ins, and custom furniture solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flooring Installation",
            description: "Professional installation of hardwood, tile, and luxury vinyl flooring",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Painting Services",
            description: "Interior and exterior painting with premium materials and techniques",
          },
        },
      ],
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.7128",
        longitude: "-74.0060",
      },
      geoRadius: "50000",
    },
  }

  return (
    <Script
      id="service-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function WebsiteStructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Stunning Finish Corp",
    alternateName: "Stunning Finish Corporation",
    url: "https://stunningfinishcorp.com",
    description:
      "Professional contracting services in New York City. Licensed general contractor specializing in bathroom renovations, kitchen remodeling, and custom carpentry.",
    publisher: {
      "@type": "Organization",
      name: "Stunning Finish Corp",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://stunningfinishcorp.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData).replace(/</g, "\\u003c"),
      }}
    />
  )
}
