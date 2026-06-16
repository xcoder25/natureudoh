/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Instagram, Facebook, Youtube, Compass } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/natureudoh_gang', color: '#E1306C' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/natureudoh_gang', color: '#1877F2' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/natureudoh_gang', color: '#FF0000' },
  ];

  const whatsappUrl = `https://wa.me/2348031234567?text=Hello%20Nature%20Udoh%20and%20The%20Gang!%20I'd%20love%20to%20reserve%20a%20table%20or%20inquire%20about%20hosting%20an%20event%20with%20you.`;

  const contactItems = [
    {
      icon: MapPin,
      title: 'Sanctuary Address',
      content: (
        <span>Plot 15, Royal Forest Garden Drive,<br />Outer Circle Road, Lekki Phase 1,<br />Lagos, Nigeria.</span>
      ),
    },
    {
      icon: Phone,
      title: 'Call / Inquiries',
      content: <span>+234 (0) 803 123 4567<br />+234 (0) 902 987 6543</span>,
    },
    {
      icon: Mail,
      title: 'Electronic Mail',
      content: <span>reservations@natureudohandgang.com<br />events@natureudohandgang.com</span>,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-28 bg-forest-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-forest-light/5 rounded-full filter blur-[100px] pointer-events-none" />
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
            <Compass className="w-3 h-3" />
            Locate The Gang
          </motion.div>
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight mt-2 mb-3"
          >
            Connect With Our Sanctuary
          </motion.h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-cream mb-3">Nature Udoh &amp; The Gang HQ</h3>
              <p className="font-sans text-sm text-cream-dark/80 leading-relaxed">
                Reach our team for table bookings, birthday configurations, and private event packages.
              </p>
            </div>

            {/* Contact cards — horizontal scrollable on mobile, stack on desktop */}
            <div className="flex flex-col gap-4">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 glass-card rounded-2xl border border-cream/5"
                >
                  <div className="p-2.5 bg-forest rounded-xl border border-accent-gold/20 text-accent-gold shrink-0">
                    <item.icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-cream uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="font-sans text-xs sm:text-sm text-cream-dark/85 leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4 border-t border-cream/10">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-cream/40 mb-3">Instant Chat</h4>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="btn-whatsapp-chat"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-bold text-sm py-4 px-6 rounded-2xl shadow-lg transition-all touch-active active:scale-97 cursor-pointer"
                style={{ boxShadow: '0 6px 24px rgba(37,211,102,0.35)' }}
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Chat directly on WhatsApp</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="pt-4 border-t border-cream/10">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-cream/40 mb-3">Follow The Gang</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-forest hover:bg-accent-gold text-cream hover:text-forest-dark border border-cream/10 rounded-xl transition-all duration-250 hover:-translate-y-1 cursor-pointer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:col-span-7 w-full h-[300px] sm:h-[420px] lg:h-[520px] relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cream/10 shadow-2xl">
            <div className="absolute top-3 left-3 z-20 glass-card-gold px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg">
              <Compass className="w-3.5 h-3.5 text-accent-gold" />
              <span className="font-sans text-[10px] sm:text-xs font-bold text-cream tracking-wider uppercase">Interactive Map</span>
            </div>
            <iframe
              id="google-maps-frame"
              title="Nature Udoh and The Gang Sanctuary Map Location"
              src="https://maps.google.com/maps?q=Lekki%20Conservation%20Centre,%20Lekki,%20Lagos&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full border-0 filter grayscale contrast-125 brightness-[0.7] invert-[0.9] hue-rotate-[110deg]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
