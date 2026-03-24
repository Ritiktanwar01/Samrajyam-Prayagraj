# Aadharshila Group - Real Estate Marketing Website

A comprehensive real estate marketing website with admin panel for managing projects, site visits, and inquiries.

## Features Overview

### 1. Public Website

#### Navigation
- **Home** - Landing page with hero form and project highlights
- **About** - Company information with mission & vision statements
- **Projects** - Searchable project listing with city-wise filters
- **Contact** - Contact form for general inquiries
- **Admin** - Admin panel login (password protected)

#### Home Page
- Hero section with site visit booking form
- Company statistics and key highlights
- About company preview with CTA to full about page
- Responsive design across all devices

#### About Page
- Company overview and history
- Mission section
- Vision section with future goals
- Core values display
- Detailed company information

#### Projects Page
- Grid view of all projects (10+ sample projects)
- Search by city, project name, or location
- Filter by project status (Upcoming, Ongoing, Completed)
- Quick filter chips for major cities
- Project cards with key information and "View Details" button

#### Project Details Page
- Full project information and gallery with carousel
- Project highlights section
- Amenities list
- Features and specifications
- Floor plans with pricing
- Available unit types
- Embedded site visit booking form

#### Contact Page
- Comprehensive contact form
- Business contact information
- Operating hours
- Location details
- Form submission saves to storage

### 2. Admin Panel

#### Login Page
- Email: `admin@samrajyam.com`
- Password: `admin123`
- Demo credentials displayed on login page
- Session managed with localStorage

#### Admin Dashboard
- Overview statistics
  - Total projects
  - Pending site visits
  - Pending contact queries
- Quick navigation to all management sections

#### Projects Management
- **View All Projects** - Table view of all projects with details
- **Add Project** - Form to create new residential project
- **Edit Project** - Inline form to modify project details
- **Delete Project** - Remove projects with confirmation
- **View Project** - Links to public project detail page
- Search and filter capabilities

#### Site Visits Management
- List of all site visit inquiries
- Filter by status (New, Contacted, Visited, Interested)
- View detailed inquiry information
- Send replies to inquiries
- Update inquiry status
- Reply history with dates and admin email
- Auto-changes status to "Contacted" when replying

#### Contact Queries Management
- List of all contact form submissions
- Search by name, email, or subject
- Filter by status (New, Replied, Resolved)
- View full inquiry details
- Send email replies
- Update query status
- Reply history and timestamps

### 3. Data Storage

All data is stored in **localStorage** for persistence across sessions:
- **Projects** - Residential development details
- **Site Visits** - Booking inquiries from home and project pages
- **Contact Queries** - General contact form submissions
- **Admin Session** - Login session management

### 4. Sample Data

#### 10+ Sample Projects
- **Samrajyam** (Raipur) - 7 towers, ongoing, ₹35L - 85L
- **Aadhar Heights** (Hyderabad) - 4 towers, ongoing, ₹40L - 75L
- **Shila Bangalore** (Bangalore) - 5 towers, completed, ₹50L - 120L
- **Grand Mumbai** (Mumbai) - 6 towers, ongoing, ₹70L - 150L
- **Pune Elegance** (Pune) - 3 towers, upcoming, ₹30L - 60L
- **Raipureal Prime** (Raipur) - 2 towers, completed, ₹20L - 35L
- **Hyderabad Metro** (Hyderabad) - 3 towers, completed, ₹35L - 65L
- **Bangalore Silicon** (Bangalore) - 4 towers, ongoing, ₹45L - 110L
- **Mumbai South** (Mumbai) - 5 towers, upcoming, ₹100L - 250L
- **Pune Premium** (Pune) - 4 towers, ongoing, ₹60L - 100L

Each project includes:
- Highlights (4 key features)
- Amenities (4 facilities)
- Floor plans with pricing
- Status and location info
- Price ranges and unit details

#### Sample Inquiries
- 2 pre-loaded site visit inquiries
- 2 pre-loaded contact queries
- Full reply history examples

## Technical Details

### Technology Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with custom theme
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **State Management**: React Hooks
- **Storage**: Browser localStorage

### File Structure
```
app/
├── page.tsx (home)
├── about/page.tsx
├── projects/
│   ├── page.tsx (listing)
│   └── [id]/page.tsx (detail)
├── contact/page.tsx
└── admin/
    ├── layout.tsx (sidebar & auth)
    ├── login/page.tsx
    ├── page.tsx (dashboard)
    ├── projects/page.tsx
    ├── site-visits/page.tsx
    └── contact-queries/page.tsx

components/
├── navigation.tsx
├── hero.tsx
├── site-visit-form.tsx
├── project-card.tsx
├── footer.tsx

lib/
├── mock-data.ts (all sample data)
├── storage.ts (localStorage utilities)
├── auth.ts (authentication)
└── utils.ts

styles/
└── globals.css (color scheme & design tokens)
```

### Key Features

1. **Form Validation**
   - Real-time validation on all forms
   - Toast notifications for success/error
   - Required field checks

2. **Search & Filter**
   - City-wise project search
   - Project status filtering
   - Contact query search by name/email/subject

3. **Status Management**
   - Site visits: New → Contacted → Visited → Interested
   - Contact queries: New → Replied → Resolved
   - Projects: Upcoming → Ongoing → Completed

4. **Reply System**
   - Admin can send replies to inquiries
   - Full reply history with timestamps
   - Email tracking (admin@samrajyam.com)

5. **Responsive Design**
   - Mobile-first approach
   - Works on all device sizes
   - Optimized UI for admin panel

## Color Scheme

- **Primary**: Teal/Emerald (#2d9d78) - Trust and growth
- **Secondary**: Light gray (#f5f5f5) - Neutral background
- **Accent**: Darker teal - Interactive elements
- **Background**: Off-white - Main background
- **Text**: Dark gray to black - Readability

## How to Use

### For Visitors
1. Browse projects on the Projects page
2. Filter by city or project status
3. View detailed project information including highlights, amenities, and pricing
4. Schedule site visits directly from project pages or home page
5. Contact company through the Contact page

### For Admin
1. Navigate to `/admin`
2. Click Login
3. Use credentials: `admin@samrajyam.com` / `admin123`
4. Manage projects - add, edit, delete, view
5. Respond to site visit inquiries
6. Respond to contact form submissions
7. Track inquiry status and update as needed
8. Click Logout when done

## Data Persistence

All data is saved in browser localStorage:
- Survives page refreshes
- Persists across sessions until browser cache is cleared
- No server connection required
- Perfect for demo/prototype purposes

## Future Enhancements

- Backend database integration (MongoDB/PostgreSQL)
- Email notifications
- User accounts for customers
- Wishlist functionality
- Advanced analytics
- Payment integration
- Virtual tours
- Document management for projects

---

**Note**: This is a full-featured demo application using localStorage. For production use, integrate with a real backend database and email service.
