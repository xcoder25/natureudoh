/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Flame, Utensils, GlassWater, CalendarDays, PartyPopper, Briefcase, Music, Trees } from 'lucide-react';
import { servicesData } from '../data';

// Map icon string to Lucide component
const iconMap: Record<string, React.ComponentType<any>> = {
  Flame: Flame,
  Utensils: Utensils,
  GlassWater: GlassWater,
  CalendarDays: CalendarDays,
  PartyPopper: PartyPopper,
  Briefcase: Briefcase,
  Music: Music,
  Trees: Trees,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-forest relative overflow-hidden">
      {/* Decorative floral/ambient background details */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-forest-dark/20 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left max-w-3xl mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs sm:text-sm font-bold tracking-[0.3em] text-accent-gold uppercase"
          >
            Our Offerings
          </motion.span>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mt-3 mb-6"
          >
            Premium Services We Provide
          </motion.h2>
          <motion.p
            id="services-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-md sm:text-lg text-cream-dark/80"
          >
            Whether you are stopping by for a smoky grill basket, an intimate date under the fairy lights, or looking to throw a massive social birthday bash, Nature Udoh and The Gang has tailored hospitality options to elevate your moment.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Flame;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative h-[360px] rounded-2xl overflow-hidden shadow-xl border border-cream/5 flex flex-col justify-end p-6 cursor-default"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.35]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/75 to-transparent/30" />
                  <div className="absolute inset-0 bg-forest-dark/20 group-hover:opacity-0 transition-opacity duration-300" />
                  {/* Hover Accent Glow */}
                  <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl border-2 border-accent-gold-light/40 z-0 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start text-left h-full justify-between">
                  {/* Floating Icon Box */}
                  <div className="p-3 bg-accent-gold/10 group-hover:bg-accent-gold border border-accent-gold/40 group-hover:border-accent-gold-light rounded-xl transition-all duration-300 text-accent-gold group-hover:text-forest-dark shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mb-2 group-hover:text-accent-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-cream-dark/85 leading-relaxed">
                      {service.description}
                    </p>
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
