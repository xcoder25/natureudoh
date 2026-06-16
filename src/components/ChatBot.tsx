/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Hello! Welcome to Nature Udoh & The Gang. I am your AI Concierge. Ask me anything about our Uyo sanctuary, menu, operating hours, weekly events, or how to reserve a table!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messageEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What is on the menu?",
    "Where are you located?",
    "What are your opening hours?",
    "What events are happening?",
    "How do I reserve a table?"
  ];

  // Auto scroll to bottom
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg = textToSend.trim();
    setInput('');
    setError(null);
    
    // Append user message
    const newMessages = [...messages, { role: 'user', content: userMsg } as ChatMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Map frontend history to Express format: [{ role, content }]
      const apiHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMsg,
          history: apiHistory,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Server error. Please check your Gemini API key configuration.');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'model', content: data.text }]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <>
      {/* Floating launcher button — hidden on desktop if open, otherwise floating bottom right */}
      <div className="fixed bottom-24 lg:bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              id="ai-chat-launcher"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-forest to-accent-gold text-cream flex items-center justify-center shadow-2xl border border-accent-gold/40 cursor-pointer relative group overflow-hidden"
              style={{ boxShadow: '0 8px 32px rgba(212,160,23,0.35)' }}
              aria-label="Open AI Concierge Chat"
            >
              {/* Pulse glow background effect */}
              <div className="absolute inset-0 bg-accent-gold/25 rounded-full animate-ping opacity-75 group-hover:scale-125 transition-all pointer-events-none" style={{ animationDuration: '3s' }} />
              
              <MessageSquare className="w-6 h-6 text-cream relative z-10" />
              
              {/* Sparkles mini-badge */}
              <div className="absolute top-2 right-2 bg-accent-gold text-forest-dark p-0.5 rounded-full z-20">
                <Sparkles className="w-2.5 h-2.5 fill-forest-dark" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat window container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-window"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-0 lg:bottom-24 right-0 lg:right-6 w-full lg:w-[410px] h-[100dvh] lg:h-[600px] bg-[#0a0f0d]/98 lg:bg-[#070c0a]/92 backdrop-blur-xl border-t lg:border border-accent-gold/20 lg:rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-accent-gold/15 bg-forest-dark/95 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-accent-gold/45 bg-forest">
                  <img src="/nature.png" alt="Nature Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-sm font-bold tracking-wider leading-none text-cream uppercase">AI Concierge</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-sans text-[9px] text-accent-gold tracking-widest uppercase font-semibold">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-forest-dark hover:bg-forest/50 text-cream/70 hover:text-cream border border-cream/5 transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-accent-gold/20">
              <AnimatePresence initial={false}>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-accent-gold text-forest-dark font-sans font-semibold rounded-tr-none shadow-md'
                          : 'bg-forest/30 border border-accent-gold/15 text-cream rounded-tl-none'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loader */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-forest/30 border border-accent-gold/15 rounded-2xl rounded-tl-none px-4 py-3.5">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-gold animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-gold animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-gold animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Error display */}
              {error && (
                <div className="p-3 bg-red-950/40 border border-red-500/25 rounded-2xl flex items-start gap-2.5 text-red-200 text-xs leading-normal">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Configuration Error:</span> {error}
                  </div>
                </div>
              )}

              <div ref={messageEndRef} />
            </div>

            {/* Quick Suggestions (if no user active question and not loading) */}
            {!isLoading && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 bg-black/20 overflow-x-auto shrink-0 border-t border-accent-gold/5 max-h-[85px]">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="px-2.5 py-1.5 rounded-lg bg-forest-dark/40 hover:bg-forest-light/20 text-cream/70 hover:text-accent-gold-light border border-accent-gold/10 hover:border-accent-gold/30 font-sans text-[10px] tracking-wide transition-all whitespace-nowrap cursor-pointer hover:-translate-y-0.5 duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 border-t border-accent-gold/15 bg-forest-dark/95 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Nature's AI Concierge..."
                disabled={isLoading}
                className="flex-1 bg-black/40 text-cream placeholder-cream/40 border border-accent-gold/15 focus:border-accent-gold rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-3 rounded-xl bg-accent-gold text-forest-dark hover:bg-accent-gold-light disabled:opacity-40 transition-all cursor-pointer font-bold shrink-0 flex items-center justify-center"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
