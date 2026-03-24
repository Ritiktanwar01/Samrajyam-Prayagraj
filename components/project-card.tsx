import Link from 'next/link';
import { Project } from '@/lib/mock-data';
import { MapPin, Building2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{project.name}</h3>

        {/* Location */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-muted-foreground">{project.location}</p>
            <p className="text-xs text-muted-foreground">{project.city}</p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex items-center gap-2 mb-4 text-sm">
          <Building2 className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{project.totalUnits} Units</span>
          <span className="text-muted-foreground">•</span>
          <Tag className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">From {minPrice}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

        {/* Bedrooms */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.bedrooms.slice(0, 3).map((bedroom) => (
            <span key={bedroom} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
              {bedroom}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <Link href={`/projects/${project.id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90">View Details</Button>
        </Link>
      </div>
    </div>
  );
}
