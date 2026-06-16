/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Calendar, ChevronDown, Flame, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onViewMenu: () => void;
}

export default function Hero({ onOpenBooking, onViewMenu }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-end sm:items-center justify-center overflow-hidden pb-28 sm:pb-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1920&q=80"
          alt="Nature Udoh and The Gang Venue"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 brightness-[0.4]"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/40 to-forest-dark/90 sm:bg-gradient-to-r sm:from-forest-dark/95 sm:via-forest-dark/75 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-black/40" />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-accent-gold/8 rounded-full filter blur-[100px] pointer-events-none" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-accent-gold/50 animate-pulse" />
          <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 rounded-full bg-accent-gold/70 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/3 left-[40%] w-2 h-2 rounded-full bg-accent-gold/40 animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute top-1/2 right-[35%] w-1 h-1 rounded-full bg-cream/40 animate-pulse" style={{ animationDuration: '4s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-12 sm:pb-0 pt-24 sm:pt-0 flex flex-col items-center sm:items-start text-center sm:text-left">
        
        {/* Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-dark/80 border border-accent-gold/35 backdrop-blur-md mb-5 sm:mb-6"
        >
          <Flame className="w-3.5 h-3.5 text-accent-gold animate-pulse" />
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-cream uppercase">
            Barbecue · Garden Lounge · Live Entertainment
          </span>
        </motion.div>

        {/* Rating stars — mobile trust signal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 mb-4 sm:mb-5"
        >
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-3.5 h-3.5 fill-accent-gold text-accent-gold" />
            ))}
          </div>
          <span className="font-sans text-xs text-cream/70 font-medium">4.9 · 500+ happy guests</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="hero-title font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-rose-50 mb-4 sm:mb-5 tracking-tight leading-[1.08] text-balance"
        >
          Welcome to<br />
          <span className="shimmer-gold filter drop-shadow">Nature Udoh</span>{' '}
          <span className="text-cream font-medium">&amp; The Gang</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          id="hero-subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}
          className="font-sans text-sm sm:text-lg text-cream-dark/85 leading-relaxed max-w-xl mb-8 sm:mb-10 text-balance"
        >
          Where Great Food, Live Entertainment, Premium Drinks, and Unforgettable Moments Come Together in Lekki, Lagos.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          id="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <motion.button
            id="hero-btn-book"
            onClick={onOpenBooking}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2.5 bg-accent-gold hover:bg-accent-gold-light text-forest-dark font-sans font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-2xl transition-colors tracking-wider uppercase cursor-pointer touch-active"
            style={{ boxShadow: '0 8px 32px rgba(212,160,23,0.4)' }}
          >
            <Calendar className="w-4.5 h-4.5" />
            <span>Book a Table</span>
          </motion.button>
          
          <motion.button
            id="hero-btn-menu"
            onClick={onViewMenu}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2.5 bg-white/8 text-cream font-sans font-semibold text-sm sm:text-base px-8 py-4 rounded-2xl border border-cream/30 hover:border-accent-gold hover:bg-white/12 transition-all tracking-wider uppercase cursor-pointer backdrop-blur-sm touch-active"
          >
            <BookOpen className="w-4.5 h-4.5" />
            <span>View Menu</span>
          </motion.button>
        </motion.div>

        {/* Mobile trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center gap-4 mt-6 sm:mt-8"
        >
          {['Free Booking', 'No Deposit', 'Cancel Anytime'].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <span className="font-sans text-[10px] sm:text-xs text-cream/60 font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        id="hero-scroller"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-sans text-[10px] text-cream/40 tracking-widest uppercase mb-1.5">Discover</span>
        <ChevronDown className="w-5 h-5 text-accent-gold" />
      </motion.div>
    </section>
  );
}
