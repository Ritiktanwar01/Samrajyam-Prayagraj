'use client'

import { ShoppingCart, Dumbbell, Gamepad2, Book, Users, Leaf, Utensils, Car } from 'lucide-react'

const amenities = [
  {
    icon: ShoppingCart,
    title: 'Shopping Complex',
    description: 'Premium retail spaces with modern shopping experiences'
  },
  {
    icon: Dumbbell,
    title: 'Gymnasium',
    description: 'Fully equipped gym with professional trainers'
  },
  {
    icon: Leaf,
    title: 'Yoga & Meditation',
    description: 'Dedicated wellness spaces for yoga and mindfulness'
  },
  {
    icon: Gamepad2,
    title: 'Indoor Games',
    description: 'Multi-sport gaming and recreational facilities'
  },
  {
    icon: Book,
    title: 'Library',
    description: 'Quiet reading space with curated collection'
  },
  {
    icon: Users,
    title: 'Community Hall',
    description: 'Event space for celebrations and gatherings'
  },
  {
    icon: Utensils,
    title: 'Cafeteria',
    description: 'Multi-cuisine dining experience for residents'
  },
  {
    icon: Car,
    title: 'Ample Parking',
    description: 'Dedicated parking with modern management system'
  }
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            World-Class Amenities
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience premium living with our comprehensive range of facilities designed for your comfort and lifestyle
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="group bg-card rounded-lg border border-border p-6 md:p-8 hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="mb-4 inline-flex p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-2">
                  {amenity.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>

                {/* Accent Line */}
                <div className="mt-4 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-12 md:mt-16 bg-secondary rounded-lg border border-border p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Ready to Experience Luxury Living?
          </h3>
          <p className="text-muted-foreground mb-6">
            Schedule your personalized site visit and explore all that Samrajyam has to offer
          </p>
          <a
            href="/#site-visit-form"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Schedule Your Visit
          </a>
        </div> */}
      </div>
    </section>
  )
}
