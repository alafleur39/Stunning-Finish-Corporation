"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Footer() {
  const [logoModalOpen, setLogoModalOpen] = useState(false)

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Dialog open={logoModalOpen} onOpenChange={setLogoModalOpen}>
                <DialogTrigger asChild>
                  <button className="cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src="/images/stunning-finish-logo.png"
                      alt="Stunning Finish Corp Logo"
                      width={32}
                      height={32}
                      className="object-contain filter invert"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] p-4 bg-white">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/stunning-finish-logo.png"
                      alt="Stunning Finish Corp Logo - Full Size"
                      width={500}
                      height={500}
                      className="max-h-[70vh] w-auto object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-slate-900">Stunning Finish Corp</h3>
                    <p className="text-slate-600">General Contractor</p>
                    <p className="text-sm text-slate-500 mt-2">Licensed & Insured in all 5 NYC Boroughs</p>
                  </div>
                </DialogContent>
              </Dialog>
              <span className="font-bold text-lg">Stunning Finish Corp</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Professional contracting services with exceptional craftsmanship. Licensed, insured, and committed to your
              satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/stunningfinish1?igsh=MWV1Z25wajJ4d2MwbA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Flooring Installation</li>
              <li>Painting & Finishing</li>
              <li>Custom Carpentry</li>
              <li>Commercial Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-600 flex-shrink-0" />
                <span className="text-slate-300 text-sm">(917) 560-2977</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-600 flex-shrink-0" />
                <a
                  href="mailto:sfinishcorp@gmail.com"
                  className="text-slate-300 text-sm hover:text-white transition-colors"
                >
                  sfinishcorp@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">New York City, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Stunning Finish Corp. All rights reserved. | Licensed & Insured Contractor
          </p>
        </div>
      </div>
    </footer>
  )
}
