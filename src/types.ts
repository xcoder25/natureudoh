/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'grills' | 'barbecue' | 'local' | 'drinks' | 'platters';
  image: string;
  isPopular?: boolean;
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  image: string;
}

export interface SignatureExperience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  features: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  priceInfo?: string;
  image: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  category: 'food' | 'drinks' | 'lounge' | 'events';
  title: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}
