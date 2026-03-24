'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import  Footer  from '@/components/footer';
import ProjectCard from '@/components/project-card';
import { mockProjects } from '@/lib/mock-data';
import { storage } from '@/lib/storage';
import { Project } from '@/lib/mock-data';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchCity, setSearchCity] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all');

  useEffect(() => {
    // Initialize storage with mock data on first load
    if (typeof window !== 'undefined') {
      storage.initializeWithMockData(mockProjects, [], []);
      const allProjects = storage.getProjects();
      setProjects(allProjects.length > 0 ? allProjects : mockProjects);
      setFilteredProjects(allProjects.length > 0 ? allProjects : mockProjects);
    }
  }, []);

  useEffect(() => {
    // Filter projects based on city and status
    let filtered = projects;

    if (searchCity.trim()) {
      filtered = filtered.filter((project) =>
        project.city.toLowerCase().includes(searchCity.toLowerCase()) ||
        project.name.toLowerCase().includes(searchCity.toLowerCase()) ||
        project.location.toLowerCase().includes(searchCity.toLowerCase())
      );
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter((project) => project.status === selectedStatus);
    }

    setFilteredProjects(filtered);
  }, [searchCity, selectedStatus, projects]);

  const cities = Array.from(new Set(projects.map((p) => p.city))).sort();

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Our Projects</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Explore our diverse portfolio of residential developments across India.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search by City */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Search by City or Project Name</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by city, name, or location..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filter by Status */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Project Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as any)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground"
              >
                <option value="all">All Projects</option>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Quick City Filter Chips */}
          <div className="mt-6">
            <p className="text-sm font-medium text-foreground mb-3">Quick Filter by City:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSearchCity('')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !searchCity
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                All Cities
              </button>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSearchCity(city)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    searchCity.toLowerCase() === city.toLowerCase()
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-8">
                Showing <span className="font-semibold">{filteredProjects.length}</span> of{' '}
                <span className="font-semibold">{projects.length}</span> projects
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-2">No projects found</p>
              <p className="text-muted-foreground">
                Try adjusting your search filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
