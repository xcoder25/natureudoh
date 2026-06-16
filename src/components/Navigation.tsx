/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Home, UtensilsCrossed, CalendarDays, Image, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  onOpenBooking: () => void;
}

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section for bottom nav
      const sections = ['home', 'menu', 'events', 'gallery', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Menu', href: '#menu' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  const bottomNavItems = [
    { id: 'home', icon: Home, label: 'Home', href: '#home' },
    { id: 'menu', icon: UtensilsCrossed, label: 'Menu', href: '#menu' },
    { id: 'events', icon: CalendarDays, label: 'Events', href: '#events' },
    { id: 'gallery', icon: Image, label: 'Gallery', href: '#gallery' },
    { id: 'contact', icon: Phone, label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <>
      {/* ── Top Navbar ── */}
      <motion.nav
        id="navbar-main"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-dark/96 border-b border-accent-gold/20 shadow-xl backdrop-blur-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-accent-gold/45 pulse-gold flex-shrink-0 bg-forest-dark">
                <img src="/nature.png" alt="Nature Udoh & The Gang Logo" className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-xl font-bold text-cream tracking-wider leading-none uppercase">
                  Nature Udoh
                </span>
                <span className="font-sans text-[9px] sm:text-xs text-accent-gold-light font-medium tracking-[0.25em] leading-none mt-0.5">
                  & THE GANG
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-sm font-medium text-cream/80 hover:text-accent-gold transition-colors duration-200 relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
              <button
                id="btn-nav-book-desktop"
                onClick={onOpenBooking}
                className="bg-accent-gold hover:bg-accent-gold-light text-forest-dark font-sans font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider cursor-pointer"
              >
                Book Table
              </button>
            </div>

            {/* Mobile: Book CTA + Hamburger */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                id="btn-nav-book-mobile-top"
                onClick={onOpenBooking}
                className="bg-accent-gold text-forest-dark font-sans font-bold text-xs px-4 py-2 rounded-full uppercase tracking-wider cursor-pointer touch-active active:scale-95 transition-transform"
              >
                Book
              </button>
              <motion.button
                id="btn-mobile-menu-toggle"
                whileTap={{ scale: 0.88 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-cream hover:text-accent-gold focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              id="mobile-drawer-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-[320px] bg-forest-dark flex flex-col h-full border-l border-accent-gold/20 shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-cream/10">
                <div className="flex items-center space-x-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent-gold/40 flex-shrink-0 bg-forest-dark">
                    <img src="/nature.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <span className="font-serif text-sm font-bold text-cream tracking-wide uppercase">
                    Nature Udoh
                  </span>
                </div>
                <motion.button
                  id="btn-mobile-drawer-close"
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full bg-forest/40 text-cream/70 hover:text-accent-gold transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Drawer Links */}
              <motion.div
                className="flex-1 overflow-y-auto py-4 px-4"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
                }}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 320, damping: 26 } }
                    }}
                    whileTap={{ scale: 0.97, x: 4 }}
                    className="flex items-center justify-between font-sans text-base font-medium text-cream/90 hover:text-accent-gold py-3.5 border-b border-cream/5 last:border-b-0 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-accent-gold/40 text-xs">→</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Drawer Footer CTA */}
              <div className="p-5 border-t border-cream/10 space-y-3">
                <motion.button
                  id="btn-nav-book-mobile-drawer"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setIsOpen(false); onOpenBooking(); }}
                  className="w-full bg-accent-gold hover:bg-accent-gold-light text-forest-dark font-sans font-bold text-sm py-4 rounded-2xl shadow-lg transition-colors uppercase tracking-wider cursor-pointer"
                >
                  🍖 Book a Table Now
                </motion.button>
                <p className="text-center font-sans text-xs text-cream/40">Free • No credit card required</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Bottom Navigation Bar ── */}
      <nav className="mobile-bottom-nav lg:hidden" aria-label="Bottom navigation">
        <div className="flex items-center justify-around px-2 pt-2 pb-1">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.href)}
                className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 touch-active ${
                  isActive ? 'text-accent-gold' : 'text-cream/50'
                }`}
              >
                <div className={`p-1.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-accent-gold/15' : ''}`}>
                  <Icon className={`transition-all duration-200 ${isActive ? 'w-5 h-5' : 'w-5 h-5'}`} />
                </div>
                <span className={`text-[10px] font-semibold tracking-wide transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div layoutId="bottomNavIndicator" className="w-1 h-1 rounded-full bg-accent-gold mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
