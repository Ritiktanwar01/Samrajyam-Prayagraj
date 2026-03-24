'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/navigation';
import  Footer  from '@/components/footer';
import SiteVisitForm from '@/components/site-visit-form';
import { mockProjects, Project } from '@/lib/mock-data';
import { storage } from '@/lib/storage';
import { MapPin, Building2, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Initialize storage with mock data
    storage.initializeWithMockData(mockProjects, [], []);
    
    // Get all projects from storage
    const allProjects = storage.getProjects();
    const foundProject = allProjects.find((p) => p.id === projectId);
    setProject(foundProject || null);
  }, [projectId]);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navigation />
        <section className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
            <Link href="/projects">
              <Button className="bg-primary hover:bg-primary/90">Back to Projects</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const statusColors = {
    upcoming: 'bg-yellow-100 text-yellow-800',
    ongoing: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  const minPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(project.priceRange.min);

  const maxPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(project.priceRange.max);

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-secondary/5 py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/projects" className="text-primary hover:underline">
              Projects
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{project.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section with Image Gallery */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Gallery */}
            <div className="md:col-span-2">
              {/* Main Image */}
              <div className="relative bg-muted rounded-lg overflow-hidden mb-4 h-96">
                <img
                  src={project.gallery[currentImageIndex]}
                  alt={`${project.name} gallery`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      currentImageIndex === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info & Form */}
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{project.name}</h1>

              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">{project.location}</p>
                  <p className="text-muted-foreground text-sm">{project.city}</p>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                <p className="text-2xl font-bold text-primary">
                  {minPrice} - {maxPrice}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <p className="font-semibold text-foreground capitalize">{project.status}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Total Units</p>
                  <p className="font-semibold text-foreground">{project.totalUnits}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Built-up Area</p>
                  <p className="font-semibold text-foreground">{project.builtUpArea}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Developer</p>
                  <p className="font-semibold text-foreground">{project.developer}</p>
                </div>
              </div>

              {/* Site Visit Form */}
              <SiteVisitForm projectId={project.id} projectName={project.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Project Highlights</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Amenities</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {project.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 bg-card rounded-lg border border-border p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Specifications */}
      <section className="py-12 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Features & Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <p className="text-sm text-muted-foreground mb-1">{feature.name}</p>
                <p className="text-xl font-bold text-foreground">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Floor Plans & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.floorPlans.map((plan, index) => (
              <div key={index} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted overflow-hidden">
                  <img src={plan.image} alt={plan.type} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{plan.type}</h3>
                  <p className="text-primary font-semibold text-lg">{plan.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bedrooms */}
      <section className="py-12 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Available Units</h2>
          <div className="flex flex-wrap gap-4">
            {project.bedrooms.map((bedroom) => (
              <div key={bedroom} className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                {bedroom}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
