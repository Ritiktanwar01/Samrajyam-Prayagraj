'use client';

import { Project, SiteVisit, ContactQuery } from './mock-data';

const STORAGE_KEYS = {
  PROJECTS: 'samrajyam_projects',
  SITE_VISITS: 'samrajyam_site_visits',
  CONTACT_QUERIES: 'samrajyam_contact_queries',
  ADMIN_SESSION: 'samrajyam_admin_session',
};

export const storage = {
  // Projects
  getProjects: (): Project[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return data ? JSON.parse(data) : [];
  },

  setProjects: (projects: Project[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  },

  addProject: (project: Project): void => {
    const projects = storage.getProjects();
    projects.push(project);
    storage.setProjects(projects);
  },

  updateProject: (id: string, updates: Partial<Project>): void => {
    const projects = storage.getProjects();
    const index = projects.findIndex((p) => p.id === id);
    if (index !== -1) {
      projects[index] = { ...projects[index], ...updates };
      storage.setProjects(projects);
    }
  },

  deleteProject: (id: string): void => {
    const projects = storage.getProjects();
    const filtered = projects.filter((p) => p.id !== id);
    storage.setProjects(filtered);
  },

  // Site Visits
  getSiteVisits: (): SiteVisit[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEYS.SITE_VISITS);
    return data ? JSON.parse(data) : [];
  },

  setSiteVisits: (visits: SiteVisit[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.SITE_VISITS, JSON.stringify(visits));
  },

  addSiteVisit: (visit: SiteVisit): void => {
    const visits = storage.getSiteVisits();
    visits.push(visit);
    storage.setSiteVisits(visits);
  },

  updateSiteVisit: (id: string, updates: Partial<SiteVisit>): void => {
    const visits = storage.getSiteVisits();
    const index = visits.findIndex((v) => v.id === id);
    if (index !== -1) {
      visits[index] = { ...visits[index], ...updates };
      storage.setSiteVisits(visits);
    }
  },

  // Contact Queries
  getContactQueries: (): ContactQuery[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEYS.CONTACT_QUERIES);
    return data ? JSON.parse(data) : [];
  },

  setContactQueries: (queries: ContactQuery[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.CONTACT_QUERIES, JSON.stringify(queries));
  },

  addContactQuery: (query: ContactQuery): void => {
    const queries = storage.getContactQueries();
    queries.push(query);
    storage.setContactQueries(queries);
  },

  updateContactQuery: (id: string, updates: Partial<ContactQuery>): void => {
    const queries = storage.getContactQueries();
    const index = queries.findIndex((q) => q.id === id);
    if (index !== -1) {
      queries[index] = { ...queries[index], ...updates };
      storage.setContactQueries(queries);
    }
  },

  // Admin Session
  setAdminSession: (email: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, JSON.stringify({ email, loginTime: new Date().toISOString() }));
  },

  getAdminSession: (): { email: string; loginTime: string } | null => {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION);
    return data ? JSON.parse(data) : null;
  },

  clearAdminSession: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
  },

  // Initialize with mock data if storage is empty
  initializeWithMockData: (mockProjects: Project[], mockVisits: SiteVisit[], mockQueries: ContactQuery[]): void => {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
      storage.setProjects(mockProjects);
    }
    if (!localStorage.getItem(STORAGE_KEYS.SITE_VISITS)) {
      storage.setSiteVisits(mockVisits);
    }
    if (!localStorage.getItem(STORAGE_KEYS.CONTACT_QUERIES)) {
      storage.setContactQueries(mockQueries);
    }
  },
};
