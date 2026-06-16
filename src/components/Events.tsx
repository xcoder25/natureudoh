/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Ticket, ArrowRight, Flame } from 'lucide-react';
import { eventsData } from '../data';

interface EventsProps {
  onBookEvent: (eventTitle: string, eventDate: string) => void;
}

export default function Events({ onBookEvent }: EventsProps) {
  return (
    <section id="events" className="py-16 sm:py-28 bg-forest-dark relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-forest-light/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <Calendar className="w-3 h-3" />
            Social Calendar
          </motion.div>
          <motion.h2
            id="events-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight mt-2 mb-3"
          >
            Gatherings &amp; Event Evenings
          </motion.h2>
          <p className="font-sans text-sm text-cream-dark/80">
            Never a dull moment with the Gang. Join us for themed culinary events, music assemblies, and customized VIP packages.
          </p>
        </div>

        {/* Events — stacked on mobile, 2-col on tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {eventsData.map((ev, index) => (
            <motion.div
              key={ev.id}
              id={`event-card-${ev.id}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card rounded-3xl overflow-hidden border border-cream/5 hover:border-accent-gold/25 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-accent-gold text-forest-dark text-[10px] font-black uppercase tracking-wider shadow">
                  {ev.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow text-left gap-4">
                <div className="flex-grow">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-cream mb-3 group-hover:text-accent-gold transition-colors duration-300 leading-snug">
                    {ev.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-cream-dark/80 leading-relaxed mb-4 line-clamp-3">{ev.description}</p>

                  {/* Meta */}
                  <div className="space-y-2 pb-4 border-b border-cream/8">
                    <div className="flex items-center gap-2.5 text-xs text-cream/70">
                      <Calendar className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                      <span className="font-sans font-medium">{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-cream/70">
                      <Clock className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                      <span className="font-sans">{ev.time}</span>
                    </div>
                    {ev.priceInfo && (
                      <div className="flex items-center gap-2.5 text-xs">
                        <Ticket className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                        <span className="font-sans font-bold text-accent-gold-light">{ev.priceInfo}</span>
                      </div>
                    )}
                  </div>
                </div>

                <motion.button
                  id={`btn-book-event-${ev.id}`}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onBookEvent(ev.title, ev.date)}
                  className="w-full flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-forest-dark font-sans font-extrabold text-xs py-3.5 rounded-2xl transition-all uppercase tracking-wider cursor-pointer touch-active shadow-lg"
                >
                  <span>Inquire / RSVP Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
