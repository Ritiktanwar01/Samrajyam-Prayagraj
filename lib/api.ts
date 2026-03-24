const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const api = {
  // Auth
  login: async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
  },

  logout: async () => {
    const res = await fetch(`${API_URL}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    return res.json();
  },

  getMe: async () => {
    const res = await fetch(`${API_URL}/api/auth/me`, {
      credentials: 'include',
    });
    if (!res.ok) return null;
    return res.json();
  },

  // Projects
  getProjects: async () => {
    const res = await fetch(`${API_URL}/api/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  },

  getProject: async (id: string) => {
    const res = await fetch(`${API_URL}/api/projects/${id}`);
    if (!res.ok) throw new Error('Failed to fetch project');
    return res.json();
  },

  searchProjectsByCity: async (city: string) => {
    const res = await fetch(`${API_URL}/api/projects/city/${city}`);
    if (!res.ok) throw new Error('Failed to search projects');
    return res.json();
  },

  createProject: async (data: any) => {
    const res = await fetch(`${API_URL}/api/projects`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create project');
    return res.json();
  },

  updateProject: async (id: string, data: any) => {
    const res = await fetch(`${API_URL}/api/projects/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update project');
    return res.json();
  },

  deleteProject: async (id: string) => {
    const res = await fetch(`${API_URL}/api/projects/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Failed to delete project');
    return res.json();
  },

  // Site Visits
  createSiteVisit: async (data: any) => {
    const res = await fetch(`${API_URL}/api/site-visits`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to book site visit');
    return res.json();
  },

  getSiteVisits: async () => {
    const res = await fetch(`${API_URL}/api/site-visits`, {
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Failed to fetch site visits');
    return res.json();
  },

  updateSiteVisitStatus: async (id: string, status: string) => {
    const res = await fetch(`${API_URL}/api/site-visits/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error('Failed to update status');
    return res.json();
  },

  replySiteVisit: async (id: string, message: string) => {
    const res = await fetch(`${API_URL}/api/site-visits/${id}/reply`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error('Failed to send reply');
    return res.json();
  },

  // Contact
  sendContact: async (data: any) => {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to send contact');
    return res.json();
  },

  getContactQueries: async () => {
    const res = await fetch(`${API_URL}/api/contact`, {
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Failed to fetch queries');
    return res.json();
  },

  updateContactQuery: async (id: string, status: string) => {
    const res = await fetch(`${API_URL}/api/contact/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error('Failed to update query');
    return res.json();
  },

  replyContactQuery: async (id: string, message: string) => {
    const res = await fetch(`${API_URL}/api/contact/${id}/reply`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error('Failed to send reply');
    return res.json();
  },

  // Upload
  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(`${API_URL}/api/upload/image`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    if (!res.ok) throw new Error('Failed to upload image');
    return res.json();
  },

  uploadBrochure: async (file: File) => {
    const formData = new FormData();
    formData.append('brochure', file);
    const res = await fetch(`${API_URL}/api/upload/brochure`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    if (!res.ok) throw new Error('Failed to upload brochure');
    return res.json();
  },
};
