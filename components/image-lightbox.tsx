"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface ImageLightboxProps {
  src: string
  alt: string
  title?: string
  description?: string
  width?: number
  height?: number
}

export default function ImageLightbox({ src, alt, title, description, width = 800, height = 600 }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer relative group overflow-hidden">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={400}
            height={300}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="bg-white bg-opacity-0 group-hover:bg-opacity-70 p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-900"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-1 bg-slate-900 border-slate-800">
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 z-10"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-slate-900" />
          </button>
          <div className="flex items-center justify-center max-h-[80vh] overflow-hidden">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width}
              height={height}
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>
          {(title || description) && (
            <div className="bg-white p-4">
              {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
              {description && <p className="text-slate-600">{description}</p>}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
