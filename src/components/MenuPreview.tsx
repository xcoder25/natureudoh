/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, Star, Flame } from 'lucide-react';
import { menuItems } from '../data';

interface MenuPreviewProps {
  onReserveItem: (itemName: string) => void;
}

type MenuCategory = 'grills' | 'barbecue' | 'local' | 'drinks' | 'platters';

export default function MenuPreview({ onReserveItem }: MenuPreviewProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('grills');

  const categories = [
    { id: 'grills', name: 'Al-Fresco Grills' },
    { id: 'barbecue', name: 'Hickory Barbecue' },
    { id: 'local', name: 'Local Specialties' },
    { id: 'drinks', name: 'Lounge Elixirs' },
    { id: 'platters', name: 'Gang Platters' }
  ];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-forest relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-forest-dark/15 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-accent-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs sm:text-sm font-bold tracking-[0.3em] text-accent-gold uppercase"
          >
            Culinary Board
          </motion.span>
          <motion.h2
            id="menu-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mt-3 mb-6"
          >
            Our Master Menu Preview
          </motion.h2>
          <p className="font-sans text-sm sm:text-md text-cream-dark/80">
            A curated glimpse of our sizzlers, smokes, native pairings, and signature libations. Made fresh daily from natural hand-farmed ingredients.
          </p>
        </div>

        {/* Categories Tab Selector with Smooth Mobile Horizontal-Scroll Track */}
        <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 gap-2.5 sm:gap-4 mb-12 max-w-4xl mx-auto -mx-4 px-4 sm:mx-auto sm:px-0 scrollbar-none snap-x snap-mandatory">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              id={`tab-${cat.id}`}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveCategory(cat.id as MenuCategory)}
              className={`px-4 sm:px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 relative cursor-pointer shrink-0 snap-center ${
                activeCategory === cat.id
                  ? 'bg-accent-gold text-forest-dark shadow-xl font-bold'
                  : 'bg-forest-dark/70 border border-cream/10 text-cream hover:bg-forest-light'
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activeMenuTab"
                  className="absolute inset-0 rounded-full border-2 border-accent-gold-light pointer-events-none"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Menu Items Grid with Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                id={`menu-item-${item.id}`}
                className="bg-forest-dark/60 rounded-2xl overflow-hidden border border-cream/5 hover:border-accent-gold/40 transition-colors duration-300 flex flex-col h-full hover:shadow-2xl group group/card relative"
              >
                {/* Image Aspect Box */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
                  
                  {/* Rating / Left Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-1 px-3 py-1 rounded-full bg-forest-dark/85 backdrop-blur-md border border-accent-gold/25">
                    <Star className="w-3 h-3 fill-accent-gold text-accent-gold" />
                    <span className="font-sans text-xs text-cream font-bold">5.0</span>
                  </div>

                  {/* Top Popular Badge */}
                  {item.isPopular && (
                    <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-accent-gold text-forest-dark font-sans text-xs font-black uppercase tracking-wider shadow-lg">
                      <Sparkles className="w-3 h-3 text-forest-dark" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col flex-grow text-left justify-between">
                  <div>
                    {/* Tags */}
                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="font-sans text-[10px] font-bold tracking-widest text-[#d8ba60] uppercase bg-[#bf9534]/10 border border-[#bf9534]/30 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-cream group-hover/card:text-accent-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="font-sans text-md sm:text-lg font-bold text-accent-gold-light tracking-wide shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-cream-dark/90 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Add action */}
                  <motion.button
                    id={`btn-reserve-item-${item.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onReserveItem(item.name)}
                    className="w-full flex items-center justify-center space-x-2 bg-transparent hover:bg-accent-gold border border-accent-gold/40 text-cream hover:text-forest-dark font-sans font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>Reserve For This</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
