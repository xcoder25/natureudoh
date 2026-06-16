/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye, Image as ImageIcon, X } from 'lucide-react';
import { galleryData } from '../data';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'food' | 'drinks' | 'lounge' | 'events'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'food', label: 'Feasts & Grills' },
    { value: 'drinks', label: 'Cocktails' },
    { value: 'lounge', label: 'Green Lounge' },
    { value: 'events', label: 'Gatherings' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-forest relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-forest-dark/20 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest-dark/50 border border-accent-gold/30 mb-4"
          >
            <ImageIcon className="w-3.5 h-3.5 text-accent-gold" />
            <span className="font-sans text-xs font-semibold text-cream uppercase tracking-wider">
              Visual Narrative
            </span>
          </motion.div>
          <motion.h2
            id="gallery-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mb-6"
          >
            Glimpses of Nature & The Gang
          </motion.h2>
          <p className="font-sans text-sm sm:text-md text-cream-dark/85">
            Step visually into our sanctuary. Browse real captures of smoky grills, refreshing mixology cups, private spaces, and laughing crowds.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat.value}
              id={`filter-btn-${cat.value}`}
              whileTap={{ scale: 0.94 }}
              onClick={() => setFilter(cat.value as any)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                filter === cat.value
                  ? 'bg-accent-gold text-forest-dark font-bold shadow-lg'
                  : 'bg-forest-dark/50 border border-cream/10 text-cream hover:bg-forest-light'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* CSS Masonry-styled organic grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Custom spanning logic to simulate an organic masonry layout
              const isLarge = index === 1 || index === 5;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  id={`gallery-thumb-${item.id}`}
                  onClick={() => setLightboxIndex(index)}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative overflow-hidden rounded-2xl cursor-zoom-in shadow-md border border-cream/5 aspect-square md:aspect-auto ${
                    isLarge ? 'md:col-span-2 md:row-span-1 md:h-[420px]' : 'md:h-[260px]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  
                  {/* Subtle twilight glow overlay */}
                  <div className="absolute inset-0 bg-forest-dark/30 group-hover:bg-forest-dark/75 opacity-70 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Eyeball / Title Cover on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-accent-gold/20 backdrop-blur-md border border-accent-gold text-accent-gold-light group-hover:scale-105 transition-transform duration-300">
                      <Eye className="w-5 h-5 text-accent-gold" />
                    </div>
                    
                    <span className="font-sans text-[10px] font-bold tracking-widest text-accent-gold uppercase mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-md sm:text-lg font-bold text-cream">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Component */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              id="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            >
              {/* Close Button */}
              <motion.button
                id="btn-lightbox-close"
                whileTap={{ scale: 0.85 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-forest-dark/50 border border-cream/20 text-cream hover:text-accent-gold hover:border-accent-gold transition-colors block z-50 cursor-pointer"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>

              {/* Navigation Arrows */}
              <motion.button
                id="btn-lightbox-prev"
                whileTap={{ scale: 0.85 }}
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-forest-dark/40 border border-cream/10 text-cream hover:text-accent-gold transition-colors z-50 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>

              <motion.button
                id="btn-lightbox-next"
                whileTap={{ scale: 0.85 }}
                onClick={handleNext}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-forest-dark/40 border border-cream/10 text-cream hover:text-accent-gold transition-colors z-50 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>

              {/* Central Box */}
              <motion.div
                id="lightbox-content"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl max-h-[80vh] w-full flex flex-col justify-center items-center"
              >
                <div className="relative aspect-auto max-h-[70vh] rounded-xl overflow-hidden border border-cream/10 shadow-2xl bg-forest-dark">
                  <img
                    src={filteredItems[lightboxIndex]?.image}
                    alt={filteredItems[lightboxIndex]?.title}
                    referrerPolicy="no-referrer"
                    className="object-contain max-h-[70vh] max-w-full block"
                  />
                </div>

                {/* Lightbox Description Strip */}
                <div className="mt-4 text-center max-w-xl text-cream px-2">
                  <span className="font-sans text-xs font-semibold tracking-widest text-accent-gold uppercase block mb-1">
                    {filteredItems[lightboxIndex]?.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold mb-1">
                    {filteredItems[lightboxIndex]?.title}
                  </h3>
                  {filteredItems[lightboxIndex]?.description && (
                    <p className="font-sans text-xs sm:text-sm text-cream-dark/80">
                      {filteredItems[lightboxIndex].description}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
