'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    title: 'Pool side view',
    description: 'Modern architectural design of our flagship towers',
    image:"/images/view1.webp"
  },
  {
    id: 2,
    title: 'Landscape & Green Spaces',
    description: 'Beautiful landscaped gardens and recreational areas',
    image:"/images/view2.webp"
  },
  {
    id: 3,
    title: 'Swimming Pool Complex',
    description: 'World-class swimming pool and aquatic facilities',
    image:"/images/view3.webp"
  },
  {
    id: 4,
    title: 'Gymnasium & Fitness Center',
    description: 'State-of-the-art fitness and wellness facilities',
    image:"/images/view4.webp"
  },
  {
    id: 5,
    title: 'Clubhouse & Recreation',
    description: 'Premium clubhouse with entertainment facilities',
    image:"/images/view5.webp"
  },
  {
    id: 6,
    title: 'Evening Ambiance',
    description: 'Spectacular evening view of the project',
    image:"/images/view6.webp"
  }
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Project Gallery
          </h2>
          <p className="text-base md:text-lg text-white max-w-3xl mx-auto">
            Take a visual tour of Samrajyam's stunning architecture and world-class amenities
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-xl border border-border mb-8">
          {/* Image Container */}
          <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              {/* Mock Image - using placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/5 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    <img src={galleryImages[currentIndex].image} alt={galleryImages[currentIndex].title} loading="lazy" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {galleryImages[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {galleryImages[currentIndex].description}
                  </p>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto bg-white/80 hover:bg-white text-foreground rounded-full p-2 transition-all shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto bg-white/80 hover:bg-white text-foreground rounded-full p-2 transition-all shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Image Title and Description Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{galleryImages[currentIndex].title}</h3>
            <p className="text-sm text-gray-200">{galleryImages[currentIndex].description}</p>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-3 overflow-x-auto pb-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
                index === currentIndex
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary'
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-2xl rounded-[6px]">
                
                 <Image src={image.image} alt={image.title} width={80} height={80} className="w-full h-full object-cover rounded-[6px] mx-2" />
                
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
