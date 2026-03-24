'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Download, FileText, MapPin, Home, Zap, Shield, Leaf } from 'lucide-react'
import Link from 'next/link'
import { useToast } from '@/hooks/use-toast'

const floorPlans = [
  {
    id: 1,
    name: '2 BHK',
    size: '1,050 sq.ft',
    price: '45 - 55 Lakhs',
    features: ['Living Room', 'Kitchen', '2 Bedrooms', '2 Bathrooms', 'Balcony', 'Utility Area']
  },
  {
    id: 2,
    name: '3 BHK',
    size: '1,500 sq.ft',
    price: '65 - 80 Lakhs',
    features: ['Living Room', 'Kitchen', '3 Bedrooms', '3 Bathrooms', '2 Balconies', 'Study Area']
  },
  {
    id: 3,
    name: '4 BHK',
    size: '2,000 sq.ft',
    price: '90 - 110 Lakhs',
    features: ['Living Room', 'Kitchen', '4 Bedrooms', '4 Bathrooms', 'Large Balconies', 'Pooja Room', 'Servant Room']
  }
]

const faqs = [
  {
    question: 'What is the project timeline?',
    answer: 'Samrajyam is currently under construction with an expected completion of 3-4 years. Detailed timelines for each tower will be provided upon booking.'
  },
  {
    question: 'What are the payment options available?',
    answer: 'We offer flexible payment plans with options for cash, EMI, and bank financing. Customized schemes are available based on your requirements.'
  },
  {
    question: 'Is the project RERA registered?',
    answer: 'Yes, Samrajyam is fully registered with the Real Estate Regulatory Authority ensuring transparency and buyer protection.'
  },
  {
    question: 'What are the parking facilities?',
    answer: 'Each apartment comes with dedicated parking slots. Additional parking spaces are available for purchase. A modern parking management system ensures efficient utilization.'
  },
  {
    question: 'Are there any resale restrictions?',
    answer: 'No, properties can be freely resold after completion. Samrajyam is an open development with no occupation certificate restrictions.'
  },
  {
    question: 'What about maintenance charges?',
    answer: 'Maintenance charges are very competitive at ₹5-7 per sq.ft. This covers common area maintenance, security, utilities, and amenity operations.'
  }
]

export default function BrochurePage() {
  const { toast } = useToast()

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Download",
      description: "Your brochure download will start shortly. Check your downloads folder.",
    })
    // Simulate download
    const link = document.createElement('a')
    link.href = '/Samrajyam-brochure.pdf'
    link.download = '/Samrajyam-brochure.pdf'
    link.click()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Samrajyam Project Brochure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete information about your dream residential destination in Raipur
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Download Complete Brochure</h2>
              <p className="text-muted-foreground">Get detailed information about floor plans, amenities, pricing, and more</p>
            </div>
            <Button 
              onClick={handleDownloadBrochure}
              className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 whitespace-nowrap"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Project Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 border border-border">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Location</h3>
              <p className="text-muted-foreground">Bilaspur Road, Raipur (C.G.), near Hotel Paradise & DRM Office</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 border border-border">
              <Home className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Total Built-up Area</h3>
              <p className="text-muted-foreground">Over 15 lakh sq.ft. across 7 iconic towers</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 border border-border">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Total Units</h3>
              <p className="text-muted-foreground">2000+ premium residential apartments</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h4 className="font-semibold text-foreground mb-2">7 Iconic Towers</h4>
              <p className="text-muted-foreground text-sm">Strategically designed towers creating a landmark skyline in Raipur</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h4 className="font-semibold text-foreground mb-2">Prime Location</h4>
              <p className="text-muted-foreground text-sm">Close to Railway Station, Shopping Districts, and major landmarks</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h4 className="font-semibold text-foreground mb-2">50+ Amenities</h4>
              <p className="text-muted-foreground text-sm">World-class facilities for modern lifestyle and wellness</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h4 className="font-semibold text-foreground mb-2">Eco-Friendly Design</h4>
              <p className="text-muted-foreground text-sm">Sustainable living with green spaces and eco-initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Available Floor Plans</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">Choose from our range of beautifully designed floor plans</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {floorPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.size}</p>
                  <p className="text-lg font-semibold text-foreground mt-2">{plan.price}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-sm text-foreground">Features:</p>
                  <ul className="space-y-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="/#hero"
                  className="block text-center bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Schedule Visit
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Samrajyam */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Why Choose Samrajyam?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Safety & Security</h3>
                <p className="text-muted-foreground text-sm">24/7 security, CCTV surveillance, and advanced firefighting systems for complete peace of mind</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Eco-Friendly</h3>
                <p className="text-muted-foreground text-sm">Sustainable design with rainwater harvesting, green spaces, and energy-efficient features</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Modern Amenities</h3>
                <p className="text-muted-foreground text-sm">Gym, yoga room, clubhouse, pool, and 50+ premium amenities for a lifestyle upgrade</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Prime Location</h3>
                <p className="text-muted-foreground text-sm">Close to railway station, shopping districts, hospitals, and all major city landmarks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg border border-border p-6 cursor-pointer hover:border-primary/30 transition-colors">
                <summary className="flex items-start justify-between font-semibold text-foreground cursor-pointer">
                  <span>{faq.question}</span>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Samrajyam Your Home?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a personalized site visit and discover why thousands of families choose Samrajyam
          </p>
          <a
            href="/#hero"
            className="inline-block bg-white hover:bg-gray-100 text-primary font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Schedule Your Visit Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
