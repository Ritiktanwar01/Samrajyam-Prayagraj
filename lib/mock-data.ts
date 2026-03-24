export interface Project {
  id: string;
  name: string;
  location: string;
  city: string;
  description: string;
  image: string;
  gallery: string[];
  highlights: { title: string; description: string; icon: string }[];
  amenities: { name: string; icon: string }[];
  features: { name: string; value: string }[];
  priceRange: { min: number; max: number };
  bedrooms: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
  builtUpArea: string;
  totalUnits: number;
  developer: string;
  approval: string;
  floorPlans: { type: string; image: string; price: string }[];
  createdAt: string;
}

export interface SiteVisit {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectId: string;
  visitDate: string;
  message: string;
  status: 'new' | 'contacted' | 'visited' | 'interested';
  adminReplies: { date: string; message: string; adminEmail: string }[];
  submittedAt: string;
}

export interface ContactQuery {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'replied' | 'resolved';
  adminReplies: { date: string; message: string; adminEmail: string }[];
  submittedAt: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Samrajyam',
    location: '123 Tech Park, Raipur',
    city: 'Raipur',
    description: 'Grand landmark residential project with 7 iconic towers offering premium living experience.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
    highlights: [
      { title: 'Prime Location', description: 'Centrally located with easy access to all amenities', icon: 'MapPin' },
      { title: '7 Iconic Towers', description: 'Sprawling residential complex with architectural excellence', icon: 'Building2' },
      { title: 'Modern Residences', description: '2BHK, 3BHK, and 4BHK luxury apartments', icon: 'Home' },
      { title: 'World-class Amenities', description: 'Swimming pool, gym, clubhouse, and more', icon: 'Zap' },
      { title: 'Safety & Security', description: '24/7 security with CCTV and gated community', icon: 'Shield' },
      { title: 'Eco-friendly Features', description: 'Green building practices and sustainable living', icon: 'Leaf' },
      { title: 'Govt Approval', description: 'Town & Country Planning approved project', icon: 'CheckCircle' },
      { title: 'Developer Commitment', description: 'Trusted real estate company with proven track record', icon: 'Award' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
      { name: 'Garden', icon: 'Flower2' },
      { name: 'Kids Play Area', icon: 'Play' },
      { name: 'Security', icon: 'Eye' },
      { name: 'Lift Services', icon: 'ArrowUp' },
    ],
    features: [
      { name: 'Built-up Area', value: '500+ acres' },
      { name: 'Total Units', value: '1000+' },
      { name: 'Towers', value: '7' },
      { name: 'Parking Spaces', value: '1200+' },
      { name: 'Green Area', value: '40%' },
      { name: 'Completion', value: '2026' },
    ],
    priceRange: { min: 3500000, max: 8500000 },
    bedrooms: ['2BHK', '3BHK', '4BHK'],
    status: 'ongoing',
    builtUpArea: '500+ acres',
    totalUnits: 1000,
    developer: 'Aadharshila Group',
    approval: 'Town & Country Planning',
    floorPlans: [
      { type: '2BHK', image: '/placeholder.svg?height=300&width=400', price: '₹35 Lakhs - 45 Lakhs' },
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹55 Lakhs - 70 Lakhs' },
      { type: '4BHK', image: '/placeholder.svg?height=300&width=400', price: '₹75 Lakhs - 85 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Aadhar Heights',
    location: 'Downtown, Hyderabad',
    city: 'Hyderabad',
    description: 'Luxurious residential complex in the heart of Hyderabad with modern architecture.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'City Center Location', description: 'Located in prime business district', icon: 'MapPin' },
      { title: '4 Towers', description: 'High-rise residential apartments', icon: 'Building2' },
      { title: 'Luxury Homes', description: '2BHK and 3BHK units', icon: 'Home' },
      { title: 'Smart Amenities', description: 'IoT enabled facilities', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '200 acres' },
      { name: 'Total Units', value: '400' },
      { name: 'Completion', value: '2025' },
    ],
    priceRange: { min: 4000000, max: 7000000 },
    bedrooms: ['2BHK', '3BHK'],
    status: 'ongoing',
    builtUpArea: '200 acres',
    totalUnits: 400,
    developer: 'Aadharshila Group',
    approval: 'HMDA Approved',
    floorPlans: [
      { type: '2BHK', image: '/placeholder.svg?height=300&width=400', price: '₹40 Lakhs - 50 Lakhs' },
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹60 Lakhs - 75 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Shila Bangalore',
    location: 'Whitefield, Bangalore',
    city: 'Bangalore',
    description: 'Premium residential development in Bangalore IT corridor with world-class facilities.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'IT Corridor', description: 'Near major tech parks', icon: 'MapPin' },
      { title: '5 Towers', description: 'Modern architectural design', icon: 'Building2' },
      { title: 'Smart Homes', description: '2BHK, 3BHK, 4BHK options', icon: 'Home' },
      { title: 'Premium Amenities', description: 'State-of-the-art facilities', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '250 acres' },
      { name: 'Total Units', value: '600' },
      { name: 'Completion', value: '2024' },
    ],
    priceRange: { min: 5000000, max: 9000000 },
    bedrooms: ['2BHK', '3BHK', '4BHK'],
    status: 'completed',
    builtUpArea: '250 acres',
    totalUnits: 600,
    developer: 'Aadharshila Group',
    approval: 'BBMP Approved',
    floorPlans: [
      { type: '2BHK', image: '/placeholder.svg?height=300&width=400', price: '₹50 Lakhs - 65 Lakhs' },
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹75 Lakhs - 90 Lakhs' },
      { type: '4BHK', image: '/placeholder.svg?height=300&width=400', price: '₹95 Lakhs - 120 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Grand Mumbai',
    location: 'Bandra, Mumbai',
    city: 'Mumbai',
    description: 'Ultra-premium residential towers in Mumbai with panoramic city views.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'Coastal Location', description: 'Near beach with sea views', icon: 'MapPin' },
      { title: '6 Towers', description: 'High-rise luxury apartments', icon: 'Building2' },
      { title: 'Premium Residences', description: '3BHK and 4BHK only', icon: 'Home' },
      { title: 'Luxury Amenities', description: 'Concierge and valet services', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '150 acres' },
      { name: 'Total Units', value: '300' },
      { name: 'Completion', value: '2025' },
    ],
    priceRange: { min: 7000000, max: 15000000 },
    bedrooms: ['3BHK', '4BHK'],
    status: 'ongoing',
    builtUpArea: '150 acres',
    totalUnits: 300,
    developer: 'Aadharshila Group',
    approval: 'BMC Approved',
    floorPlans: [
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹70 Lakhs - 90 Lakhs' },
      { type: '4BHK', image: '/placeholder.svg?height=300&width=400', price: '₹100 Lakhs - 150 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Pune Elegance',
    location: 'Kalyani Nagar, Pune',
    city: 'Pune',
    description: 'Sophisticated residential community in Pune with green spaces and modern living.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'Upscale Location', description: 'Premium locality with good connectivity', icon: 'MapPin' },
      { title: '3 Towers', description: 'Contemporary architectural design', icon: 'Building2' },
      { title: 'Family Homes', description: '2BHK and 3BHK apartments', icon: 'Home' },
      { title: 'Community Living', description: 'Active community programs', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '180 acres' },
      { name: 'Total Units', value: '350' },
      { name: 'Completion', value: '2026' },
    ],
    priceRange: { min: 3000000, max: 6000000 },
    bedrooms: ['2BHK', '3BHK'],
    status: 'upcoming',
    builtUpArea: '180 acres',
    totalUnits: 350,
    developer: 'Aadharshila Group',
    approval: 'PMC Approved',
    floorPlans: [
      { type: '2BHK', image: '/placeholder.svg?height=300&width=400', price: '₹30 Lakhs - 40 Lakhs' },
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹50 Lakhs - 60 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Raipureal Prime',
    location: 'Naya Raipur, Raipur',
    city: 'Raipur',
    description: 'Modern residential project in Naya Raipur with sustainable living features.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'Planned City', description: 'In the newly developed Naya Raipur area', icon: 'MapPin' },
      { title: '2 Towers', description: 'Contemporary design with ample greenery', icon: 'Building2' },
      { title: 'Affordable Luxury', description: '2BHK apartments', icon: 'Home' },
      { title: 'Green Living', description: 'Eco-friendly residential complex', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '100 acres' },
      { name: 'Total Units', value: '200' },
      { name: 'Completion', value: '2024' },
    ],
    priceRange: { min: 2000000, max: 3500000 },
    bedrooms: ['2BHK'],
    status: 'completed',
    builtUpArea: '100 acres',
    totalUnits: 200,
    developer: 'Aadharshila Group',
    approval: 'Naya Raipur Authority Approved',
    floorPlans: [
      { type: '2BHK', image: '/placeholder.svg?height=300&width=400', price: '₹20 Lakhs - 35 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '7',
    name: 'Hyderabad Metro',
    location: 'Kukatpally, Hyderabad',
    city: 'Hyderabad',
    description: 'Vibrant residential community near Hyderabad metro with excellent connectivity.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'Metro Connectivity', description: 'Close to metro station', icon: 'MapPin' },
      { title: '3 Towers', description: 'Modern residential blocks', icon: 'Building2' },
      { title: 'Diverse Units', description: '2BHK and 3BHK options', icon: 'Home' },
      { title: 'Family Friendly', description: 'Schools and hospitals nearby', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '120 acres' },
      { name: 'Total Units', value: '280' },
      { name: 'Completion', value: '2024' },
    ],
    priceRange: { min: 3500000, max: 5500000 },
    bedrooms: ['2BHK', '3BHK'],
    status: 'completed',
    builtUpArea: '120 acres',
    totalUnits: 280,
    developer: 'Aadharshila Group',
    approval: 'HMDA Approved',
    floorPlans: [
      { type: '2BHK', image: '/placeholder.svg?height=300&width=400', price: '₹35 Lakhs - 45 Lakhs' },
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹55 Lakhs - 65 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '8',
    name: 'Bangalore Silicon',
    location: 'Marathahalli, Bangalore',
    city: 'Bangalore',
    description: 'Tech-friendly residential complex in Bangalore with modern amenities.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'Tech Hub Proximity', description: 'Near major tech companies', icon: 'MapPin' },
      { title: '4 Towers', description: 'Modern design and architecture', icon: 'Building2' },
      { title: 'Multi Unit Options', description: '2BHK, 3BHK, 4BHK', icon: 'Home' },
      { title: 'Smart Living', description: 'Modern amenities and facilities', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '200 acres' },
      { name: 'Total Units', value: '450' },
      { name: 'Completion', value: '2025' },
    ],
    priceRange: { min: 4500000, max: 8500000 },
    bedrooms: ['2BHK', '3BHK', '4BHK'],
    status: 'ongoing',
    builtUpArea: '200 acres',
    totalUnits: 450,
    developer: 'Aadharshila Group',
    approval: 'BBMP Approved',
    floorPlans: [
      { type: '2BHK', image: '/placeholder.svg?height=300&width=400', price: '₹45 Lakhs - 55 Lakhs' },
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹70 Lakhs - 85 Lakhs' },
      { type: '4BHK', image: '/placeholder.svg?height=300&width=400', price: '₹90 Lakhs - 110 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '9',
    name: 'Mumbai South',
    location: 'Mahim, Mumbai',
    city: 'Mumbai',
    description: 'Exclusive residential towers in South Mumbai with premium lifestyle offerings.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'South Mumbai', description: 'In the heart of south Mumbai', icon: 'MapPin' },
      { title: '5 Towers', description: 'Luxury high-rise development', icon: 'Building2' },
      { title: 'Ultra Premium', description: '3BHK, 4BHK, 5BHK penthouses', icon: 'Home' },
      { title: 'Concierge Services', description: 'Premium lifestyle services', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '200 acres' },
      { name: 'Total Units', value: '280' },
      { name: 'Completion', value: '2026' },
    ],
    priceRange: { min: 10000000, max: 25000000 },
    bedrooms: ['3BHK', '4BHK', '5BHK'],
    status: 'upcoming',
    builtUpArea: '200 acres',
    totalUnits: 280,
    developer: 'Aadharshila Group',
    approval: 'BMC Approved',
    floorPlans: [
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹100 Lakhs - 150 Lakhs' },
      { type: '4BHK', image: '/placeholder.svg?height=300&width=400', price: '₹150 Lakhs - 200 Lakhs' },
      { type: '5BHK', image: '/placeholder.svg?height=300&width=400', price: '₹200 Lakhs - 250 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '10',
    name: 'Pune Premium',
    location: 'Viman Nagar, Pune',
    city: 'Pune',
    description: 'Premium residential development in aviation locality with modern infrastructure.',
    image: '/placeholder.svg?height=400&width=600',
    gallery: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    highlights: [
      { title: 'Prime Locality', description: 'Viman Nagar premium area', icon: 'MapPin' },
      { title: '4 Towers', description: 'Contemporary architecture', icon: 'Building2' },
      { title: 'Luxury Living', description: '3BHK and 4BHK units', icon: 'Home' },
      { title: 'Complete Amenities', description: 'All modern facilities provided', icon: 'Zap' },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Users' },
      { name: 'Parking', icon: 'Car' },
    ],
    features: [
      { name: 'Built-up Area', value: '150 acres' },
      { name: 'Total Units', value: '320' },
      { name: 'Completion', value: '2025' },
    ],
    priceRange: { min: 6000000, max: 10000000 },
    bedrooms: ['3BHK', '4BHK'],
    status: 'ongoing',
    builtUpArea: '150 acres',
    totalUnits: 320,
    developer: 'Aadharshila Group',
    approval: 'PMC Approved',
    floorPlans: [
      { type: '3BHK', image: '/placeholder.svg?height=300&width=400', price: '₹60 Lakhs - 75 Lakhs' },
      { type: '4BHK', image: '/placeholder.svg?height=300&width=400', price: '₹80 Lakhs - 100 Lakhs' },
    ],
    createdAt: new Date().toISOString(),
  },
];

export const mockSiteVisits: SiteVisit[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '9876543210',
    projectId: '1',
    visitDate: '2024-02-25',
    message: 'Interested in 3BHK apartment',
    status: 'new',
    adminReplies: [],
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    name: 'Priya Singh',
    email: 'priya@example.com',
    phone: '9876543211',
    projectId: '2',
    visitDate: '2024-02-28',
    message: 'Looking for 2BHK in Hyderabad',
    status: 'contacted',
    adminReplies: [
      {
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        message: 'Thank you for your interest. We have scheduled your visit for the mentioned date.',
        adminEmail: 'admin@samrajyam.com',
      },
    ],
    submittedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const mockContactQueries: ContactQuery[] = [
  {
    id: '1',
    name: 'Amit Patel',
    email: 'amit@example.com',
    phone: '9876543212',
    subject: 'Financing Options',
    message: 'Can you provide information about financing options available?',
    status: 'new',
    adminReplies: [],
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    name: 'Neha Verma',
    email: 'neha@example.com',
    phone: '9876543213',
    subject: 'Project Details',
    message: 'Need more information about Samrajyam project timeline',
    status: 'replied',
    adminReplies: [
      {
        date: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        message: 'Samrajyam is expected to be completed by 2026. Please visit our office for detailed information.',
        adminEmail: 'admin@samrajyam.com',
      },
    ],
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
];
