'use client';

import { storage } from './storage';

// Admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@samrajyam.com',
  password: 'admin123',
};

export const auth = {
  // Login
  login: (email: string, password: string): boolean => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      storage.setAdminSession(email);
      return true;
    }
    return false;
  },

  // Logout
  logout: (): void => {
    storage.clearAdminSession();
  },

  // Check if user is logged in
  isLoggedIn: (): boolean => {
    return storage.getAdminSession() !== null;
  },

  // Get current admin email
  getCurrentAdmin: (): string | null => {
    const session = storage.getAdminSession();
    return session?.email || null;
  },

  // Get admin credentials for demo purposes
  getAdminCredentials: () => ADMIN_CREDENTIALS,
};
