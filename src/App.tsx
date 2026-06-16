/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

export default function App() {
  // Supports RSVP-prefilling across components
  const [bookingSubject, setBookingSubject] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 80; // approximate navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenBooking = () => {
    scrollToSection('#reservation');
  };

  const handleViewMenu = () => {
    scrollToSection('#menu');
  };

  const handleReserveItem = (itemName: string) => {
    setBookingSubject(itemName);
    setBookingDate(''); // clear date
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
    <div className="bg-forest min-h-screen text-cream antialiased font-sans selection:bg-accent-gold selection:text-forest-dark">
      {/* Navigation Layer */}
      <Navigation onOpenBooking={handleOpenBooking} />

      {/* Main Sections Assembly */}
      <main className="overflow-hidden">
        {/* Cinematic Welcome Header */}
        <Hero onOpenBooking={handleOpenBooking} onViewMenu={handleViewMenu} />

        {/* Brand Foundation & Story */}
        <About />

        {/* Premium Offerings Directory */}
        <Services />

        {/* High-Fidelity Multi-Dimensional Experiences */}
        <SignatureExperiences />

        {/* Categories Sökel Tabs & Items */}
        <MenuPreview onReserveItem={handleReserveItem} />

        {/* Interactive Friday/Sunday Calendars */}
        <Events onBookEvent={handleBookEvent} />

        {/* Masonry Organic Image Grid & Overlay Lightbox */}
        <Gallery />

        {/* star-reviews Customer Carousels */}
        <Testimonials />

        {/* Premium Reservation Ticket Box */}
        <ReservationForm
          bookingSubject={bookingSubject}
          defaultDate={bookingDate}
          onClearSubject={handleClearSubject}
        />

        {/* HQ Address, Direct WhatsApp & stylized Google Maps Iframe */}
        <Contact />
      </main>

      {/* Legal terms, Closing timings & Directories */}
      <Footer onQuickLinkClick={scrollToSection} />
    </div>
  );
}
