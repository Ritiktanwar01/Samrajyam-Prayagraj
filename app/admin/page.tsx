'use client'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { LayoutGrid, MessageSquare, Mail, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    pendingSiteVisits: 0,
    pendingContacts: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setLoading(true)
      const [projects, visits, queries] = await Promise.all([
        api.getProjects(),
        api.getSiteVisits(),
        api.getContactQueries(),
      ])

      const pendingVisits = visits.filter((v: any) => v.status === 'new').length
      const pendingQueries = queries.filter((q: any) => q.status === 'new').length

      setStats({
        totalProjects: projects.length,
        pendingSiteVisits: pendingVisits,
        pendingContacts: pendingQueries,
      })
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg border border-border p-6 hover:border-accent/50 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Total Projects</p>
              <p className="text-3xl font-bold text-primary">{stats.totalProjects}</p>
            </div>
            <LayoutGrid className="w-10 h-10 text-accent opacity-60" />
          </div>
          <Link href="/admin/projects" className="block">
            <Button variant="outline" className="w-full text-accent hover:bg-accent/10">
              Manage Projects
            </Button>
          </Link>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 hover:border-accent/50 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Pending Site Visits</p>
              <p className="text-3xl font-bold text-primary">{stats.pendingSiteVisits}</p>
            </div>
            <MessageSquare className="w-10 h-10 text-accent opacity-60" />
          </div>
          <Link href="/admin/site-visits" className="block">
            <Button variant="outline" className="w-full text-accent hover:bg-accent/10">
              View Site Visits
            </Button>
          </Link>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 hover:border-accent/50 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Pending Contacts</p>
              <p className="text-3xl font-bold text-primary">{stats.pendingContacts}</p>
            </div>
            <Mail className="w-10 h-10 text-accent opacity-60" />
          </div>
          <Link href="/admin/contact-queries" className="block">
            <Button variant="outline" className="w-full text-accent hover:bg-accent/10">
              View Contacts
            </Button>
          </Link>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border p-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Welcome to Admin Panel</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Manage your Samrajyam Prayagraj projects, track site visit inquiries, and respond to customer contacts all from one place.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/admin/projects">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
              <LayoutGrid className="w-4 h-4 mr-2" />
              Manage Projects
            </Button>
          </Link>
          <Link href="/admin/site-visits">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              View Site Visits
            </Button>
          </Link>
          <Link href="/admin/contact-queries">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
              <Mail className="w-4 h-4 mr-2" />
              View Contacts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
