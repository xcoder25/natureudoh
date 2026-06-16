/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';
import { testimonialsData } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play reviews carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const currentReview = testimonialsData[activeIndex];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-forest-dark relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-forest-light/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/50 border border-accent-gold/40 mb-4"
          >
            <MessageSquare className="w-4 h-4 text-accent-gold" />
            <span className="font-sans text-xs font-semibold text-cream uppercase tracking-wider">
              Patron Reviews
            </span>
          </motion.div>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mb-6"
          >
            Loved By The Gang
          </motion.h2>
          <div className="w-20 h-1 bg-accent-gold mx-auto rounded" />
        </div>

        {/* Carousel Box */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
          
          {/* Main Card Assembly */}
          <div className="relative bg-forest/30 border border-cream/5 rounded-3xl p-8 sm:p-14 shadow-2xl backdrop-blur-sm overflow-hidden min-h-[300px] flex items-center justify-center">
            
            {/* Background design quotes */}
            <span className="absolute -top-8 -left-4 font-serif text-[180px] sm:text-[240px] leading-none text-cream/5 font-bold select-none pointer-events-none">
              “
            </span>
            <span className="absolute -bottom-24 -right-4 font-serif text-[180px] sm:text-[240px] leading-none text-cream/5 font-bold select-none pointer-events-none">
              ”
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Visual Stars */}
                <div className="flex items-center space-x-1 mb-6 text-accent-gold">
                  {Array.from({ length: currentReview.rating }).map((_, step) => (
                    <Star key={step} className="w-5 h-5 fill-accent-gold" />
                  ))}
                </div>

                {/* Review Message Text */}
                <blockquote className="font-serif text-lg sm:text-2xl font-light text-cream leading-relaxed mb-8 italic max-w-2xl">
                  "{currentReview.comment}"
                </blockquote>

                {/* Author Block */}
                <div className="flex items-center space-x-4">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full border border-accent-gold shadow-lg object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-serif text-md sm:text-lg font-bold text-cream">
                      {currentReview.name}
                    </h4>
                    <p className="font-sans text-xs text-accent-gold font-semibold tracking-wider uppercase">
                      {currentReview.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center space-x-8 mt-10">
            <button
              id="btn-review-prev"
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-forest-dark border border-accent-gold/40 text-cream hover:text-accent-gold hover:border-accent-gold transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center space-x-2.5">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-accent-gold' : 'w-2 bg-cream/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="btn-review-next"
              onClick={handleNext}
              className="p-3.5 rounded-full bg-forest-dark border border-accent-gold/40 text-cream hover:text-accent-gold hover:border-accent-gold transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
