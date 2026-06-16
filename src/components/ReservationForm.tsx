/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReservationData } from '../types';
import { Calendar, Users, Clock, Send, CheckCircle2, Ticket, Sparkles, X, Phone, Mail, User } from 'lucide-react';

interface ReservationFormProps {
  bookingSubject?: string;
  defaultDate?: string;
  onClearSubject?: () => void;
}

export default function ReservationForm({ bookingSubject, defaultDate, onClearSubject }: ReservationFormProps) {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: 2,
    specialRequests: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationData | null>(null);
  const [validationError, setValidationError] = useState('');

  // Update form if subject or date is prefilled from outside
  useEffect(() => {
    if (bookingSubject) {
      setFormData(prev => ({
        ...prev,
        specialRequests: `Interested in reserving/enjoying: "${bookingSubject}"`
      }));
    }
  }, [bookingSubject]);

  useEffect(() => {
    if (defaultDate) {
      // Map descriptive dates like "Every Friday Night" to next valid date or set as string
      let formattedDate = defaultDate;
      const today = new Date();
      
      if (defaultDate.toLowerCase().includes('friday')) {
        const nextFriday = new Date();
        nextFriday.setDate(today.getDate() + ((7 - today.getDay() + 5) % 7 || 7));
        formattedDate = nextFriday.toISOString().split('T')[0];
      } else if (defaultDate.toLowerCase().includes('sunday')) {
        const nextSunday = new Date();
        nextSunday.setDate(today.getDate() + ((7 - today.getDay() + 0) % 7 || 7));
        formattedDate = nextSunday.toISOString().split('T')[0];
      } else if (defaultDate.toLowerCase().includes('wednesday')) {
        const nextWednesday = new Date();
        nextWednesday.setDate(today.getDate() + ((7 - today.getDay() + 3) % 7 || 7));
        formattedDate = nextWednesday.toISOString().split('T')[0];
      } else {
        formattedDate = today.toISOString().split('T')[0];
      }
      
      setFormData(prev => ({
        ...prev,
        date: formattedDate
      }));
    } else {
      // Default to today
      const today = new Date().toISOString().split('T')[0];
      setFormData(prev => ({
        ...prev,
        date: today
      }));
    }
  }, [defaultDate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value, 10) : value
    }));
    setValidationError('');
  };

  const handleGuestsChange = (increment: number) => {
    setFormData(prev => {
      const nextGuests = prev.guests + increment;
      if (nextGuests < 1) return prev;
      if (nextGuests > 25) return prev; // max 25 online booking
      return { ...prev, guests: nextGuests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Verification
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError('Please provide a contact phone number.');
      return;
    }
    if (!formData.email.trim()) {
      setValidationError('Please enter an email address.');
      return;
    }
    if (!formData.date) {
      setValidationError('Please select a reservation date.');
      return;
    }

    setLoading(true);

    // Simulate database write
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setSubmittedData({ ...formData });

      // Save to local storage for persistence
      const currentReservations = JSON.parse(localStorage.getItem('gang_reservations') || '[]');
      currentReservations.push({
        ...formData,
        id: 'RES-' + Math.floor(Math.random() * 900000 + 100000),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('gang_reservations', JSON.stringify(currentReservations));
    }, 1500);
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: new Date().toISOString().split('T')[0],
      time: '19:00',
      guests: 2,
      specialRequests: ''
    });
    setSubmittedData(null);
    if (onClearSubject) {
      onClearSubject();
    }
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-forest relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-forest-dark/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Side Info / Context (5 cols on lg) */}
          <div className="lg:col-span-5 text-left flex flex-col items-start lg:pr-6">
            <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.3em] text-accent-gold uppercase mb-4">
              Secures Your Table
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight mb-8 leading-[1.15]">
              Reserve Your Premium <span className="text-accent-gold-light font-serif italic">Moment</span>
            </h2>
            
            <p className="font-sans text-cream-dark/90 leading-relaxed mb-8">
              Avoid long queues or disappointments under the stars. Securing your table ensures a dedicated pavilion space, specialized waitstaff access, and smooth culinary preparation.
            </p>

            {/* Quick Policies / Highlights */}
            <div className="space-y-4 w-full">
              <div className="flex items-start space-x-3 text-left">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-cream">No Booking Costs</h4>
                  <p className="font-sans text-xs text-cream/70">Online wood-fire table reservation is completely complimentary. Cancel anytime.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-cream">15 Minutes Grace Period</h4>
                  <p className="font-sans text-xs text-cream/70">We hold your outdoor lounge seating up to 15 minutes past your booked arrival interval.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-cream">Group Buffets & VIP Canopies</h4>
                  <p className="font-sans text-xs text-cream/70">For parties larger than 12, write details under special requests to let our chef curates custom dishes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Form & Ticket Holder (7 cols on lg) */}
          <div className="lg:col-span-7 w-full max-w-[620px] mx-auto lg:mx-0">
            <div className="bg-forest-dark/75 border border-cream/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
              
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Visual Focus Alert if subject is selected */}
                    {bookingSubject && (
                      <div className="mb-6 p-3.5 bg-accent-gold/10 border border-accent-gold/30 rounded-xl flex justify-between items-center text-left">
                        <div className="flex items-center space-x-2 text-accent-gold">
                          <Sparkles className="w-4.5 h-4.5 animate-pulse shrink-0" />
                          <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                            Booking for: <strong className="text-cream">{bookingSubject}</strong>
                          </span>
                        </div>
                        <button
                          id="clear-booking-subject"
                          onClick={onClearSubject}
                          className="p-1 rounded-full text-cream/60 hover:text-accent-gold transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                      {/* Name input */}
                      <div>
                        <label htmlFor="name-input" className="block font-sans text-xs font-bold uppercase tracking-wider text-cream/80 mb-2">
                          Your Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-accent-gold/50">
                            <User className="w-5 h-5" />
                          </div>
                          <input
                            type="text"
                            id="name-input"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nature Udoh"
                            className="block w-full py-3.5 pl-11 pr-4 rounded-xl bg-forest border border-cream/10 focus:border-accent-gold text-cream font-sans placeholder-cream/30 focus:outline-none transition-all"
                            required
                          />
                        </div>
                      </div>

                      {/* Phone & Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone-input" className="block font-sans text-xs font-bold uppercase tracking-wider text-cream/80 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-accent-gold/50">
                              <Phone className="w-5 h-5" />
                            </div>
                            <input
                              type="tel"
                              id="phone-input"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+234 (80)... / +1 (55)..."
                              className="block w-full py-3.5 pl-11 pr-4 rounded-xl bg-forest border border-cream/10 focus:border-accent-gold text-cream font-sans placeholder-cream/30 focus:outline-none transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email-input" className="block font-sans text-xs font-bold uppercase tracking-wider text-cream/80 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-accent-gold/50">
                              <Mail className="w-5 h-5" />
                            </div>
                            <input
                              type="email"
                              id="email-input"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="nature@example.com"
                              className="block w-full py-3.5 pl-11 pr-4 rounded-xl bg-forest border border-cream/10 focus:border-accent-gold text-cream font-sans placeholder-cream/30 focus:outline-none transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Date & Time row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="date-input" className="block font-sans text-xs font-bold uppercase tracking-wider text-cream/80 mb-2">
                            Reservation Date *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-accent-gold/50">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <input
                              type="date"
                              id="date-input"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              className="block w-full py-3.5 pl-11 pr-4 rounded-xl bg-forest border border-cream/10 focus:border-accent-gold text-cream font-sans focus:outline-none transition-all [color-scheme:dark]"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="time-select" className="block font-sans text-xs font-bold uppercase tracking-wider text-cream/80 mb-2">
                            Preferred Time *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-accent-gold/50">
                              <Clock className="w-5 h-5" />
                            </div>
                            <select
                              id="time-select"
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              className="block w-full py-3.5 pl-11 pr-4 rounded-xl bg-forest border border-cream/10 focus:border-accent-gold text-cream font-sans focus:outline-none transition-all appearance-none cursor-pointer"
                              required
                            >
                              <option value="12:00">12:00 PM (Lunch)</option>
                              <option value="13:30">1:30 PM (Lunch)</option>
                              <option value="15:00">3:00 PM (Afternoon)</option>
                              <option value="17:00">5:00 PM (Sunset Lounge)</option>
                              <option value="18:30">6:30 PM (Dinner Hour)</option>
                              <option value="19:00">7:00 PM (Prime Sizzle)</option>
                              <option value="20:00">8:00 PM (Music Session)</option>
                              <option value="21:30">9:30 PM (Late Night Drinks)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Party Seats Counter */}
                      <div>
                        <label className="block font-sans text-xs font-bold uppercase tracking-wider text-cream/80 mb-3">
                          Number of Guests *
                        </label>
                        <div className="flex items-center space-x-4 bg-forest border border-cream/10 rounded-xl p-2 w-full max-w-[280px]">
                          <button
                            type="button"
                            onClick={() => handleGuestsChange(-1)}
                            className="w-10 h-10 rounded-lg bg-forest-dark border border-cream/10 text-cream hover:text-accent-gold hover:border-accent-gold font-bold text-lg flex items-center justify-center transition-colors cursor-pointer select-none"
                          >
                            -
                          </button>
                          
                          <div className="flex-1 text-center flex items-center justify-center space-x-2">
                            <Users className="w-4 h-4 text-accent-gold" />
                            <span className="font-sans font-bold text-cream text-lg pr-1">
                              {formData.guests}
                            </span>
                            <span className="font-sans text-xs text-cream/50 uppercase font-semibold">
                              {formData.guests === 1 ? 'Guest' : 'Guests'}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleGuestsChange(1)}
                            className="w-10 h-10 rounded-lg bg-forest-dark border border-cream/10 text-cream hover:text-accent-gold hover:border-accent-gold font-bold text-lg flex items-center justify-center transition-colors cursor-pointer select-none"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Special Requests textarea */}
                      <div>
                        <label htmlFor="special-requests-input" className="block font-sans text-xs font-bold uppercase tracking-wider text-cream/80 mb-2">
                          Special Dietary or Table Requests (Optional)
                        </label>
                        <textarea
                          id="special-requests-input"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={3}
                          placeholder="E.g., VIP Pavilion, raw-medium grill requests, birthday champagne configuration, dietary constraints, table near a fire pit..."
                          className="block w-full px-4 py-3.5 rounded-xl bg-forest border border-cream/10 focus:border-accent-gold text-cream font-sans placeholder-cream/30 focus:outline-none transition-all resize-none"
                        />
                      </div>

                      {/* Validation Error Alert */}
                      {validationError && (
                        <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-200 text-xs sm:text-sm">
                          {validationError}
                        </div>
                      )}

                      {/* Submit action */}
                      <button
                        type="submit"
                        id="btn-submit-booking"
                        disabled={loading}
                        className="w-full flex items-center justify-center space-x-3 bg-accent-gold hover:bg-accent-gold-light disabled:bg-accent-gold/45 text-forest-dark disabled:text-forest-dark/70 font-sans font-bold text-md py-4 rounded-xl shadow-lg hover:shadow-xl transition-all uppercase tracking-wider cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-forest-dark/40 border-t-forest-dark rounded-full animate-spin" />
                            <span>Processing Ticket...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4.5 h-4.5" />
                            <span>Book Premium Table</span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  /* Elegant success ticket presentation */
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, y: 30, scale: 0.93 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -25, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="flex flex-col items-center justify-center text-center py-6"
                  >
                    <CheckCircle2 className="w-16 h-16 text-accent-gold mb-6 animate-bounce" />
                    
                    <h3 className="font-serif text-3xl font-bold text-cream mb-2">
                      VIP Ticket Secured!
                    </h3>
                    
                    <p className="font-sans text-sm text-cream-dark/80 max-w-sm mb-8">
                      Your premium table has been reserved successfully. We have printed your confirmation details below.
                    </p>

                    {/* Interactive Voucher Card */}
                    <div className="relative w-full max-w-sm bg-forest border-2 border-accent-gold rounded-2xl p-6 shadow-2xl overflow-hidden mb-8">
                      
                      {/* Ticket cut-outs on sides */}
                      <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-forest-dark border-r-2 border-accent-gold transform -translate-y-1/2" />
                      <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-forest-dark border-l-2 border-accent-gold transform -translate-y-1/2 animate-pulse" />

                      {/* Voucher header */}
                      <div className="flex justify-between items-center pb-4 border-b border-cream/10 mb-4">
                        <div className="text-left">
                          <span className="font-serif text-xs font-bold text-cream leading-none tracking-wider uppercase block">
                            Nature Udoh
                          </span>
                          <span className="font-sans text-[9px] text-accent-gold-light tracking-widest leading-none block mt-1 uppercase">
                            AND THE GANG
                          </span>
                        </div>
                        <Ticket className="w-6 h-6 text-accent-gold shrink-0" />
                      </div>

                      {/* Voucher Details */}
                      <div className="space-y-4 text-left font-sans">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-[10px] text-cream/40 uppercase block font-semibold">VIP Patron</span>
                            <span className="text-cream text-sm font-semibold truncate block">{submittedData?.name}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-cream/40 uppercase block font-semibold">Confirmation Ref</span>
                            <span className="text-accent-gold text-sm font-mono font-bold block">RES-{Math.floor(Math.random() * 89999 + 10000)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <span className="text-[10px] text-cream/40 uppercase block font-semibold">Date</span>
                            <span className="text-cream text-xs font-semibold block">{submittedData?.date}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-cream/40 uppercase block font-semibold">Time</span>
                            <span className="text-cream text-xs font-semibold block">{submittedData?.time}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-cream/40 uppercase block font-semibold">Party Size</span>
                            <span className="text-cream text-xs font-semibold block">{submittedData?.guests} {submittedData && submittedData.guests > 1 ? 'Pax' : 'Pax'}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] text-cream/40 uppercase block font-semibold text-left">Contact Info</span>
                          <span className="text-cream text-xs block truncate">{submittedData?.phone} • {submittedData?.email}</span>
                        </div>

                        {submittedData?.specialRequests && (
                          <div className="pt-2 border-t border-cream/5">
                            <span className="text-[9px] text-cream/45 uppercase block tracking-wider font-semibold">Bespoke Requests</span>
                            <p className="text-[11px] text-cream-dark/95 leading-snug italic line-clamp-2 mt-0.5">
                              "{submittedData.specialRequests}"
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Ticket Footer barcode accent */}
                      <div className="mt-6 pt-4 border-t border-dashed border-accent-gold/40 flex flex-col items-center">
                        <div className="w-4/5 h-8 flex justify-between space-x-[2px] opacity-70">
                          {Array.from({ length: 28 }).map((_, bIdx) => (
                            <div
                              key={bIdx}
                              style={{ width: `${Math.random() > 0.4 ? 4 : 1}px` }}
                              className="h-full bg-cream-dark shrink-0"
                            />
                          ))}
                        </div>
                        <span className="text-[8px] text-cream/40 tracking-wider uppercase mt-1">
                          VIP GUEST ID SECURE VOUCHER
                        </span>
                      </div>
                    </div>

                    <button
                      id="btn-new-booking"
                      onClick={handleReset}
                      className="bg-transparent hover:bg-cream/5 border border-cream/35 hover:border-accent-gold text-cream hover:text-accent-gold font-sans font-bold text-xs uppercase tracking-widest py-2.5 px-6 rounded-full transition-all cursor-pointer"
                    >
                      New Reservation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
