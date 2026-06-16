/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Flame } from 'lucide-react';
import { signatureExperiences } from '../data';

export default function SignatureExperiences() {
  return (
    <section id="experiences" className="py-24 sm:py-32 bg-forest-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-forest-light/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs sm:text-sm font-bold tracking-[0.3em] text-accent-gold uppercase"
          >
            The Gang Experience
          </motion.span>
          <motion.h2
            id="experiences-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mt-3 mb-6"
          >
            Signature Dimensions of Nature Udoh
          </motion.h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto rounded" />
        </div>

        {/* Experience Blocks */}
        <div className="space-y-24 sm:space-y-36">
          {signatureExperiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center overflow-hidden`}
              >
                {/* Image side - alternates order on large screens */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-6 relative ${isEven ? 'lg:order-first' : 'lg:order-last'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="relative aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-cream/5 lg:p-1 lg:bg-cream/5 cursor-pointer group"
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating Tag */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-forest-dark/90 border border-accent-gold/40 px-4 py-2 rounded-xl backdrop-blur-md flex items-center space-x-1.5 shadow-lg">
                      <Flame className="w-3.5 h-3.5 text-accent-gold" />
                      <span className="font-sans text-xs font-bold text-cream uppercase tracking-wider">
                        {exp.tag}
                      </span>
                    </div>

                    {/* Ambient light glow behind image */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-accent-gold/5 to-transparent z-[-1] blur-xl rounded-3xl" />
                  </motion.div>
                </motion.div>

                {/* Text side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="lg:col-span-6 flex flex-col items-start text-left"
                >
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest text-accent-gold uppercase mb-2">
                    {exp.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-cream leading-tight mb-6">
                    {exp.title}
                  </h3>
                  
                  <p className="font-sans text-sm sm:text-base text-cream-dark/90 leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  {/* Bullet features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {exp.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-3 text-left">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-sans text-xs sm:text-sm text-cream-dark/90 font-medium">
                          {feature}
                        </span>
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
