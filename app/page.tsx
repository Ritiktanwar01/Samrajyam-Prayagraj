'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Highlights from '@/components/highlights'
import Gallery from '@/components/gallery'
import Amenities from '@/components/amenities'
import SiteVisitForm from '@/components/site-visit-form'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Building2, Users, MapPin, ChevronDown, Phone } from 'lucide-react'
import Image from 'next/image'
import Search from '@/components/Search'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Project Image */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full bg-gradient-to-r from-primary to-primary/80 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* <Image 
            src="/images/view.jpeg" 
            alt="Samrajyam Prayagraj Project" 
            width={1200}
            height={700}
            className="object-cover opacity-40 w-full h-full"
            priority
          /> */}
          <video src="/videos/video.mp4" autoPlay muted className="object-cover opacity-40 w-full h-full"></video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Welcome to <span className="text-accent">Samrajyam Prayagraj</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Iconic residential towers with world-class amenities in the heart of Prayagraj
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#site-visit-form">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                  Schedule a Visit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 w-full sm:w-auto">
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
          <ChevronDown className="w-6 h-6" />
        </div> */}
      </section>

      <Search />

      <Button onClick={()=> {window.location.href= "tel:9109107012"}} className='flex items-center justify-center w-16 h-16 fixed right-2 top-[70%] bg-accent'>
        <Phone  size={88} width={22} height={22} className='size-6'/>
      </Button>

      {/* Project Highlights Section */}
      <Highlights />

      {/* Project Gallery Section */}
      <Gallery />

      {/* World-Class Amenities Section */}
      <Amenities />

      {/* About Aadharshila Group */}
      <section className="py-12 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/company people.jpg" 
                  alt="Aadharshila Group" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Aadharshila Group</h2>
              <p className="text-base text-white md:text-lg text-muted-foreground mb-6">
                Aadharshila Group is a premier real estate developer committed to creating exceptional living experiences across India's major cities. With over 25 years of expertise, we have successfully delivered 50+ projects for more than 10,000 families.
              </p>
              <p className="text-base text-white md:text-lg text-muted-foreground mb-8">
                We blend modern architecture with sustainable practices, ensuring every project reflects our commitment to quality, innovation, and customer satisfaction.
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Projects */}
      <section className="py-12 md:py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Explore Our Projects</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our diverse portfolio of residential developments across India, each designed with excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-card rounded-lg border border-border p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 md:w-14 md:h-14 text-accent mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">50+ Projects</h3>
              <p className="text-sm md:text-base text-muted-foreground">Completed and ongoing residential developments</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 md:w-14 md:h-14 text-accent mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">10+ Cities</h3>
              <p className="text-sm md:text-base text-muted-foreground">Presence across India's major metropolitan areas</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 md:w-14 md:h-14 text-accent mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">10,000+ Families</h3>
              <p className="text-sm md:text-base text-muted-foreground">Happy residents living in our communities</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Site Visit Form Before Footer */}
      <section id="site-visit-form" className="py-12 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Schedule Your Site Visit</h2>
            <p className="text-base md:text-lg text-white">
              Experience the luxury and lifestyle of Samrajyam Prayagraj. Our team will be delighted to guide you through the project.
            </p>
          </div>
          <SiteVisitForm />
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  )
}
