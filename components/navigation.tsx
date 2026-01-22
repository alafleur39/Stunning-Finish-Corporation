"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoModalOpen, setLogoModalOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Dialog open={logoModalOpen} onOpenChange={setLogoModalOpen}>
              <DialogTrigger asChild>
                <button className="cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/stunning-finish-logo.png"
                    alt="Stunning Finish Corp Logo"
                    width={40}
                    height={40}
                    className="object-contain"
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
                </div>
              </DialogContent>
            </Dialog>
            <Link href="/" className="font-bold text-xl text-slate-900 hover:text-orange-600 transition-colors">
              Stunning Finish Corp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  pathname === item.href ? "text-orange-600" : "text-slate-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-orange-600 hover:bg-orange-700">
              <a href="tel:9175602977">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                    pathname === item.href ? "text-orange-600" : "text-slate-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild size="sm" className="bg-orange-600 hover:bg-orange-700 w-fit">
                <a href="tel:9175602977">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
