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
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [bookingSubject, setBookingSubject] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');

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

  const whatsappUrl = `https://wa.me/2348031234567?text=Hello%20Nature%20Udoh%20and%20The%20Gang!%20I'd%20love%20to%20reserve%20a%20table%20or%20inquire%20about%20hosting%20an%20event%20with%20you.`;

  return (
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

      {/* Floating WhatsApp button — above bottom nav on mobile */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        id="btn-whatsapp-float"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float lg:hidden"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
