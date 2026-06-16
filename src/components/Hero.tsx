/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Calendar, ChevronDown, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onViewMenu: () => void;
}

export default function Hero({ onOpenBooking, onViewMenu }: HeroProps) {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Premium Dark Overlay and Green Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1920&q=80"
          alt="Nature Udoh and The Gang Venue"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 filter brightness-[0.45]"
        />
        {/* Layer 1: Dark rich radial overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/80 sm:via-forest-dark/70 to-transparent" />
        
        {/* Layer 2: Deep Forest-Dark Vignette at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-black/50" />

        {/* Dynamic ambient green aura */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-light/10 rounded-full filter blur-[120px] pointer-events-none" />

        {/* Floating starlight particles for mobile & desktop magic */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          <div className="absolute top-1/4 left-[15%] w-2.5 h-2.5 rounded-full bg-accent-gold/40 animate-pulse duration-5000 filter blur-[0.5px]" />
          <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 rounded-full bg-accent-gold/60 animate-ping duration-3000" />
          <div className="absolute bottom-1/3 left-[40%] w-2 h-2 rounded-full bg-accent-gold/50 animate-pulse duration-[7000s]" />
          <div className="absolute bottom-1/4 right-[35%] w-2.5 h-2.5 rounded-full bg-accent-gold/30 filter blur-[1px] animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start w-full">
        {/* Sparkly Top Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-forest-dark/90 border border-accent-gold/30 backdrop-blur-md mb-6"
        >
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-gold animate-pulse" />
          <span className="font-sans text-[10px] xs:text-xs sm:text-sm font-semibold tracking-wider text-cream uppercase">
            Barbecue • Garden Lounge • Live Entertainment
          </span>
        </motion.div>
 
        {/* Large Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="font-serif text-[2.2rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-rose-50 mb-5 tracking-tight max-w-4xl text-left leading-[1.1] text-balance"
        >
          Welcome to <br />
          <span className="text-gold-metallic filter drop-shadow">Nature Udoh</span> <br />
          <span className="text-cream font-medium">& The Gang</span>
        </motion.h1>
 
        {/* Subheadline */}
        <motion.p
          id="hero-subheading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className="font-sans text-sm sm:text-lg md:text-xl text-cream-dark/90 leading-relaxed max-w-2xl mb-8 text-left text-balance"
        >
          Where Great Food, Live Entertainment, Premium Drinks, and Unforgettable Moments Come Together.
        </motion.p>
 
        {/* CTA Buttons */}
        <motion.div
          id="hero-actions"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
        >
          <motion.button
            id="hero-btn-book"
            onClick={onOpenBooking}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center space-x-2 bg-accent-gold hover:bg-accent-gold-light text-forest-dark font-sans font-bold text-sm sm:text-base md:text-lg px-8 py-3.5 sm:py-4 rounded-xl shadow-2xl transition-colors tracking-wider uppercase cursor-pointer"
          >
            <Calendar className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            <span>Book a Table</span>
          </motion.button>
          
          <motion.button
            id="hero-btn-menu"
            onClick={onViewMenu}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 253, 245, 0.08)' }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center space-x-2 bg-transparent text-cream font-sans font-semibold text-sm sm:text-base md:text-lg px-8 py-3.5 sm:py-4 rounded-xl border border-cream/40 hover:border-accent-gold transition-colors tracking-wider uppercase cursor-pointer backdrop-blur-sm"
          >
            <BookOpen className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            <span>View Menu</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        id="hero-scroller"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector('#about');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="font-sans text-xs text-cream/50 tracking-widest uppercase mb-2">
          Discover Nature
        </span>
        <ChevronDown className="w-6 h-6 text-accent-gold" />
      </motion.div>
    </section>
  );
}
