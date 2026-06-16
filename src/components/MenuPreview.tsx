/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, Star, Flame, ChevronRight } from 'lucide-react';
import { menuItems } from '../data';

interface MenuPreviewProps {
  onReserveItem: (itemName: string) => void;
}

type MenuCategory = 'grills' | 'barbecue' | 'local' | 'drinks' | 'platters';

export default function MenuPreview({ onReserveItem }: MenuPreviewProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('grills');

  const categories = [
    { id: 'grills', name: 'Grills', emoji: '🔥' },
    { id: 'barbecue', name: 'BBQ', emoji: '🍖' },
    { id: 'local', name: 'Local', emoji: '🍛' },
    { id: 'drinks', name: 'Drinks', emoji: '🍹' },
    { id: 'platters', name: 'Platters', emoji: '🍽️' },
  ];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 sm:py-28 bg-forest relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-forest-dark/15 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mx-auto"
          >
            <Flame className="w-3 h-3" />
            Culinary Board
          </motion.div>
          <motion.h2
            id="menu-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight mt-2 mb-3"
          >
            Our Master Menu
          </motion.h2>
          <p className="font-sans text-sm text-cream-dark/75">
            Made fresh daily from natural hand-farmed ingredients. Reserve a table for any dish!
          </p>
        </div>

        {/* Category Tabs — pill style, scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 scrollbar-none sm:justify-center sm:flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              id={`tab-${cat.id}`}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveCategory(cat.id as MenuCategory)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-sans text-xs font-bold tracking-wide uppercase transition-all duration-250 relative cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-accent-gold text-forest-dark shadow-lg'
                  : 'bg-forest-dark/60 border border-cream/10 text-cream/80'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activeMenuTab"
                  className="absolute inset-0 rounded-full border-2 border-accent-gold-light/60 pointer-events-none"
                  transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                id={`menu-item-${item.id}`}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-2xl overflow-hidden border border-cream/5 hover:border-accent-gold/35 transition-all duration-300 flex flex-col card-glow group"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
                  
                  {/* Rating */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-forest-dark/85 backdrop-blur-md border border-accent-gold/20">
                    <Star className="w-3 h-3 fill-accent-gold text-accent-gold" />
                    <span className="font-sans text-[10px] text-cream font-bold">5.0</span>
                  </div>

                  {item.isPopular && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-gold text-forest-dark font-sans text-[10px] font-black uppercase tracking-wide shadow">
                      <Sparkles className="w-2.5 h-2.5" />
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow text-left justify-between gap-4">
                  <div>
                    {item.tags && (
                      <div className="flex flex-wrap gap-1 mb-2.5">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="font-sans text-[9px] font-bold tracking-widest text-accent-gold uppercase bg-accent-gold/10 border border-accent-gold/25 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-cream group-hover:text-accent-gold transition-colors duration-300 leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-sans text-base font-extrabold text-accent-gold-light shrink-0">{item.price}</span>
                    </div>
                    <p className="font-sans text-xs text-cream-dark/80 leading-relaxed line-clamp-3">{item.description}</p>
                  </div>

                  <motion.button
                    id={`btn-reserve-item-${item.id}`}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onReserveItem(item.name)}
                    className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-accent-gold border border-accent-gold/35 text-cream hover:text-forest-dark font-sans font-bold text-xs py-3 rounded-xl transition-all uppercase tracking-wider cursor-pointer touch-active"
                  >
                    <Utensils className="w-3.5 h-3.5" />
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
