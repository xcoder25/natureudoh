/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Flame, ShieldCheck, Trophy } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Flame,
      title: 'Certified Oak Pitmasters',
      description: 'Dishes grilled exclusively over hard wood embers, dry-rubbed, and slow-aged.'
    },
    {
      icon: Trophy,
      title: 'Heritage Taste Profiles',
      description: 'Traditional native spice routes combined with international barbecue styles.'
    },
    {
      icon: ChefHat,
      title: 'Master Botanical Lounge',
      description: 'Lush natural plant species paired with golden luxury lighting for comfort.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-forest-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-forest-light/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-12 left-0 w-64 h-64 bg-accent-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Brand Story & Text Content (5 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs sm:text-sm font-bold tracking-[0.3em] text-accent-gold uppercase mb-4"
            >
              The Essence of the Gang
            </motion.span>
            
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mb-8 leading-[1.15]"
            >
              A Symphony of Flavor, <span className="text-accent-gold italic font-serif">Nature</span> & Friendship
            </motion.h2>

            <motion.div
              id="about-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-md sm:text-lg text-cream-dark/95 leading-relaxed space-y-6 mb-12"
            >
              <p>
                <strong>Nature Udoh and The Gang</strong> is more than a restaurant and lounge. It is a destination where friends, families, and communities gather to enjoy exceptional food, expertly grilled specialties, refreshing drinks, live music, and memorable events.
              </p>
              <p>
                Tucked away inside a lush, meticulously designed green garden, we blend the rustic charm of traditional wood-fire open grilling with modern hospitality luxury. Our kitchen pays homage to slow-smoke techniques while our mixologists spin fresh botanicals into stellar liquid experiences.
              </p>
            </motion.div>

            {/* Premium feature grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-4 border-t border-cream/10"
            >
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex-col items-start text-left group p-3 rounded-xl hover:bg-forest/20 hover:border-accent-gold/10 border border-transparent transition-all duration-305 cursor-default"
                >
                  <div className="p-2 bg-forest rounded-lg border border-accent-gold/20 group-hover:border-accent-gold/65 group-hover:bg-accent-gold/10 mb-3 text-accent-gold transition-colors duration-300">
                    <feat.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-sans font-semibold text-xs sm:text-sm text-cream tracking-wide uppercase mb-1 group-hover:text-accent-gold transition-colors duration-300">
                    {feat.title}
                  </h4>
                  <p className="font-sans text-xs text-cream/70 leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: High-Fashion Overlapping Image Collage (6 cols on lg) */}
          <div className="lg:col-span-6 relative mt-16 lg:mt-0 px-6 sm:px-12 lg:px-0">
            <div className="relative w-full aspect-square max-w-[460px] sm:max-w-[500px] mx-auto">
              
              {/* Back Image: Garden atmosphere (large, base level) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileTap={{ scale: 1.04, zIndex: 40, rotate: -1 }}
                className="absolute top-2 left-2 w-[68%] h-[68%] rounded-2xl overflow-hidden border border-accent-gold/20 shadow-2xl z-10 cursor-pointer transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                  alt="Outdoor Garden Friends"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-92"
                />
              </motion.div>
 
              {/* Front Right Image: Live Rib grilling (overlap level) */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50, rotate: 1 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileTap={{ scale: 1.04, zIndex: 40, rotate: 0 }}
                className="absolute bottom-2 right-2 w-[63%] h-[63%] rounded-2xl overflow-hidden border-2 border-accent-gold shadow-2xl z-20 cursor-pointer transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Sizzling Grills BBQ Close-up"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
 
              {/* Smaller floating accent photo: Cocktail sunset (top-right, floating visual) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileTap={{ scale: 1.05, zIndex: 40, y: -4 }}
                className="absolute top-3 right-6 w-[38%] h-[38%] rounded-2xl overflow-hidden border border-accent-gold/40 shadow-2xl z-30 cursor-pointer transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
                  alt="Lounge Drinks Cocktail Twilight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-105"
                />
              </motion.div>
 
              {/* Abstract decorative graphic elements (gold frame corner) */}
              <div className="absolute -bottom-2 left-6 w-24 h-24 border-b-2 border-l-2 border-accent-gold/40 rounded-bl-3xl pointer-events-none" />
              <div className="absolute top-6 right-1 w-16 h-16 border-t-2 border-r-2 border-accent-gold/25 rounded-tr-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
