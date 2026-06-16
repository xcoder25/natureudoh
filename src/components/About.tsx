/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Flame, Trophy, Leaf } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '500+', label: 'Happy Guests' },
    { value: '8hr', label: 'Smoke Sessions' },
    { value: '5★', label: 'Avg Rating' },
  ];

  const features = [
    {
      icon: Flame,
      title: 'Certified Oak Pitmasters',
      description: 'Dishes grilled exclusively over hardwood embers, dry-rubbed, and slow-aged.',
    },
    {
      icon: Trophy,
      title: 'Heritage Taste Profiles',
      description: 'Traditional native spice routes combined with international barbecue styles.',
    },
    {
      icon: ChefHat,
      title: 'Master Botanical Lounge',
      description: 'Lush natural plant species paired with golden luxury lighting for comfort.',
    },
    {
      icon: Leaf,
      title: 'Farm Fresh Ingredients',
      description: 'Sourced fresh daily from local farms and handpicked herb gardens.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-28 bg-forest-dark relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-forest-light/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-12 left-0 w-64 h-64 bg-accent-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              <Flame className="w-3 h-3" />
              The Essence of the Gang
            </motion.div>

            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight mb-5 leading-[1.15]"
            >
              A Symphony of Flavor,{' '}
              <span className="text-accent-gold italic">Nature</span> &amp; Friendship
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-cream-dark/85 leading-relaxed space-y-4 mb-8"
            >
              <p>
                <strong className="text-cream">Nature Udoh and The Gang</strong> is more than a restaurant and lounge. It is a destination where friends, families, and communities gather to enjoy exceptional food, expertly grilled specialties, and memorable events.
              </p>
              <p>
                Tucked inside a lush, meticulously designed green garden, we blend the rustic charm of traditional wood-fire grilling with modern hospitality luxury. Our kitchen pays homage to slow-smoke techniques while our mixologists spin fresh botanicals into stellar experiences.
              </p>
            </motion.div>

            {/* Mobile Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-6 mb-8 w-full"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-start">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-accent-gold leading-none">{stat.value}</span>
                  <span className="font-sans text-[10px] sm:text-xs text-cream/60 uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Feature grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.12 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-5 border-t border-cream/10"
            >
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
                  }}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-forest/25 border border-transparent hover:border-accent-gold/10 transition-all duration-300 cursor-default"
                >
                  <div className="p-2 bg-forest rounded-lg border border-accent-gold/20 text-accent-gold shrink-0">
                    <feat.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-cream uppercase tracking-wide mb-0.5">{feat.title}</h4>
                    <p className="font-sans text-[11px] text-cream/65 leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image Collage */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative w-full max-w-[420px] mx-auto" style={{ aspectRatio: '1/1' }}>

              {/* Back image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-2 left-2 w-[68%] h-[68%] rounded-2xl overflow-hidden border border-accent-gold/20 shadow-2xl z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                  alt="Outdoor Garden Friends"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-90"
                />
              </motion.div>

              {/* Front image */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40, rotate: 1.5 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-2 right-2 w-[62%] h-[62%] rounded-2xl overflow-hidden border-2 border-accent-gold shadow-2xl z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Sizzling Grills BBQ"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Accent image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-3 right-5 w-[36%] h-[36%] rounded-xl overflow-hidden border border-accent-gold/50 shadow-2xl z-30"
              >
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
                  alt="Lounge Cocktails"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gold corner decorations */}
              <div className="absolute -bottom-3 left-4 w-16 h-16 border-b-2 border-l-2 border-accent-gold/40 rounded-bl-2xl pointer-events-none" />
              <div className="absolute top-4 right-0 w-12 h-12 border-t-2 border-r-2 border-accent-gold/25 rounded-tr-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
