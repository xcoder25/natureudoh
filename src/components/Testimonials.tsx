/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare, Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    setTimeout(() => setIsPaused(false), 8000);
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? handleNext() : handlePrev();
    }
    touchStartX.current = null;
  };

  const current = testimonialsData[activeIndex];

  return (
    <section id="reviews" className="py-16 sm:py-28 bg-forest-dark relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-forest-light/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <MessageSquare className="w-3 h-3" />
            Patron Reviews
          </motion.div>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight mt-2 mb-3"
          >
            Loved By The Gang
          </motion.h2>
          <div className="section-divider" />
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main card */}
          <div className="glass-card rounded-3xl p-6 sm:p-12 shadow-2xl overflow-hidden relative min-h-[280px] sm:min-h-[340px] flex items-center justify-center">
            {/* Big quote mark */}
            <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-16 sm:h-16 text-cream/5" strokeWidth={1} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.38 }}
                className="relative z-10 flex flex-col items-center text-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="font-serif text-base sm:text-xl font-light text-cream leading-relaxed mb-6 sm:mb-8 italic max-w-2xl">
                  "{current.comment}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-accent-gold shadow-lg object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-cream">{current.name}</h4>
                    <p className="font-sans text-[10px] sm:text-xs text-accent-gold font-semibold tracking-wider uppercase">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="mt-4 px-1">
            <div className="h-0.5 bg-cream/10 rounded-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                  className="progress-bar"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6 sm:mt-8">
            <button
              id="btn-review-prev"
              onClick={handlePrev}
              className="p-3 rounded-full bg-forest border border-accent-gold/35 text-cream hover:text-accent-gold hover:border-accent-gold transition-all cursor-pointer touch-active active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setActiveIndex(idx); setIsPaused(true); setTimeout(() => setIsPaused(false), 8000); }}
                  className={`h-2 rounded-full transition-all duration-300 touch-active ${
                    activeIndex === idx ? 'w-7 bg-accent-gold' : 'w-2 bg-cream/25'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="btn-review-next"
              onClick={handleNext}
              className="p-3 rounded-full bg-forest border border-accent-gold/35 text-cream hover:text-accent-gold hover:border-accent-gold transition-all cursor-pointer touch-active active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Swipe hint on mobile */}
          <p className="text-center font-sans text-[10px] text-cream/30 mt-3 sm:hidden">Swipe left or right to browse</p>
        </div>
      </div>
    </section>
  );
}
