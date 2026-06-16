/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SignatureExperiences from './components/SignatureExperiences';
import MenuPreview from './components/MenuPreview';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

export default function App() {
  const [isSplashActive, setIsSplashActive] = useState(true);
  const [bookingSubject, setBookingSubject] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashActive(false);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => scrollToSection('#reservation');
  const handleViewMenu = () => scrollToSection('#menu');

  const handleReserveItem = (itemName: string) => {
    setBookingSubject(itemName);
    setBookingDate('');
    scrollToSection('#reservation');
  };

  const handleBookEvent = (eventTitle: string, eventDate: string) => {
    setBookingSubject(eventTitle);
    setBookingDate(eventDate);
    scrollToSection('#reservation');
  };

  const handleClearSubject = () => {
    setBookingSubject('');
    setBookingDate('');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isSplashActive && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] bg-[#060b09] flex flex-col items-center justify-center text-center overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-gold/5 filter blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Logo with gold border and scale/fade animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.05, 1],
                  opacity: 1 
                }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-accent-gold shadow-[0_0_50px_rgba(212,160,23,0.25)] bg-forest-dark mb-6 relative"
              >
                <img src="/nature.png" alt="Logo" className="w-full h-full object-cover animate-pulse" style={{ animationDuration: '3s' }} />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-serif text-2xl sm:text-3xl font-extrabold tracking-widest text-cream uppercase mb-1"
              >
                Nature Udoh
              </motion.h1>
              
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-sans text-[10px] sm:text-xs text-accent-gold tracking-[0.3em] uppercase font-bold mb-8"
              >
                &amp; The Gang
              </motion.p>

              {/* Minimal Loader */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="font-sans text-[9px] text-cream/50 tracking-[0.2em] uppercase font-semibold">Sanctuary Loading</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-bounce" style={{ animationDelay: '300ms' }} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-forest min-h-screen text-cream antialiased font-sans selection:bg-accent-gold selection:text-forest-dark">

      {/* Navigation */}
      <Navigation onOpenBooking={handleOpenBooking} />

      {/* Main content — add bottom padding on mobile for bottom nav bar */}
      <main className="overflow-hidden">
        <Hero onOpenBooking={handleOpenBooking} onViewMenu={handleViewMenu} />
        <About />
        <Services />
        <SignatureExperiences />
        <MenuPreview onReserveItem={handleReserveItem} />
        <Events onBookEvent={handleBookEvent} />
        <Gallery />
        <Testimonials />
        <ReservationForm
          bookingSubject={bookingSubject}
          defaultDate={bookingDate}
          onClearSubject={handleClearSubject}
        />
        <Contact />
      </main>

      <Footer onQuickLinkClick={scrollToSection} />

      {/* Floating AI Chat Assistant Widget */}
      <ChatBot />


    </div>
    </>
  );
}
