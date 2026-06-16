/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Flame, Instagram, Facebook, Youtube, Heart, CornerDownRight } from 'lucide-react';

interface FooterProps {
  onQuickLinkClick: (targetSelector: string) => void;
}

export default function Footer({ onQuickLinkClick }: FooterProps) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Brand', href: '#about' },
    { name: 'Premium Services', href: '#services' },
    { name: 'Signature Experiences', href: '#experiences' },
    { name: 'Culinary Menu', href: '#menu' },
    { name: 'Social Events', href: '#events' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Secure Reservation', href: '#reservation' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    onQuickLinkClick(href);
  };

  return (
    <footer className="bg-[#0b1b15] border-t border-accent-gold/25 text-cream relative z-20">
      
      {/* Decorative top strip */}
      <div className="h-1 w-full bg-gradient-to-r from-forest via-[#bf9534] to-forest" />

      {/* Main Sitemap content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Brand Brand description (4 cols on lg) */}
          <div className="lg:col-span-4 text-left space-y-6">
            <button
               onClick={(e) => {
                 e.preventDefault();
                 onQuickLinkClick('#home');
               }}
               className="flex items-center space-x-2 group focus:outline-none text-left"
            >
              <div className="p-2 bg-accent-gold rounded-xl group-hover:bg-accent-gold-light transition-colors duration-300">
                <Flame className="w-5 h-5 text-forest-dark" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider leading-none uppercase text-cream">
                  Nature Udoh
                </span>
                <span className="font-sans text-[10px] text-accent-gold-light tracking-[0.2em] leading-none mt-1 font-semibold">
                  & THE GANG
                </span>
              </div>
            </button>

            <p className="font-sans text-xs sm:text-sm text-cream-dark/75 leading-relaxed">
              We design premium al-fresco gatherings, hickory smoking sessions, botanical experiences, and social acoustic grooves. Join our gang of local patrons under the night sky.
            </p>

            {/* Micro social icons */}
            <div className="flex space-x-3.5 pt-2">
              <a href="https://instagram.com/natureudoh_gang" className="p-2.5 rounded-lg bg-forest/30 border border-cream/5 text-cream hover:text-accent-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="https://facebook.com/natureudoh_gang" className="p-2.5 rounded-lg bg-forest/30 border border-cream/5 text-cream hover:text-accent-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="https://youtube.com/natureudoh_gang" className="p-2.5 rounded-lg bg-forest/30 border border-cream/5 text-cream hover:text-accent-gold transition-colors" aria-label="YouTube">
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Sitemaps quicklinks (3 cols on lg) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-accent-gold mb-6 border-l-2 border-accent-gold pl-3">
              Explore Destinations
            </h4>
            <ul className="grid grid-cols-1 gap-3 font-sans text-xs sm:text-sm">
              {quickLinks.map((link, lIdx) => (
                <li key={lIdx}>
                  <button
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center space-x-1.5 text-cream-dark/85 hover:text-accent-gold transition-colors focus:outline-none cursor-pointer"
                  >
                    <CornerDownRight className="w-3 h-3 text-accent-gold/40 shrink-0" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact quick review (2 cols on lg) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-accent-gold mb-6 border-l-2 border-accent-gold pl-3">
              Inquiries
            </h4>
            <div className="font-sans text-xs sm:text-sm text-cream-dark/85 leading-relaxed space-y-3">
              <p>
                <strong>HQ Address:</strong><br />
                Plot 15, Royal Forest Garden, Lekki Phase 1, Lagos.
              </p>
              <p>
                <strong>Telephone:</strong><br />
                +234 803 123 4567
              </p>
              <p>
                <strong>Mailbox:</strong><br />
                reservations@natureudohandgang.com
              </p>
            </div>
          </div>

          {/* Column 4: Operational timings (3 cols on lg) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-accent-gold mb-6 border-l-2 border-accent-gold pl-3">
              Opening Hours
            </h4>
            <div className="font-sans text-xs sm:text-sm text-cream-dark/90 space-y-4">
              <div className="flex justify-between pb-2 border-b border-cream/5">
                <span>Wednesday - Friday</span>
                <span className="font-semibold text-cream">4:00 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-cream/5">
                <span>Saturday - Sunday</span>
                <span className="font-semibold text-cream">2:00 PM - 2:00 AM</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-cream/5">
                <span>Monday - Tuesday</span>
                <span className="font-semibold text-accent-gold-light italic">Closed for Farming</span>
              </div>
              <div className="p-3 bg-forest/20 border border-accent-gold/15 rounded-xl">
                <p className="text-[10px] sm:text-xs text-cream/70 leading-relaxed font-light">
                  * Live smoke show and oak grills start daily at 6:00 PM. Live music is active on Sunday evenings starting at 5:30 PM.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-cream/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Nature Udoh and The Gang. All rights reserved. Registered Trademark in Lagos, Nigeria.
          </p>
          <p className="font-sans text-xs text-cream/40 flex items-center justify-center">
            Crafted with <Heart className="w-3.5 h-3.5 text-accent-gold fill-accent-gold mx-1 animate-pulse" /> for premium al-fresco lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
