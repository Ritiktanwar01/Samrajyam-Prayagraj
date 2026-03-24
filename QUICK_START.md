# Quick Start Guide - Aadharshila Real Estate Website

## What's Been Built

Your Aadharshila real estate marketing website is now complete with a full public site and password-protected admin panel. All data is stored locally using browser localStorage.

## Navigate the Website

### Public Pages

**Home** (`/`)
- Hero section with site visit booking form
- Company overview
- Quick links to explore projects

**About** (`/about`)
- Company information and history
- Mission statement
- Vision for the future
- Core values

**Projects** (`/projects`)
- Browse all 10+ projects
- Search by city name
- Filter by project status (Upcoming/Ongoing/Completed)
- Click any project card to view full details

**Project Details** (`/projects/[id]`)
- Full project information
- Photo gallery with carousel
- Highlights and amenities
- Floor plans and pricing
- Site visit booking form

**Contact** (`/contact`)
- General inquiry form
- Company contact information

### Admin Panel

**Login** (`/admin/login`)
```
Email: admin@samrajyam.com
Password: admin123
```

**Dashboard** (`/admin`)
- Overview statistics
- Quick navigation to all management sections

**Projects** (`/admin/projects`)
- View all projects in table format
- Add new projects
- Edit existing projects
- Delete projects
- Search and filter

**Site Visits** (`/admin/site-visits`)
- View all site visit booking inquiries
- Filter by status (New/Contacted/Visited/Interested)
- Reply to inquiries
- Update inquiry status

**Contact Queries** (`/admin/contact-queries`)
- View all contact form submissions
- Search by name, email, or subject
- Filter by status (New/Replied/Resolved)
- Send replies to customers
- Update resolution status

## How to Use Each Feature

### Book a Site Visit
1. Go to home page or any project detail page
2. Fill out the "Schedule Your Site Visit" form
3. Enter name, email, phone, preferred date
4. Add optional message
5. Click "Schedule Visit"
6. Success message will appear

### Admin: Respond to Site Visit
1. Log into admin panel (`/admin`)
2. Go to "Site Visits" section
3. Click on any inquiry to view details
4. Type your reply message
5. Change status if needed (Contacted, Visited, Interested)
6. Click "Send Reply"

### Admin: Add a New Project
1. Go to `/admin/projects`
2. Click "Add Project" button
3. Fill in project details:
   - Name, City, Location
   - Status (Upcoming/Ongoing/Completed)
   - Built-up area, Total units
   - Price range (min-max)
   - Description
4. Click "Add Project"
5. New project appears in table and becomes searchable

### Admin: Edit a Project
1. Go to `/admin/projects`
2. Click "Edit" button on any project
3. Modify the details you want to change
4. Click "Update Project"
5. Changes are saved immediately

### Admin: Delete a Project
1. Go to `/admin/projects`
2. Click the trash icon on any project
3. Confirm deletion in popup
4. Project is removed

### Search & Filter Projects
1. On Projects page (`/projects`)
2. Use the search box to find by city, name, or location
3. Use the status dropdown to filter by project phase
4. Click city chips for quick filtering
5. Results update instantly

## Data Storage

All your data is saved in the browser:
- Site visit inquiries from forms
- Contact form submissions
- Projects you add/edit/delete
- Admin login session

**Important**: Data is stored locally only. Clearing browser cache will erase all data. Refresh the page to see the latest updates.

## Sample Data Included

10 pre-loaded projects across 5 cities:
- Raipur (2 projects)
- Hyderabad (2 projects)
- Bangalore (2 projects)
- Mumbai (2 projects)
- Pune (2 projects)

2 sample site visit inquiries
2 sample contact queries

You can edit, delete, and add to these as needed.

## Features Summary

✓ Multi-page public website
✓ Project listing with search and filters
✓ Detailed project pages
✓ Site visit booking forms (multiple locations)
✓ Contact form
✓ Password-protected admin panel
✓ Project management (CRUD)
✓ Site visit inquiry management with reply system
✓ Contact query management with reply system
✓ Responsive mobile design
✓ Toast notifications for feedback
✓ Form validation
✓ localStorage persistence
✓ Demo/sample data

## Tips

1. **Admin Access**: You must log in every time you restart the browser (session expires)
2. **Data Loss**: Don't clear browser cache if you want to keep your data
3. **Testing**: Use the pre-loaded sample data to test replies and status changes
4. **City Filtering**: The "Quick Filter by City" chips on projects page work instantly
5. **Reply History**: All replies to inquiries show timestamps and admin email
6. **Status Tracking**: Use status updates to track progress through the inquiry lifecycle

## Troubleshooting

**Lost my data?**
- Check if you cleared browser cache. Data is stored locally in localStorage.

**Admin login not working?**
- Make sure you're using the exact credentials: `admin@samrajyam.com` and `admin123`
- Check if you're on the correct URL: `/admin/login`

**Changes not saving?**
- Refresh the page to see the latest changes
- Check browser console for any errors

**Can't see new projects I added?**
- Try refreshing the page
- Go to Projects page and search/scroll to find them

**Form not submitting?**
- Fill in all required fields (marked with *)
- Check for validation error messages

## Next Steps

1. Explore the public website as a visitor
2. Test the admin panel with sample data
3. Add/edit/delete some projects
4. Submit test inquiries and reply to them
5. Check the admin dashboard to see statistics

---

Enjoy your new real estate marketing website! All features are fully functional with mock data. For production use, you'll want to integrate with a real backend database.
