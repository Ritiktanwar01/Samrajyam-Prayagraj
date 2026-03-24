'use client'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, X, Loader2 } from 'lucide-react'

export default function AdminContactQueries() {
  const { toast } = useToast()
  const [queries, setQueries] = useState<any[]>([])
  const [selectedQuery, setSelectedQuery] = useState<any | null>(null)
  const [replyMessage, setReplyMessage] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchQueries()
  }, [])

  const fetchQueries = async () => {
    try {
      setLoading(true)
      const data = await api.getContactQueries()
      setQueries(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch contact queries',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  let filteredQueries = filterStatus === 'all' ? queries : queries.filter((q) => q.status === filterStatus)

  if (searchTerm) {
    filteredQueries = filteredQueries.filter(
      (q) =>
        q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const handleReply = async () => {
    if (!selectedQuery || !replyMessage.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a message',
        variant: 'destructive',
      })
      return
    }

    try {
      setLoading(true)
      await api.replyContactQuery(selectedQuery._id, replyMessage)
      
      setReplyMessage('')
      toast({
        title: 'Success',
        description: 'Reply sent successfully!',
      })
      
      fetchQueries()
      setSelectedQuery(null)
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

  const handleStatusChange = async (queryId: string, newStatus: string) => {
    try {
      await api.updateContactQuery(queryId, newStatus)
      toast({
        title: 'Success',
        description: `Status updated to ${newStatus}!`,
      })
      fetchQueries()
      if (selectedQuery?._id === queryId) {
        setSelectedQuery({ ...selectedQuery, status: newStatus })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update status',
        variant: 'destructive',
      })
    }
  }

  const statusColors = {
    new: 'bg-red-100 text-red-800',
    replied: 'bg-yellow-100 text-yellow-800',
    resolved: 'bg-green-100 text-green-800',
  }

  if (loading && queries.length === 0) {
    return <div className="flex items-center justify-center py-12"><Loader2 className="w-6 h-6 animate-spin" /></div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Contact Queries</h1>
        <div className="flex gap-2">
          {['all', 'new', 'replied', 'resolved'].map((status) => (
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

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search by name, email, or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Queries List */}
        <div className="lg:col-span-2 space-y-3">
          {filteredQueries.length === 0 ? (
            <div className="bg-card rounded-lg border border-border p-8 text-center text-muted-foreground">
              No queries found
            </div>
          ) : (
            filteredQueries.map((query) => (
              <div
                key={query._id}
                onClick={() => setSelectedQuery(query)}
                className={`bg-card rounded-lg border cursor-pointer transition-all p-4 ${
                  selectedQuery?._id === query._id
                    ? 'border-accent shadow-lg'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-primary">{query.subject}</h3>
                    <p className="text-sm text-muted-foreground">{query.name}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    query.status === 'new' ? 'bg-red-100 text-red-800' :
                    query.status === 'replied' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {query.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{query.email}</p>
                <p className="text-sm text-foreground line-clamp-2 bg-secondary/20 p-2 rounded">{query.message}</p>
              </div>
            ))
          )}
        </div>

        {/* Detail Panel */}
        {selectedQuery && (
          <div className="bg-card rounded-lg border border-border p-6 h-fit sticky top-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-primary">Details</h2>
              <button onClick={() => setSelectedQuery(null)} className="p-1 hover:bg-secondary rounded">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Subject</p>
                <p className="text-foreground">{selectedQuery.subject}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">From</p>
                <p className="text-foreground">{selectedQuery.name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Email</p>
                <p className="text-foreground break-all">{selectedQuery.email}</p>
              </div>
              {selectedQuery.phone && (
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Phone</p>
                  <p className="text-foreground">{selectedQuery.phone}</p>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Status</p>
                <select
                  value={selectedQuery.status}
                  onChange={(e) => handleStatusChange(selectedQuery._id, e.target.value)}
                  className="w-full border border-border rounded px-2 py-1 mt-1"
                >
                  <option value="new">New</option>
                  <option value="replied">Replied</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6 border-t border-border pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Message</p>
              <div className="bg-secondary/20 p-3 rounded text-sm text-foreground mb-4 max-h-32 overflow-y-auto">
                {selectedQuery.message}
              </div>
            </div>

            {/* Replies */}
            <div className="mb-6 border-t border-border pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">Replies</p>
              <div className="space-y-3 max-h-48 overflow-y-auto mb-4">
                {selectedQuery.replies && selectedQuery.replies.length > 0 ? (
                  selectedQuery.replies.map((reply: any, idx: number) => (
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
                      <Mail className="w-4 h-4 mr-2" />
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
