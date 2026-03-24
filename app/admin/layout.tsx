'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { api } from '@/lib/api';
import { Building2, Home, LayoutGrid, MessageSquare, Mail, LogOut } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await api.getMe();
        if (user) {
          setIsLoggedIn(true);
          setUserEmail(user.user.email);
        } else if (pathname !== '/admin/login') {
          router.push('/admin/login');
        }
      } catch {
        if (pathname !== '/admin/login') {
          router.push('/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [pathname, router]);

  const handleLogout = async () => {
    try {
      await api.logout();
      setIsLoggedIn(false);
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn && pathname === '/admin/login') {
    return children;
  }

  if (!isLoggedIn) {
    return null;
  }

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: Home },
    { href: '/admin/projects', label: 'Projects', icon: LayoutGrid },
    { href: '/admin/site-visits', label: 'Site Visits', icon: MessageSquare },
    { href: '/admin/contact-queries', label: 'Contact Queries', icon: Mail },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Samrajyam" width={40} height={40} className="h-10 w-auto" />
            <div>
              <div className="font-bold text-lg text-primary">Samrajyam</div>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`mx-3 px-3 py-3 rounded-lg flex items-center gap-3 transition-all cursor-pointer mb-2 ${
                    isActive
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User Info & Logout */}
        <div className="p-4 border-t border-border space-y-3">
          {userEmail && (
            <div className="px-3 py-2 bg-secondary rounded-lg text-sm">
              <p className="text-xs text-muted-foreground mb-1">Logged in as</p>
              <p className="text-primary font-medium truncate">{userEmail}</p>
            </div>
          )}
          <Button 
            onClick={handleLogout} 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2 flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
}
