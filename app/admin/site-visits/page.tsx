'use client'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { MessageCircle, X, Loader2 } from 'lucide-react'

export default function AdminSiteVisits() {
  const { toast } = useToast()
  const [visits, setVisits] = useState<any[]>([])
  const [selectedVisit, setSelectedVisit] = useState<any | null>(null)
  const [replyMessage, setReplyMessage] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSiteVisits()
  }, [])

  const fetchSiteVisits = async () => {
    try {
      setLoading(true)
      const data = await api.getSiteVisits()
      setVisits(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch site visits',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredVisits = filterStatus === 'all' 
    ? visits 
    : visits.filter((v) => v.status === filterStatus)

  const handleReply = async () => {
    if (!selectedVisit || !replyMessage.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a message',
        variant: 'destructive',
      })
      return
    }

    try {
      setLoading(true)
      await api.replySiteVisit(selectedVisit._id, replyMessage)
      
      setReplyMessage('')
      toast({
        title: 'Success',
        description: 'Reply sent successfully!',
      })
      
      fetchSiteVisits()
      setSelectedVisit(null)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send reply',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (visitId: string, newStatus: string) => {
    try {
      await api.updateSiteVisitStatus(visitId, newStatus)
      toast({
        title: 'Success',
        description: `Status updated to ${newStatus}!`,
      })
      fetchSiteVisits()
      if (selectedVisit?._id === visitId) {
        setSelectedVisit({ ...selectedVisit, status: newStatus })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update status',
        variant: 'destructive',
      })
    }
  }

  if (loading && visits.length === 0) {
    return <div className="flex items-center justify-center py-12"><Loader2 className="w-6 h-6 animate-spin" /></div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Site Visit Requests</h1>
        <div className="flex gap-2">
          {['all', 'new', 'contacted', 'visited', 'interested'].map((status) => (
            <Button
              key={status}
              onClick={() => setFilterStatus(status)}
              variant={filterStatus === status ? 'default' : 'outline'}
              className={filterStatus === status ? 'bg-accent text-accent-foreground' : ''}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visits List */}
        <div className="lg:col-span-2 space-y-3">
          {filteredVisits.length === 0 ? (
            <div className="bg-card rounded-lg border border-border p-8 text-center text-muted-foreground">
              No site visits found
            </div>
          ) : (
            filteredVisits.map((visit) => (
              <div
                key={visit._id}
                onClick={() => setSelectedVisit(visit)}
                className={`bg-card rounded-lg border cursor-pointer transition-all p-4 ${
                  selectedVisit?._id === visit._id
                    ? 'border-accent shadow-lg'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-primary">{visit.name}</h3>
                    <p className="text-sm text-muted-foreground">{visit.email}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    visit.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    visit.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                    visit.status === 'visited' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {visit.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{visit.phone}</p>
                {visit.message && (
                  <p className="text-sm text-foreground bg-secondary/20 p-2 rounded">{visit.message}</p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Detail Panel */}
        {selectedVisit && (
          <div className="bg-card rounded-lg border border-border p-6 h-fit sticky top-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-primary">Details</h2>
              <button onClick={() => setSelectedVisit(null)} className="p-1 hover:bg-secondary rounded">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Name</p>
                <p className="text-foreground">{selectedVisit.name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Email</p>
                <p className="text-foreground break-all">{selectedVisit.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Phone</p>
                <p className="text-foreground">{selectedVisit.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Visit Date</p>
                <p className="text-foreground">{new Date(selectedVisit.visitDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Status</p>
                <select
                  value={selectedVisit.status}
                  onChange={(e) => handleStatusChange(selectedVisit._id, e.target.value)}
                  className="w-full border border-border rounded px-2 py-1 mt-1"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="visited">Visited</option>
                  <option value="interested">Interested</option>
                </select>
              </div>
            </div>

            {/* Replies */}
            <div className="mb-6 border-t border-border pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">Replies</p>
              <div className="space-y-3 max-h-48 overflow-y-auto mb-4">
                {selectedVisit.replies && selectedVisit.replies.length > 0 ? (
                  selectedVisit.replies.map((reply: any, idx: number) => (
                    <div key={idx} className="bg-secondary/50 p-3 rounded text-sm">
                      <p className="text-foreground">{reply.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(reply.repliedAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-muted-foreground italic">No replies yet</p>
                )}
              </div>

              <div className="space-y-2">
                <Textarea
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  placeholder="Type your reply..."
                  rows={3}
                  className="text-sm"
                />
                <Button
                  onClick={handleReply}
                  disabled={!replyMessage.trim() || loading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Reply
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
