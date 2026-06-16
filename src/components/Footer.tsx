/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Flame, Instagram, Facebook, Youtube, Heart, ChevronDown, CornerDownRight } from 'lucide-react';

interface FooterProps {
  onQuickLinkClick: (targetSelector: string) => void;
}

export default function Footer({ onQuickLinkClick }: FooterProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Brand', href: '#about' },
    { name: 'Premium Services', href: '#services' },
    { name: 'Signature Experiences', href: '#experiences' },
    { name: 'Culinary Menu', href: '#menu' },
    { name: 'Social Events', href: '#events' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Secure Reservation', href: '#reservation' },
  ];

  const hours = [
    { days: 'Wednesday – Friday', time: '4:00 PM – 12:00 AM' },
    { days: 'Saturday – Sunday', time: '2:00 PM – 2:00 AM' },
    { days: 'Monday – Tuesday', time: 'Closed for Farming' },
  ];

  const toggleSection = (id: string) => setOpenSection(prev => prev === id ? null : id);

  return (
    <footer className="bg-[#090f0c] border-t border-accent-gold/20 text-cream relative z-20 pb-20 lg:pb-0">

      {/* Top gradient strip */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

      {/* Mobile Accordion Footer / Desktop Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16">

        {/* Brand column — always visible */}
        <div className="mb-8 sm:mb-10">
          <button
            onClick={() => onQuickLinkClick('#home')}
            className="flex items-center gap-3 group mb-4 focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent-gold/40 flex-shrink-0 bg-forest-dark">
              <img src="/nature.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-base font-bold tracking-wider leading-none uppercase text-cream">Nature Udoh</span>
              <span className="font-sans text-[10px] text-accent-gold-light tracking-[0.2em] leading-none mt-0.5 font-semibold">& THE GANG</span>
            </div>
          </button>
          <p className="font-sans text-xs text-cream-dark/65 leading-relaxed max-w-xs">
            Premium al-fresco gatherings, hickory smoking sessions, botanical experiences, and social acoustic grooves. Join our gang under the night sky.
          </p>
          <div className="flex gap-3 mt-4">
            {[
              { icon: Instagram, href: 'https://instagram.com/natureudoh_gang', label: 'Instagram' },
              { icon: Facebook, href: 'https://facebook.com/natureudoh_gang', label: 'Facebook' },
              { icon: Youtube, href: 'https://youtube.com/natureudoh_gang', label: 'YouTube' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="p-2.5 rounded-lg bg-forest/30 border border-cream/8 text-cream hover:text-accent-gold transition-colors">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop: 3-col grid for links, contact, hours */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12 mb-12">
          {/* Quick links */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-accent-gold mb-5 border-l-2 border-accent-gold pl-3">
              Explore Destinations
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 font-sans text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onQuickLinkClick(link.href)}
                    className="flex items-center gap-1.5 text-cream-dark/75 hover:text-accent-gold transition-colors cursor-pointer"
                  >
                    <CornerDownRight className="w-3 h-3 text-accent-gold/35 shrink-0" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-accent-gold mb-5 border-l-2 border-accent-gold pl-3">
              Inquiries
            </h4>
            <div className="font-sans text-sm text-cream-dark/80 space-y-3 leading-relaxed">
              <p><strong className="text-cream">HQ Address:</strong><br />Plot 15, Royal Forest Garden, Lekki Phase 1, Lagos.</p>
              <p><strong className="text-cream">Telephone:</strong><br />+234 803 123 4567</p>
              <p><strong className="text-cream">Mailbox:</strong><br />reservations@natureudohandgang.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-accent-gold mb-5 border-l-2 border-accent-gold pl-3">
              Opening Hours
            </h4>
            <div className="space-y-3">
              {hours.map((h, i) => (
                <div key={i} className="flex justify-between items-center pb-2.5 border-b border-cream/5 last:border-b-0">
                  <span className="font-sans text-xs text-cream-dark/75">{h.days}</span>
                  <span className={`font-sans text-xs font-semibold ${i === 2 ? 'text-accent-gold-light italic' : 'text-cream'}`}>{h.time}</span>
                </div>
              ))}
              <div className="p-3 bg-forest/20 border border-accent-gold/12 rounded-xl mt-2">
                <p className="text-[10px] text-cream/60 leading-relaxed">* Live smoke show at 6 PM daily. Live music Sundays from 5:30 PM.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion sections */}
        <div className="lg:hidden space-y-2 mb-8">
          {[
            {
              id: 'links',
              title: 'Explore Destinations',
              content: (
                <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 font-sans text-sm pt-3">
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <button onClick={() => onQuickLinkClick(link.href)} className="text-cream-dark/70 hover:text-accent-gold transition-colors cursor-pointer text-left text-xs">
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )
            },
            {
              id: 'hours',
              title: 'Opening Hours',
              content: (
                <div className="space-y-2.5 pt-3">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between pb-2 border-b border-cream/5 last:border-b-0">
                      <span className="font-sans text-xs text-cream/65">{h.days}</span>
                      <span className={`font-sans text-xs font-semibold ${i === 2 ? 'text-accent-gold-light italic' : 'text-cream'}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              )
            },
            {
              id: 'contact',
              title: 'Contact Info',
              content: (
                <div className="font-sans text-xs text-cream-dark/75 space-y-2.5 pt-3 leading-relaxed">
                  <p><strong className="text-cream">Address:</strong> Plot 15, Royal Forest Garden, Lekki Phase 1, Lagos.</p>
                  <p><strong className="text-cream">Phone:</strong> +234 803 123 4567</p>
                  <p><strong className="text-cream">Email:</strong> reservations@natureudohandgang.com</p>
                </div>
              )
            }
          ].map(({ id, title, content }) => (
            <div key={id} className="border border-cream/8 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection(id)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left cursor-pointer"
              >
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-gold">{title}</span>
                <ChevronDown className={`w-4 h-4 text-cream/50 transition-transform duration-200 ${openSection === id ? 'rotate-180' : ''}`} />
              </button>
              {openSection === id && (
                <div className="px-4 pb-4">{content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-cream/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-sans text-[10px] sm:text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Nature Udoh and The Gang. All rights reserved. Registered Trademark in Lagos, Nigeria.
          </p>
          <p className="font-sans text-[10px] sm:text-xs text-cream/30 flex items-center gap-1 justify-center">
            Crafted with <Heart className="w-3 h-3 text-accent-gold fill-accent-gold animate-pulse" /> for premium al-fresco lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
