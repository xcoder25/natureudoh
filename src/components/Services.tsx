/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Flame, Utensils, GlassWater, CalendarDays, PartyPopper, Briefcase, Music, Trees, ChevronRight } from 'lucide-react';
import { servicesData } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Flame, Utensils, GlassWater, CalendarDays, PartyPopper, Briefcase, Music, Trees,
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-28 bg-forest relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-forest-dark/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="px-5 sm:px-6 lg:px-8 mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            <Flame className="w-3 h-3" />
            Our Offerings
          </motion.div>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight mt-1 mb-3"
          >
            Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-cream-dark/75 max-w-2xl"
          >
            Whether you're here for a smoky grill, an intimate dinner, or a massive birthday bash — we've got you covered.
          </motion.p>

          {/* Mobile scroll hint */}
          <div className="flex items-center gap-2 mt-3 sm:hidden">
            <span className="font-sans text-[10px] text-cream/40 uppercase tracking-widest">Swipe to explore</span>
            <ChevronRight className="w-3 h-3 text-cream/40 swipe-hint" />
          </div>
        </div>

        {/* Mobile: horizontal scroll · Desktop: grid */}
        <div className="sm:hidden h-scroll-track px-5">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Flame;
            return (
              <div
                key={service.id}
                id={`service-card-mobile-${service.id}`}
                className="relative w-[220px] h-[300px] rounded-2xl overflow-hidden border border-cream/5 flex flex-col justify-end p-5 flex-shrink-0 cursor-default"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-[0.35]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/70 to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="p-2 bg-accent-gold/15 border border-accent-gold/30 rounded-xl text-accent-gold w-fit mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-cream mb-1.5">{service.title}</h3>
                  <p className="font-sans text-xs text-cream-dark/80 leading-relaxed line-clamp-3">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Flame;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative h-[340px] rounded-2xl overflow-hidden border border-cream/5 flex flex-col justify-end p-6 cursor-default card-glow transition-all duration-300"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.35]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/75 to-transparent" />
                  <div className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl border border-accent-gold/30 z-0 pointer-events-none" />
                </div>
                <div className="relative z-10 flex flex-col items-start text-left h-full justify-between">
                  <div className="p-3 bg-accent-gold/10 group-hover:bg-accent-gold border border-accent-gold/40 group-hover:border-accent-gold rounded-xl transition-all duration-300 text-accent-gold group-hover:text-forest-dark shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-cream mb-2 group-hover:text-accent-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-cream-dark/80 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
