// Content configuration for events
// To add a new event:
// 1. Create a folder in /public/images/events/[slug]/
// 2. Add your photos there
// 3. Add an entry to the events array below

export interface EventData {
  slug: string;
  couple: string;
  date: string;
  eventType: 'holud' | 'wedding' | 'reception' | 'nikkah' | 'engagement' | 'mehendi';
  venue: string;
  coverImage: string;
  images: string[];
  description: string;
  featured: boolean;
}

// EDIT THIS ARRAY to add/remove events
export const events: EventData[] = [
  {
    slug: 'rahim-and-sarah',
    couple: 'Rahim & Sarah',
    date: '2025-12-15',
    eventType: 'wedding',
    venue: 'Radisson Blu, Dhaka',
    coverImage: '/images/events/rahim-and-sarah/cover.jpg',
    images: [
      '/images/events/rahim-and-sarah/001.jpg',
      '/images/events/rahim-and-sarah/002.jpg',
      '/images/events/rahim-and-sarah/003.jpg',
      '/images/events/rahim-and-sarah/004.jpg',
      '/images/events/rahim-and-sarah/005.jpg',
      '/images/events/rahim-and-sarah/006.jpg',
      '/images/events/rahim-and-sarah/007.jpg',
      '/images/events/rahim-and-sarah/008.jpg',
      '/images/events/rahim-and-sarah/009.jpg',
      '/images/events/rahim-and-sarah/010.jpg',
    ],
    description: 'A magical winter wedding filled with love, laughter, and timeless elegance.',
    featured: true,
  },
  {
    slug: 'nadia-and-tanvir',
    couple: 'Nadia & Tanvir',
    date: '2025-11-20',
    eventType: 'holud',
    venue: 'InterContinental, Dhaka',
    coverImage: '/images/events/nadia-and-tanvir/cover.jpg',
    images: [
      '/images/events/nadia-and-tanvir/001.jpg',
      '/images/events/nadia-and-tanvir/002.jpg',
      '/images/events/nadia-and-tanvir/003.jpg',
      '/images/events/nadia-and-tanvir/004.jpg',
      '/images/events/nadia-and-tanvir/005.jpg',
      '/images/events/nadia-and-tanvir/006.jpg',
      '/images/events/nadia-and-tanvir/007.jpg',
      '/images/events/nadia-and-tanvir/008.jpg',
      '/images/events/nadia-and-tanvir/009.jpg',
      '/images/events/nadia-and-tanvir/010.jpg',
    ],
    description: 'A vibrant holud ceremony bursting with color and joy.',
    featured: true,
  },
  {
    slug: 'anika-and-faisal',
    couple: 'Anika & Faisal',
    date: '2025-10-08',
    eventType: 'nikkah',
    venue: 'Pan Pacific Sonargaon, Dhaka',
    coverImage: '/images/events/anika-and-faisal/cover.jpg',
    images: [
      '/images/events/anika-and-faisal/001.jpg',
      '/images/events/anika-and-faisal/002.jpg',
      '/images/events/anika-and-faisal/003.jpg',
      '/images/events/anika-and-faisal/004.jpg',
      '/images/events/anika-and-faisal/005.jpg',
      '/images/events/anika-and-faisal/006.jpg',
      '/images/events/anika-and-faisal/007.jpg',
      '/images/events/anika-and-faisal/008.jpg',
      '/images/events/anika-and-faisal/009.jpg',
      '/images/events/anika-and-faisal/010.jpg',
    ],
    description: 'An intimate nikkah ceremony embracing tradition and love.',
    featured: true,
  },
  {
    slug: 'priya-and-arif',
    couple: 'Priya & Arif',
    date: '2025-09-25',
    eventType: 'engagement',
    venue: 'Le Méridien, Dhaka',
    coverImage: '/images/events/priya-and-arif/cover.jpg',
    images: [
      '/images/events/priya-and-arif/001.jpg',
      '/images/events/priya-and-arif/002.jpg',
      '/images/events/priya-and-arif/003.jpg',
      '/images/events/priya-and-arif/004.jpg',
      '/images/events/priya-and-arif/005.jpg',
      '/images/events/priya-and-arif/006.jpg',
    ],
    description: 'A beautiful engagement celebration marking the beginning of forever.',
    featured: false,
  },
];

export const packages = [
  {
    id: 'basic',
    name: 'Basic Package',
    nameBn: 'বেসিক প্যাকেজ',
    price: 25000,
    perEvent: true,
    recommended: 'Small events (50-60 guests)',
    features: [
      '1 Photographer',
      '1 Cinematographer',
      'Unlimited photos',
      'Prints: 30 unit 4R, 1 unit 10L',
      '2-5 min Trailer',
      '1 Full video (2-3 min)',
      'Venue documentation',
      'Max 5 Hours',
    ],
    highlight: false,
  },
  {
    id: 'standard',
    name: 'Standard Package',
    nameBn: 'স্ট্যান্ডার্ড প্যাকেজ',
    price: 36000,
    perEvent: true,
    recommended: 'Events with 100-150 guests',
    extraHourCost: 5000,
    features: [
      '2 Photographers',
      '1 Cinematographer',
      'Unlimited photos',
      'Prints: 50 unit 4R, 1 unit 10L',
      '2-5 min Trailer',
      '1 Full video (2-3 min)',
      'Instagram Reel',
      'Venue documentation',
      'Max 6 Hours',
    ],
    highlight: false,
  },
  {
    id: 'standard-plus',
    name: 'Standard Plus',
    nameBn: 'স্ট্যান্ডার্ড প্লাস',
    price: 48000,
    perEvent: true,
    recommended: 'Events with ~200 guests',
    extraHourCost: 7000,
    features: [
      '2 Photographers',
      '2 Cinematographers',
      'Unlimited photos',
      'Prints: 100 unit 4R, 2 unit 10L',
      '2-5 min Trailer',
      '1 Full video (2-3 min)',
      'Instagram Reel',
      'Venue documentation',
      'Max 6 Hours',
    ],
    highlight: true,
  },
  {
    id: 'premium',
    name: 'Premium Package',
    nameBn: 'প্রিমিয়াম প্যাকেজ',
    price: 60000,
    perEvent: true,
    recommended: 'Events with 300-500 guests',
    extraHourCost: 10000,
    features: [
      '3 Photographers',
      '2 Cinematographers',
      'Unlimited photos',
      'Prints: 100 unit 5R, 2 unit 12L',
      '2-5 min Trailer',
      '1 Full video (2-3 min)',
      '2x Instagram Reels',
      'Venue documentation',
      'Max 6 Hours',
    ],
    highlight: false,
  },
];

export const addOns = [
  { name: 'Express Delivery', description: 'Delivery within 7 days', price: 10000 },
  { name: 'Drone Coverage', description: 'Aerial shots, 5 hours', price: 25000 },
  { name: '4K Quality', description: 'Upgraded 4K footage', price: 25000 },
  { name: 'Pre-Shoot', description: '1 Photographer + 1 Videographer, 1 Hour', price: 20000 },
  { name: 'Photobook', description: 'Exclusively designed photobook', price: 20000 },
  { name: 'Instagram Reel', description: '90 seconds highlight reel', price: 15000 },
  { name: 'Post Event Shoot', description: "Groom's House/Bashor coverage", price: 15000 },
  { name: 'Pasting Album', description: 'All photos pasted inside', price: 8000 },
];

export const teamMembers = [
  { name: 'Founder', role: 'Lead Photographer & Cinematographer' },
];

export const siteConfig = {
  name: 'Shondhikkhon',
  nameBn: 'সান্ধিক্ষণ',
  tagline: 'Capturing timeless moments of love',
  taglineBn: 'প্রেমের চিরকালীন মুহূর্ত ধারণ',
  phone: '+8801790-305080',
  email: 'shondhikkhon.official@gmail.com',
  whatsapp: 'https://wa.me/8801790305080',
  facebook: 'https://www.facebook.com/shondhikkhon.official',
  instagram: 'https://instagram.com/shondhikkhon.official',
  address: 'Dhaka, Bangladesh',
};
