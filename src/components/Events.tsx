/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Ticket, Star, ArrowUpRight } from 'lucide-react';
import { eventsData } from '../data';

interface EventsProps {
  onBookEvent: (eventTitle: string, eventDate: string) => void;
}

export default function Events({ onBookEvent }: EventsProps) {
  return (
    <section id="events" className="py-24 sm:py-32 bg-forest-dark relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-forest-light/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

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
            Social Calendar
          </motion.span>
          <motion.h2
            id="events-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mt-3 mb-6"
          >
            Gatherings & Event Evenings
          </motion.h2>
          <p className="font-sans text-sm sm:text-md text-cream-dark/85">
            Never a dull moment with the Gang. Join us for our themed culinary events, music assemblies, and customized VIP packages under the open sky.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {eventsData.map((ev, index) => (
            <motion.div
              key={ev.id}
              id={`event-card-${ev.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-forest/40 rounded-3xl overflow-hidden border border-cream/5 flex flex-col md:flex-row h-full shadow-lg hover:border-accent-gold/30 hover:shadow-2xl hover:bg-forest/50 transition-all group duration-300"
            >
              {/* Event Image Banner (takes 40% width on md) */}
              <div className="relative md:w-2/5 aspect-video md:aspect-auto min-h-[220px] overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-forest-dark/90 via-transparent to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-accent-gold text-forest-dark text-xs font-bold leading-none shadow-lg">
                  <span className="uppercase tracking-wider text-[10px] sm:text-xs">
                    {ev.tag}
                  </span>
                </div>
              </div>

              {/* Event Content (takes 60% width on md) */}
              <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between text-left h-full">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mb-4 group-hover:text-accent-gold transition-colors duration-300">
                    {ev.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-cream-dark/85 leading-relaxed mb-6">
                    {ev.description}
                  </p>

                  {/* Metadata block (Date, Time, Price) */}
                  <div className="space-y-2.5 mb-6 pb-5 border-b border-cream/10">
                    <div className="flex items-center text-xs sm:text-sm text-cream/70">
                      <Calendar className="w-4 h-4 text-accent-gold shrink-0 mr-3" />
                      <span className="font-sans font-medium">{ev.date}</span>
                    </div>

                    <div className="flex items-center text-xs sm:text-sm text-cream/70">
                      <Clock className="w-4 h-4 text-accent-gold shrink-0 mr-3" />
                      <span className="font-sans">{ev.time}</span>
                    </div>

                    {ev.priceInfo && (
                      <div className="flex items-center text-xs sm:text-sm text-cream/70">
                        <Ticket className="w-4 h-4 text-accent-gold shrink-0 mr-3" />
                        <span className="font-sans font-bold text-accent-gold-light">{ev.priceInfo}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Reservation Action Button */}
                <motion.button
                  id={`btn-book-event-${ev.id}`}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onBookEvent(ev.title, ev.date)}
                  className="inline-flex items-center justify-center space-x-2 w-full bg-accent-gold hover:bg-accent-gold-light text-forest-dark font-sans font-bold text-xs sm:text-sm py-3 px-5 rounded-2xl shadow-md transition-all hover:translate-x-0.5 uppercase tracking-wider cursor-pointer"
                >
                  <span>Inquire / RSVP Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
