/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  onOpenBooking: () => void;
}

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        id="navbar-main"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-dark/95 border-b border-accent-gold/20 shadow-xl backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2 group">
              <div className="relative p-2 bg-accent-gold rounded-xl group-hover:bg-accent-gold-light transition-colors duration-300">
                <Flame className="w-6 h-6 text-forest-dark" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold text-cream tracking-wider leading-none uppercase">
                  Nature Udoh
                </span>
                <span className="font-sans text-xs text-accent-gold-light font-medium tracking-[0.25em] leading-none mt-1">
                  & THE GANG
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-sm font-medium text-cream/82 hover:text-accent-gold transition-colors duration-200 relative group py-2"
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

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center">
              <motion.button
                id="btn-mobile-menu-toggle"
                whileTap={{ scale: 0.88 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-cream hover:text-accent-gold focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              id="mobile-drawer-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-forest-dark p-6 shadow-2xl flex flex-col h-full border-l border-accent-gold/20"
            >
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-cream/10">
                <div className="flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-accent-gold animate-pulse" />
                  <span className="font-serif text-md font-bold text-cream tracking-wide">
                    NATURE UDOH & GANG
                  </span>
                </div>
                <motion.button
                  id="btn-mobile-drawer-close"
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full text-cream/70 hover:text-accent-gold transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <motion.div 
                className="flex-1 flex flex-col space-y-4 overflow-y-auto pr-2"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1
                    }
                  }
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
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }
                    }}
                    whileTap={{ scale: 0.98, x: 5, color: '#bf9534' }}
                    className="font-sans text-lg font-medium text-cream/90 hover:text-accent-gold py-2 transition-all block border-b border-cream/5 text-left"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>

              <div className="pt-6 border-t border-cream/10 mt-auto">
                <motion.button
                  id="btn-nav-book-mobile"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-accent-gold hover:bg-accent-gold-light text-forest-dark font-sans font-bold text-md py-3 rounded-xl shadow-lg transition-colors uppercase tracking-wider text-center"
                >
                  Book a Table
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
