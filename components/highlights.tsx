'use client'

import { MapPin, Building2, Home, Zap, Leaf, Shield, Users, Lightbulb } from 'lucide-react'

const highlights = [
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Jaistambh Chowk area with easy access to railway station, shopping districts, and major landmarks.'
  },
  {
    icon: Building2,
    title: '7 Iconic Towers',
    description: 'Grand development creating a landmark skyline in the heart of Prayagraj with modern architecture.'
  },
  {
    icon: Home,
    title: 'Premium Apartments',
    description: '2 BHK, 3 BHK, and 4 BHK spacious units with world-class finishes and modern layouts.'
  },
  {
    icon: Zap,
    title: '50+ Amenities',
    description: 'Swimming pool, gym, yoga center, clubhouse, kids play area, gardens, and more.'
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Advanced CCTV, firefighting systems, trained personnel, and secure parking facilities.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Design',
    description: 'Rainwater harvesting, solar panels, waste management, and green spaces throughout.'
  },
  {
    icon: Users,
    title: 'Community Living',
    description: 'Designed for families with dedicated play areas, community halls, and social spaces.'
  },
  {
    icon: Lightbulb,
    title: 'Quality Assurance',
    description: 'Aadharshila Group\'s commitment to excellence, quality craftsmanship, and customer satisfaction.'
  }
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Project Highlights
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Samrajyam Prayagraj the most sought-after residential destination in the region
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="group bg-card rounded-lg border border-border p-6 md:p-8 hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
