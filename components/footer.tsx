'use client'

import Link from 'next/link'
import { Building2, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl">Samrajyam</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your dream home awaits at Samrajyam - Raipur's most iconic residential landmark.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <button
                  key={social}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center text-xs font-bold"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="/#highlights" className="hover:text-primary transition-colors">Highlights</a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-primary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="/brochure" className="hover:text-primary transition-colors">Brochure</a>
              </li>
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Project Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Bilaspur Road, Raipur (C.G.)</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>+91-XXX-XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>info@samrajyam.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold text-white mb-4">Office Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Monday - Friday</p>
                  <p className="text-gray-400">10:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Saturday - Sunday</p>
                  <p className="text-gray-400">11:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
            </div>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded text-white text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 border-t border-white/10 pt-6">
            <p>© {currentYear} Samrajyam by Aadharshila Group. All rights reserved.</p>
            <p className="mt-2">Redefining Luxury Living in Raipur</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
