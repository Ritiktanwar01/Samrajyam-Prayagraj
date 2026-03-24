import Navigation from '@/components/navigation';
import  Footer  from '@/components/footer';
import { Award, Target, Eye, Users } from 'lucide-react';

export const metadata = {
  title: 'About Us - Aadharshila Group | Real Estate Company',
  description: 'Learn about Aadharshila Group, a leading real estate developer with a vision for sustainable and affordable housing.',
};

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Aadharshila Group</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building dreams, creating communities, and transforming lives through exceptional real estate development.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Aadharshila Group is one of the most trusted and innovative real estate developers in India. With over two decades of excellence, 
                we have successfully delivered more than 50+ residential projects across major cities including Raipur, Hyderabad, Bangalore, Mumbai, and Pune.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We specialize in creating premium residential developments that combine modern architecture with sustainable living practices. 
                Our commitment to quality, transparency, and customer satisfaction has made us a preferred choice for homebuyers across India.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">50+ Completed Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">10,000+ Happy Families</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">25+ Years of Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">5 Major Cities Presence</span>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <img src="/placeholder.svg?height=400&width=600" alt="Aadharshila Group" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-secondary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center order-2 md:order-1">
              <img src="/placeholder.svg?height=400&width=600" alt="Our Mission" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To develop sustainable, affordable, and high-quality residential projects that enhance the quality of life for our customers. 
                We are committed to building homes that are not just structures but communities where families can grow, thrive, and create lasting memories.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to make quality housing accessible to everyone by combining innovative designs with cost-effective construction methods, 
                without compromising on excellence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Deliver projects on time and within budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Maintain highest standards of quality and safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Ensure customer satisfaction and transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To become the most respected and preferred real estate developer in India by creating innovative, sustainable, and 
                community-centric residential developments.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We envision a future where every Indian family has access to well-designed, affordable, and sustainable homes in thriving communities. 
                Our goal is to expand our presence to more cities and create a positive impact on millions of lives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-1">100+</h3>
                  <p className="text-sm text-muted-foreground">Projects by 2030</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-1">25K+</h3>
                  <p className="text-sm text-muted-foreground">Happy Families</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground">Major Cities</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-1">50,000+</h3>
                  <p className="text-sm text-muted-foreground">Homes Built</p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <img src="/placeholder.svg?height=400&width=600" alt="Our Vision" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We believe in transparency, honesty, and ethical practices in all our dealings.',
                icon: '✓',
              },
              {
                title: 'Quality',
                description: 'Excellence is not a destination but a journey. We never compromise on quality.',
                icon: '★',
              },
              {
                title: 'Innovation',
                description: 'We constantly innovate to create better homes and sustainable living solutions.',
                icon: '⚡',
              },
              {
                title: 'Community',
                description: 'We build communities, not just buildings. We create spaces where people connect.',
                icon: '👥',
              },
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
