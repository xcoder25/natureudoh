/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Instagram, Facebook, Youtube, Share2, Compass } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/natureudoh_gang' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/natureudoh_gang' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/natureudoh_gang' },
  ];

  // WhatsApp connection pre-filled URL
  const whatsappUrl = `https://wa.me/2348031234567?text=Hello%20Nature%20Udoh%20and%20The%20Gang!%20I'd%20love%20to%20reserve%20a%20table%20or%20inquire%20about%20hosting%20an%20event%20with%20you.`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-forest-dark relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

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
            Locate The Gang
          </motion.span>
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mt-3 mb-6"
          >
            Connect With Our Sanctuary
          </motion.h2>
          <div className="w-24 h-0.5 bg-accent-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact details (5 cols on lg) */}
          <div className="lg:col-span-5 text-left space-y-12">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-cream mb-6">
                Nature Udoh & The Gang HQ
              </h3>
              <p className="font-sans text-cream-dark/85 leading-relaxed">
                Step away from the city noise and join us. Reach our team directly for table bookings, personalized birthday configurations, and private event packages.
              </p>
            </div>

            {/* Practical details blocks */}
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-forest rounded-xl border border-accent-gold/20 text-accent-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-cream uppercase tracking-wider mb-1">
                    Sanctuary Address
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-cream-dark/90 leading-relaxed font-medium">
                    Plot 15, Royal Forest Garden Drive,<br />
                    Outer Circle Road, Lekki Phase 1,<br />
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-forest rounded-xl border border-accent-gold/20 text-accent-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-cream uppercase tracking-wider mb-1">
                    Call / Inquiries
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-cream-dark/90 font-medium">
                    +234 (0) 803 123 4567<br />
                    +234 (0) 902 987 6543
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-forest rounded-xl border border-accent-gold/20 text-accent-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-cream uppercase tracking-wider mb-1">
                    Electronic Mail
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-cream-dark/90 font-medium">
                    reservations@natureudohandgang.com<br />
                    events@natureudohandgang.com
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Block */}
            <div className="pt-6 border-t border-cream/10">
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-cream/40 mb-4 block">
                Instant Chat Channels
              </h4>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="btn-whatsapp-chat"
                className="inline-flex items-center space-x-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-bold text-sm sm:text-md py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Chat directly on WhatsApp</span>
              </a>
            </div>

            {/* Social channels */}
            <div className="pt-6 border-t border-cream/10">
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-cream/40 mb-4 block">
                The Gang Online Presence
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-forest hover:bg-accent-gold text-cream hover:text-forest-dark border border-cream/5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Embedded Map layout (7 cols on lg) */}
          <div className="lg:col-span-7 w-full h-[450px] lg:h-[550px] relative rounded-3xl overflow-hidden border border-cream/10 shadow-2xl p-1 bg-cream/5">
            {/* Ambient gold pin indicator */}
            <div className="absolute top-4 left-4 z-20 bg-forest-dark/90 px-4 py-2 border border-accent-gold/40 rounded-xl backdrop-blur-md flex items-center space-x-2 text- cream text-xs font-bold leading-none shadow-lg">
              <Compass className="w-4 h-4 text-accent-gold" />
              <span className="font-sans uppercase text-cream tracking-wider">
                Interactive Garden Map
              </span>
            </div>

            {/* Highly stylized OpenStreetMap Iframe to match luxury green/dark theme */}
            <iframe
              id="google-maps-frame"
              title="Nature Udoh and The Gang Sanctuary Map Location"
              src="https://maps.google.com/maps?q=Lekki%20Conservation%20Centre,%20Lekki,%20Lagos&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full border-0 rounded-2xl filter grayscale contrast-125 brightness-[0.7] invert-[0.9] hue-rotate-[110deg]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
