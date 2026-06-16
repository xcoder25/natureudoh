/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, ServiceItem, SignatureExperience, EventItem, GalleryItem, TestimonialItem } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    title: 'Grills & Barbecue',
    description: 'Expertly smoked and flame-charred meats, slow-cooked to juicy perfection over seasoned hickory wood.',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's2',
    title: 'Restaurant Dining',
    description: 'A culinary journey featuring elegant and premium main courses, combining modern gastronomy with heritage flavors.',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    title: 'Lounge & Drinks',
    description: 'An elite mixology bar crafting custom herbal elixirs, signature smoking cocktails, and high-end spirit list.',
    iconName: 'GlassWater',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's4',
    title: 'Private Events',
    description: 'Tailored VIP lounge experiences with customized menus, dedicated servers, and custom event coordination.',
    iconName: 'CalendarDays',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's5',
    title: 'Birthday Celebrations',
    description: 'Create unforgettable memories under the stars with customized visual layouts, cakes, and champagne toasts.',
    iconName: 'PartyPopper',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's6',
    title: 'Corporate Gatherings',
    description: 'Impress clients or treat your team to dynamic retreats, team bondings, or upscale outdoor luncheons.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's7',
    title: 'Live Entertainment',
    description: 'Sway to dynamic performances, live acoustic bands, Karaoke battle nights, and curations from star DJs.',
    iconName: 'Music',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's8',
    title: 'Outdoor Relaxation',
    description: 'Lush green surroundings, ambient breeze, and cozy private wood pavilions designed to unwind all your stress.',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80'
  }
];

export const signatureExperiences: SignatureExperience[] = [
  {
    id: 'exp1',
    title: 'The Art of Wood-Fire Grilling',
    subtitle: 'FLAME-CHARRED EXCELLENCE',
    description: 'Our certified pitmasters use a custom blend of local hardwood and hickory to infuse every steak, rib, and skewer with a rich, unmatched smoky crust while retaining amazing juiciness within.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    tag: 'Smoked Daily',
    features: ['Prime-grade tender cuts', '8-hour hickory wood smoking', 'House-crafted signature dry rubs', 'Served sizzling at your table']
  },
  {
    id: 'exp2',
    title: 'Nature-Inspired Green Lounge',
    subtitle: 'LUSH LUXURY ESCAPE',
    description: 'Escape the concrete jungle into our oasis. Nature Udoh and The Gang offers an exceptionally designed bamboo structure, glowing stone fire pits, and premium plush sofas surrounded by lush live flora.',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    tag: 'Lounge Vibe',
    features: ['Private canopy pavilions', 'Ambient string lighting', 'Immersive botanical backdrop', 'Social fire pits at evening']
  },
  {
    id: 'exp3',
    title: 'Vibrant Event Nights',
    subtitle: 'THE GANGS SOCIAL CIRCLE',
    description: 'We believe premium food is best enjoyed in vibrant company. From soulful jazz sessions and live saxophone solos on Sundays to high-energy Friday barbecues and DJ sets, the atmosphere is always electric.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    tag: 'Entertainment',
    features: ['Weekly acoustic bands', 'Premium sound acoustics', 'Famous curated guest DJs', 'Interactive karaoke battles']
  }
];

export const menuItems: MenuItem[] = [
  // Grills
  {
    id: 'm1',
    name: 'Gold-Crusted Ribeye Steak',
    description: 'Perfectly seared dry-aged ribeye cut, basted in rosemary gold herb-butter, served with charcoal grilled seasonal asparagus.',
    price: '$45.00',
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80',
    isPopular: true,
    tags: ['Dry Aged', 'Best Seller']
  },
  {
    id: 'm2',
    name: 'Flame-Grilled Tiger Prawns',
    description: 'Giant ocean tiger prawns basted in native lemongrass and chili infusion, charred on live firewood, with garlic dip.',
    price: '$32.50',
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
    tags: ['Seafood', 'Spicy']
  },
  {
    id: 'm3',
    name: 'Charred Suya Skewers',
    description: 'Thinly sliced tender dynamic beef cuts marinated in traditional peanut kuli-suya spice, grilled on open coals.',
    price: '$18.00',
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80',
    tags: ['Aromatic', 'Native']
  },

  // Barbecue
  {
    id: 'm4',
    name: '8-Hour Hickory Smoked Pork Ribs',
    description: 'Slow-cooked baby back ribs basted continuously in our signature whiskey-bourbon maple BBQ glaze til bone-tender.',
    price: '$28.90',
    category: 'barbecue',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=500&q=80',
    isPopular: true,
    tags: ['Smoked', 'Hickory']
  },
  {
    id: 'm5',
    name: 'Texas Oak-Smoked Beef Brisket',
    description: 'Premium choice beef brisket seasoned in heavy black peppercorn rub, oak-wood smoked for 12 hours, served with pickles.',
    price: '$34.00',
    category: 'barbecue',
    image: 'https://images.unsplash.com/photo-1627054178665-cb2ae9d2fe2b?auto=format&fit=crop&w=500&q=80',
    tags: ['Signature']
  },

  // Local Dishes
  {
    id: 'm6',
    name: 'Spicy Fire-Wood Party Jollof',
    description: 'Lekki-style smoky wood-fire Rice. Served with a crispy quarter charcoal chicken, spicy sweet plantain dodo and garden salad.',
    price: '$22.00',
    category: 'local',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80',
    isPopular: true,
    tags: ['Classic', 'Spicy']
  },
  {
    id: 'm7',
    name: 'Coal-Grilled Whole Croaker Fish',
    description: 'Fresh giant Croaker fish slathered in secret native hot pepper basted masterfully over coal, served with fried golden yam chips.',
    price: '$38.00',
    category: 'local',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80',
    tags: ['Spicy', 'Seafood']
  },

  // Drinks
  {
    id: 'm8',
    name: 'The Gang’s Smoking Dragon Cocktail',
    description: 'Premium wood-aged Mezcal, fresh passion fruit puree, native lime, topped with fresh rosemary sprig lit table-side.',
    price: '$16.50',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80',
    isPopular: true,
    tags: ['Alcoholic', 'Smoking']
  },
  {
    id: 'm9',
    name: 'Nature’s Hibiscus & Mint Spritz',
    description: 'Lush organic local sorting of Zobo leaves, cold-infused with fresh sweet mint, ginger beer, lime citrus and sparkling soda.',
    price: '$11.00',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=80',
    tags: ['Non-Alcoholic', 'Refresher']
  },

  // Platters
  {
    id: 'm10',
    name: 'The Gang’s Monster Feast Platter',
    description: 'Half slab hickory smoked ribs, double brisket slices, four suya skewers, coal-grilled half chicken, charred sweetcorn, sweet potato wedges, dodo, and dynamic dynamic dips.',
    price: '$89.00',
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80',
    isPopular: true,
    tags: ['Shared Platter', 'Sensation']
  },
  {
    id: 'm11',
    name: 'Nature’s Surf & Turf Platter',
    description: 'Perfect combination of flame-seared ribeye steak slices and four jumbo lemongrass tiger prawns, resting on a bed of gold garlic herb mash and grilled lemon halves.',
    price: '$98.00',
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80',
    tags: ['Premium', 'Shared']
  }
];

export const eventsData: EventItem[] = [
  {
    id: 'e1',
    title: 'Friday Night Flame & Grill Barbecue',
    date: 'Every Friday Night',
    time: '7:00 PM - Late',
    description: 'Sizzle into the weekend! Dynamic barbecue live-smoke-show with our chief pitmaster, chilled draft beers, and a high-tempo DJ set in the outdoor lounge garden.',
    priceInfo: 'Free Entry (Booking Recommended)',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    tag: 'Barbecue & Beats'
  },
  {
    id: 'e2',
    title: 'Live Soulful Music & Saxophone Sundays',
    date: 'Every Sunday Evening',
    time: '5:30 PM - 9:30 PM',
    description: 'Relax in our scenic green lounge as famous local bands play acoustic, blues, and neo-soul, with guest stellar saxophonists keeping the rhythm elegant and warm.',
    priceInfo: 'Complimentary Glass of Wine with Steak Order',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    tag: 'Live Acoustic Jazz'
  },
  {
    id: 'e3',
    title: 'Midweek Showdown: Ultimate Karaoke Battle',
    date: 'Every Wednesday Night',
    time: '8:00 PM - 11:30 PM',
    description: 'Take the mic under the canopy! Karaoke battle hosted by local influencers, custom cocktail deals, and premium dynamic prizes for the best singers of the night.',
    priceInfo: '$10 Cocktails All Night',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    tag: 'Active Night'
  },
  {
    id: 'e4',
    title: 'Nature’s Premium Birthday Celebrations',
    date: 'Custom Booking Available',
    time: 'Flexible Hours',
    description: 'Host your special day with the Gang! Customized luxurious VIP outdoor setup, photo-op flow walls, customized platters, sparklers and deep bass background soundscapes.',
    priceInfo: 'Custom Tiered Packages',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
    tag: 'Celebration Premium'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    category: 'food',
    title: 'Chef Sizzling Ribs',
    description: 'Chef Nature basting the prime ribs directly on the cherrywood flames.'
  },
  {
    id: 'g2',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    category: 'lounge',
    title: 'Main Dining Garden',
    description: 'Golden hour lights filtering through modern wooden gazebos.'
  },
  {
    id: 'g3',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    category: 'drinks',
    title: 'Smoking Elixirs',
    description: 'Infused spirits and custom smoking mixers crafted on request.'
  },
  {
    id: 'g4',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
    category: 'events',
    title: 'Golden Celebration',
    description: 'Guests raising glasses during a gorgeous outdoor birthday party night.'
  },
  {
    id: 'g5',
    image: 'https://images.unsplash.com/photo-1627054178665-cb2ae9d2fe2b?auto=format&fit=crop&w=800&q=80',
    category: 'food',
    title: 'Loaded Brisket Platter',
    description: 'A classic 12-hour oak smoked beef brisket with spicy pickled peppers.'
  },
  {
    id: 'g6',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    category: 'drinks',
    title: 'Garden Margaritas',
    description: 'Handcrafted citrus and wild berries margaritas on display.'
  },
  {
    id: 'g7',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    category: 'events',
    title: 'Live Band Session',
    description: 'Sundays groove under the hanging canopy with our resident acoustic gang.'
  },
  {
    id: 'g8',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    category: 'lounge',
    title: 'The Bamboo Cabana',
    description: 'Cozy private lounge corner perfect for intimate conversations and premium relaxation.'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Chinedu Okafor',
    role: 'VIP Member / Party Host',
    rating: 5,
    comment: 'Indeed Nature Udofia and The Gang is second to none! Hosted my birthday dinner inside the Private Canopy and it was marvelous. The smoking Dragon Cocktails lit up everyone’s eyes, and the smoked monster platter is a direct ticket to food heaven. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Sophia Williams',
    role: 'Food Blogger',
    rating: 5,
    comment: 'The vibes are incredible! The transition from outdoor forest garden to lively live acoustic band at night was seamless. The charcoal croaker fish is basted in rich traditional aromatic spices that burst in your mouth. 10/10 for hospitality, lighting, and excellent service.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Tunde Adebayo',
    role: 'Regular Patron',
    rating: 5,
    comment: 'I am a regular on Sunday Jazz Night. There’s something so therapeutic about listening to acoustic saxophone while eating the gold-crusted ribeye steak in a green garden canopy. Nature and his crew really created a standard-setting lounge experience here.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't4',
    name: 'Eleanor Carter',
    role: 'Corporate Planner',
    rating: 5,
    comment: 'We booked the outdoor forest pavilion for our company’s end of year retreat and it was flawless. Elegant layout, professional team, incredible hickory wood grill aroma, and stellar organization. It is officially our designated hosting spot for corporate social gatherings.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  }
];
