import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Stunning Finish Corp - Licensed General Contractor in New York City",
    template: "%s | Stunning Finish Corp",
  },
  description:
    "Professional contracting services in New York City. Licensed general contractor specializing in bathroom renovations, kitchen remodeling, flooring installation, painting, and custom carpentry. Family-owned business with 15+ years experience.",
  keywords: [
    "general contractor",
    "New York City",
    "bathroom renovation",
    "kitchen remodeling",
    "custom carpentry",
    "flooring installation",
    "painting services",
    "NYC contractor",
    "licensed contractor NY",
    "Manhattan contractor",
    "Brooklyn contractor",
    "Queens contractor",
  ],
  authors: [{ name: "Stunning Finish Corp" }],
  creator: "Stunning Finish Corp",
  publisher: "Stunning Finish Corp",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stunningfinishcorp.com",
    siteName: "Stunning Finish Corp",
    title: "Stunning Finish Corp - Licensed General Contractor in New York City",
    description:
      "Professional contracting services with exceptional craftsmanship. Licensed general contractor serving all 5 boroughs of New York City.",
    images: [
      {
        url: "/images/hero-bathroom.jpeg",
        width: 1200,
        height: 630,
        alt: "Luxury bathroom renovation by Stunning Finish Corp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stunning Finish Corp - Licensed General Contractor",
    description:
      "Professional contracting services in New York City. Bathroom renovations, kitchen remodeling, and custom carpentry.",
    images: ["/images/hero-bathroom.jpeg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://stunningfinishcorp.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
