'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)


  const  redirectToWhatsApp = ({phoneNumber, message}:{phoneNumber: string, message: string}) => {
  // phoneNumber should be in international format without '+' or spaces
  // Example: "919876543210" for India
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}

  return (
    <nav className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/logo.png" alt="Samrajyam Prayagraj" width={40} height={40} className="h-10 w-auto rounded" />
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-primary">Samrajyam</div>
              <div className="text-xs text-muted-foreground">Prayagraj</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/projects" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Projects
            </Link>
            <Link href="/brochure" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Brochure
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
  
            <Button onClick={() => redirectToWhatsApp({ phoneNumber: '+919876543210', message: 'Hello, I would like to know more about the Samrajyam project.' })} className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
              <MessageCircle className='text-white size-5'/>
              <span className="ml-2 text-white">Let's Connect</span>
            </Button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card pb-4">
            <div className="px-4 pt-4 space-y-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent hover:bg-secondary px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent hover:bg-secondary px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              <Link href="/projects" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent hover:bg-secondary px-3 py-2 rounded-md text-base font-medium transition-colors">
                Projects
              </Link>
              <Link href="/brochure" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent hover:bg-secondary px-3 py-2 rounded-md text-base font-medium transition-colors">
                Brochure
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent hover:bg-secondary px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-2">
                Schedule Visit
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
