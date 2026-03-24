'use client'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Trash2, Edit2, Plus, Loader2 } from 'lucide-react'

interface ProjectFormData {
  name: string
  description: string
  city: string
  location: string
  status: 'upcoming' | 'ongoing' | 'completed'
  image: string
  brochure: string
  builtUpArea: string
  totalUnits: number
  possession: string
  priceRange: string
  highlights: string[]
  amenities: string[]
  features: string[]
}

export default function AdminProjects() {
  const { toast } = useToast()
  const [projects, setProjects] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<ProjectFormData>({
    name: '',
    description: '',
    city: '',
    location: '',
    status: 'ongoing',
    image: '',
    brochure: '',
    builtUpArea: '',
    totalUnits: 0,
    possession: '',
    priceRange: '',
    highlights: [],
    amenities: [],
    features: [],
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const data = await api.getProjects()
      setProjects(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch projects',
        variant: 'destructive',
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'totalUnits' ? parseInt(value) : value,
    }))
  }

  const handleArrayChange = (field: 'highlights' | 'amenities' | 'features', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value.split(',').map(item => item.trim()).filter(Boolean),
    }))
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fileType: 'image' | 'brochure') => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setLoading(true)
      const result = fileType === 'image' 
        ? await api.uploadImage(file)
        : await api.uploadBrochure(file)
      
      setFormData((prev) => ({
        ...prev,
        [fileType]: result.path,
      }))
      
      toast({
        title: 'Success',
        description: `${fileType} uploaded successfully`,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: `Failed to upload ${fileType}`,
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      city: '',
      location: '',
      status: 'ongoing',
      image: '',
      brochure: '',
      builtUpArea: '',
      totalUnits: 0,
      possession: '',
      priceRange: '',
      highlights: [],
      amenities: [],
      features: [],
    })
    setEditingId(null)
    setShowForm(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.city || !formData.priceRange) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)
    try {
      if (editingId) {
        await api.updateProject(editingId, formData)
        toast({
          title: 'Success',
          description: 'Project updated successfully!',
        })
      } else {
        await api.createProject(formData)
        toast({
          title: 'Success',
          description: 'Project created successfully!',
        })
      }
      resetForm()
      fetchProjects()
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save project',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (project: any) => {
    setFormData({
      name: project.name,
      description: project.description || '',
      city: project.city,
      location: project.location || '',
      status: project.status,
      image: project.image || '',
      brochure: project.brochure || '',
      builtUpArea: project.builtUpArea || '',
      totalUnits: project.totalUnits || 0,
      possession: project.possession || '',
      priceRange: project.priceRange || '',
      highlights: project.highlights || [],
      amenities: project.amenities || [],
      features: project.features || [],
    })
    setEditingId(project._id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return

    try {
      await api.deleteProject(id)
      toast({
        title: 'Success',
        description: 'Project deleted successfully!',
      })
      fetchProjects()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete project',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Projects Management</h1>
        <Button 
          onClick={() => setShowForm(!showForm)} 
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          <h2 className="text-xl font-bold text-primary">{editingId ? 'Edit Project' : 'New Project'}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Project Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="City *"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              <Input
                placeholder="Price Range (e.g., 45 Lac - 1 Cr) *"
                name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Built-up Area"
                name="builtUpArea"
                value={formData.builtUpArea}
                onChange={handleChange}
              />
              <Input
                type="number"
                placeholder="Total Units"
                name="totalUnits"
                value={formData.totalUnits}
                onChange={handleChange}
              />
              <Input
                type="date"
                placeholder="Possession Date"
                name="possession"
                value={formData.possession}
                onChange={handleChange}
              />
            </div>

            <Textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-3 py-2"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Project Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'image')}
                  disabled={loading}
                  className="w-full"
                />
                {formData.image && <p className="text-xs text-green-600 mt-1">✓ Image uploaded</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Brochure PDF</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileUpload(e, 'brochure')}
                  disabled={loading}
                  className="w-full"
                />
                {formData.brochure && <p className="text-xs text-green-600 mt-1">✓ Brochure uploaded</p>}
              </div>
            </div>

            <Textarea
              placeholder="Highlights (comma-separated)"
              value={formData.highlights.join(', ')}
              onChange={(e) => handleArrayChange('highlights', e.target.value)}
              rows={2}
            />

            <Textarea
              placeholder="Amenities (comma-separated)"
              value={formData.amenities.join(', ')}
              onChange={(e) => handleArrayChange('amenities', e.target.value)}
              rows={2}
            />

            <Textarea
              placeholder="Features (comma-separated)"
              value={formData.features.join(', ')}
              onChange={(e) => handleArrayChange('features', e.target.value)}
              rows={2}
            />

            <div className="flex gap-2">
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-white flex-1"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Project'
                )}
              </Button>
              <Button 
                type="button"
                onClick={resetForm}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project: any) => (
          <div key={project._id} className="bg-card rounded-lg border border-border p-4 space-y-2">
            <h3 className="font-bold text-primary">{project.name}</h3>
            <p className="text-sm text-muted-foreground">{project.city} • {project.status}</p>
            <p className="text-xs text-muted-foreground">{project.priceRange}</p>
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => handleEdit(project)}
                size="sm"
                variant="outline"
                className="flex-1"
              >
                <Edit2 className="w-3 h-3 mr-1" />
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(project._id)}
                size="sm"
                variant="destructive"
                className="flex-1"
              >
                <Trash2 className="w-3 h-3 mr-1" />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && !showForm && (
        <div className="text-center py-12 bg-card rounded-lg border border-border">
          <p className="text-muted-foreground mb-4">No projects yet</p>
          <Button onClick={() => setShowForm(true)} className="bg-accent hover:bg-accent/90">
            Create First Project
          </Button>
        </div>
      )}
    </div>
  )
}
