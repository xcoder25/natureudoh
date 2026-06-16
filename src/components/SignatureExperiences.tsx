/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Flame, ChevronRight } from 'lucide-react';
import { signatureExperiences } from '../data';

export default function SignatureExperiences() {
  return (
    <section id="experiences" className="py-16 sm:py-28 bg-forest-dark relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-forest-light/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <Flame className="w-3 h-3" />
            The Gang Experience
          </motion.div>
          <motion.h2
            id="experiences-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight mt-2 mb-3"
          >
            Signature Dimensions of Nature Udoh
          </motion.h2>
          <div className="section-divider" />
        </div>

        {/* Experience Blocks */}
        <div className="space-y-16 sm:space-y-28">
          {signatureExperiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className={`lg:col-span-6 relative ${isEven ? 'lg:order-first' : 'lg:order-last'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-cream/5 group cursor-pointer"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />

                    {/* Floating tag */}
                    <div className="absolute top-4 left-4 glass-card-gold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-lg">
                      <Flame className="w-3.5 h-3.5 text-accent-gold" />
                      <span className="font-sans text-xs font-bold text-cream uppercase tracking-wider">{exp.tag}</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="lg:col-span-6 flex flex-col items-start text-left"
                >
                  <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.25em] text-accent-gold uppercase mb-2">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-3xl font-bold text-cream leading-tight mb-4">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-sm text-cream-dark/85 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                    {exp.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-accent-gold/12 border border-accent-gold/30 flex items-center justify-center text-accent-gold shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-sans text-xs sm:text-sm text-cream-dark/85 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
