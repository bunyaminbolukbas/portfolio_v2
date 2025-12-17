"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Github, Linkedin, Instagram, Mail, ExternalLink, FolderOpen, Infinity as InfinityIcon, MonitorSmartphoneIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Animated component for scroll effects
const AnimatedSection = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mnndnple', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Bedankt voor je bericht! Ik neem snel contact met je op.");
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsContactOpen(false);
          setSubmitMessage('');
        }, 1000);
      } else {
        setSubmitMessage('Er ging iets mis. Probeer het opnieuw.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative">
      {/* Logo */}
      <AnimatedSection className="mb-6">
        <MonitorSmartphoneIcon size={30} className="text-white opacity-80" />
      </AnimatedSection>

      {/* Main Tagline */}
      <AnimatedSection className="text-center mb-8 sm:mb-10 max-w-2xl px-4" delay={200}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-4">
          I turn your ideas,
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-gray-300">
          into software.
        </h2>
      </AnimatedSection>

      {/* Social Media Links */}
      <AnimatedSection className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4 px-4" delay={400}>
        <Link
          href="https://github.com/bunyaminbolukbas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors text-sm"
        >
          <Github size={20} />
          <span>@bunyamin</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/bunyaminbolukbas/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
        >
          <Linkedin size={20} />
          <span>@bunyamin</span>
        </Link>

        <Link
          href="https://instagram.com/thebunyaminn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-400 hover:text-pink-200 transition-colors text-sm"
        >
          <Instagram size={20} />
          <span>@thebunyaminn</span>
        </Link>
      </AnimatedSection>

      {/* Cards Section - All with equal spacing */}
      <div className="w-full max-w-xl space-y-3 px-2 sm:px-4 mt-8 sm:mt-10">
        {/* Vibe → Production Card */}
        <AnimatedSection delay={600}>
          <Link href="https://salesdeck-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="block mb-3">
            <div className="bg-zinc-900 rounded-2xl p-4 sm:p-6 hover:bg-zinc-800 transition-colors cursor-pointer group min-h-[80px] sm:h-20 flex items-center">
              <div className="flex items-center justify-between w-full gap-2 sm:gap-0">
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-mono text-xs sm:text-sm">&gt;_</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-sm sm:text-base truncate">Vibe → Production</h3>
                    <p className="text-gray-400 text-xs sm:text-xs leading-tight">Van prototype naar productie software</p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-2 sm:ml-3 px-2 sm:px-3"
                >
                  Aan de slag
                </Button>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Portfolio Card */}
        <AnimatedSection delay={700}>
          <Link href="/portfolio" className="block mb-3">
            <div className="bg-zinc-900 rounded-2xl p-4 sm:p-6 hover:bg-zinc-800 transition-colors cursor-pointer group min-h-[80px] sm:h-20 flex items-center">
              <div className="flex items-center justify-between w-full gap-2 sm:gap-0">
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FolderOpen size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-sm sm:text-base truncate">Mijn portfolio</h3>
                    <p className="text-gray-400 text-xs sm:text-xs leading-tight">Ontdek mijn werk en projecten</p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-2 sm:ml-3 px-2 sm:px-3"
                >
                  Bekijk werk
                </Button>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* OS49 Card */}
        <AnimatedSection delay={800}>
          <Link href="https://club49.org/" target="_blank" rel="noopener noreferrer" className="block mb-3">
            <div className="bg-zinc-900 rounded-2xl p-4 sm:p-6 hover:bg-zinc-800 transition-colors cursor-pointer group min-h-[80px] sm:h-20 flex items-center">
              <div className="flex items-center justify-between w-full gap-2 sm:gap-0">
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/club49-logo.png"
                      alt="Club49 Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-medium text-sm sm:text-base truncate">OS49</h3>
                    <p className="text-gray-400 text-xs sm:text-xs leading-tight">Het Operating System voor schaalbare bedrijven</p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-2 sm:ml-4 px-2 sm:px-3"
                >
                  Ontdek meer
                </Button>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Email Card */}
        <AnimatedSection delay={900}>
          <div
            onClick={() => setIsContactOpen(true)}
            className="bg-zinc-900 rounded-2xl p-4 sm:p-6 hover:bg-zinc-800 transition-colors cursor-pointer group min-h-[80px] sm:h-20 flex items-center mb-3"
          >
            <div className="flex items-center justify-between w-full gap-2 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base truncate">E-mail mij</h3>
                  <p className="text-gray-400 text-xs sm:text-xs leading-tight">Laten we jouw ideeën verkennen</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-2 sm:ml-4 px-2 sm:px-3"
              >
                Bericht
              </Button>
            </div>
          </div>
        </AnimatedSection>

      </div>

      {/* Footer - clearly separated from content */}
      <div className="mt-32 pb-8 text-gray-500 text-sm">
        <span className="text-xs">© 2025 Bunyamin - Alle rechten voorbehouden - @thebunyaminn</span>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-center mb-2">
              <span className="text-xl">Contact</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-zinc-600 bg-zinc-800 text-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Je naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-zinc-600 bg-zinc-800 text-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="jouw@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full rounded-md border border-zinc-600 bg-zinc-800 text-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Je bericht..."
                />
              </div>

              {submitMessage && (
                <div className="text-center text-green-400 text-sm">
                  {submitMessage}
                </div>
              )}

              <div className="flex justify-between pt-4 gap-3">
                <Button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  variant="secondary"
                  className="bg-gray-700 hover:bg-gray-600 text-white border-none flex-1"
                  disabled={isSubmitting}
                >
                  Annuleren
                </Button>
                <Button
                  type="submit"
                  className="bg-white hover:bg-gray-200 text-black border-none flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur'}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}