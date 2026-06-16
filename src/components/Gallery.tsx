/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye, Image as ImageIcon, X } from 'lucide-react';
import { galleryData } from '../data';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'food' | 'drinks' | 'lounge' | 'events'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const categories = [
    { value: 'all', label: 'All', emoji: '✨' },
    { value: 'food', label: 'Feasts', emoji: '🔥' },
    { value: 'drinks', label: 'Cocktails', emoji: '🍹' },
    { value: 'lounge', label: 'Lounge', emoji: '🌿' },
    { value: 'events', label: 'Events', emoji: '🎉' },
  ];

  const filteredItems = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? setLightboxIndex(prev => prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1)
               : setLightboxIndex(prev => prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1);
    }
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="py-16 sm:py-28 bg-forest relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-forest-dark/20 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <ImageIcon className="w-3 h-3" />
            Visual Narrative
          </motion.div>
          <motion.h2
            id="gallery-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight mt-2 mb-3"
          >
            Glimpses of Nature &amp; The Gang
          </motion.h2>
          <p className="font-sans text-sm text-cream-dark/80">
            Step visually into our sanctuary. Real captures of smoky grills, mixology cups, private spaces, and laughing crowds.
          </p>
        </div>

        {/* Filter tabs — scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-7 scrollbar-none sm:justify-center sm:flex-wrap">
          {categories.map(cat => (
            <motion.button
              key={cat.value}
              id={`filter-btn-${cat.value}`}
              whileTap={{ scale: 0.94 }}
              onClick={() => setFilter(cat.value as any)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-sans text-xs font-semibold tracking-wide uppercase transition-all duration-250 shrink-0 cursor-pointer ${
                filter === cat.value
                  ? 'bg-accent-gold text-forest-dark font-bold shadow-lg'
                  : 'bg-forest-dark/50 border border-cream/10 text-cream/80'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Grid — 2 col on mobile, 3 on md, 4 on lg */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isLarge = index === 1 || index === 5;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  id={`gallery-thumb-${item.id}`}
                  onClick={() => setLightboxIndex(index)}
                  whileTap={{ scale: 0.96 }}
                  className={`group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer border border-cream/5 hover:border-accent-gold/25 transition-all ${
                    isLarge ? 'col-span-2 row-span-1' : ''
                  }`}
                  style={{ aspectRatio: isLarge ? '2/1' : '1/1' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-forest-dark/20 group-hover:bg-forest-dark/65 transition-all duration-300" />

                  {/* Hover content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-full bg-accent-gold/25 backdrop-blur-md border border-accent-gold/60 text-accent-gold">
                      <Eye className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-[9px] font-bold tracking-widest text-accent-gold uppercase">{item.category}</span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-cream leading-snug">{item.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 bg-black/97 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          >
            {/* Close */}
            <button
              id="btn-lightbox-close"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-forest-dark/60 border border-cream/20 text-cream hover:text-accent-gold transition-colors z-50 cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Nav arrows */}
            <button
              id="btn-lightbox-prev"
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 p-2.5 sm:p-3 rounded-full bg-forest-dark/50 border border-cream/10 text-cream hover:text-accent-gold transition-colors z-50 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
            <button
              id="btn-lightbox-next"
              onClick={handleNext}
              className="absolute right-2 sm:right-6 p-2.5 sm:p-3 rounded-full bg-forest-dark/50 border border-cream/10 text-cream hover:text-accent-gold transition-colors z-50 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Image */}
            <motion.div
              id="lightbox-content"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center gap-4"
            >
              <div className="rounded-xl overflow-hidden border border-cream/10 shadow-2xl">
                <img
                  src={filteredItems[lightboxIndex]?.image}
                  alt={filteredItems[lightboxIndex]?.title}
                  referrerPolicy="no-referrer"
                  className="object-contain max-h-[70vh] max-w-full block"
                />
              </div>
              <div className="text-center text-cream">
                <span className="font-sans text-[10px] font-bold tracking-widest text-accent-gold uppercase block">{filteredItems[lightboxIndex]?.category}</span>
                <h3 className="font-serif text-base sm:text-lg font-bold">{filteredItems[lightboxIndex]?.title}</h3>
                {filteredItems[lightboxIndex]?.description && (
                  <p className="font-sans text-xs text-cream-dark/75 mt-1">{filteredItems[lightboxIndex].description}</p>
                )}
              </div>
              <p className="font-sans text-[10px] text-cream/30 sm:hidden">Swipe to navigate</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
