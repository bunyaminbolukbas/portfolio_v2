"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Briefcase, Infinity as InfinityIcon, MonitorSmartphoneIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isHighgroundOpen, setIsHighgroundOpen] = useState(false);
  const [isFleetlyOpen, setIsFleetlyOpen] = useState(false);
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
        setSubmitMessage("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsContactOpen(false);
          setSubmitMessage('');
        }, 1000);
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
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
      <div className="mb-6">
        <MonitorSmartphoneIcon size={30} className="text-white opacity-80" />
      </div>

      {/* Main Tagline */}
      <div className="text-center mb-8 sm:mb-10 max-w-2xl px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-4">
          I turn your ideas,
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-gray-300">
          into software.
        </h2>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4 px-4">
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
      </div>

      {/* Cards Section - All with equal spacing */}
      <div className="w-full max-w-xl space-y-5 px-2 sm:px-4">
        {/* Portfolio Card */}
        <Link href="/portfolio" className="block mb-3">
          <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors cursor-pointer group min-h-[80px] sm:h-20 flex items-center">
            <div className="flex items-center justify-between w-full gap-2 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base truncate">My portfolio</h3>
                  <p className="text-gray-400 text-xs sm:text-xs leading-tight">Discover my work and projects</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-2 sm:ml-3 px-2 sm:px-3"
              >
                View work
              </Button>
            </div>
          </div>
        </Link>

        {/* Email Card */}
        <div
          onClick={() => setIsContactOpen(true)}
          className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors cursor-pointer group min-h-[80px] sm:h-20 flex items-center mb-3"
        >
          <div className="flex items-center justify-between w-full gap-2 sm:gap-0">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-base truncate">E-mail me</h3>
                <p className="text-gray-400 text-xs sm:text-xs leading-tight">Shoot me a message and let's explore your idea together</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-2 sm:ml-4 px-2 sm:px-3"
            >
              Message
            </Button>
          </div>
        </div>

        {/* The Highground Card */}
        <div
          onClick={() => setIsHighgroundOpen(true)}
          className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors cursor-pointer group min-h-[80px] sm:h-20 flex items-center mb-3"
        >
          <div className="flex items-center justify-between w-full gap-2 sm:gap-0">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <ExternalLink size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-medium text-sm sm:text-base truncate">Highground</h3>
                <p className="text-gray-400 text-xs sm:text-xs leading-tight">Transforming the world of KPI software</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-2 sm:ml-4 px-2 sm:px-3"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Fleetly Card */}
        <div
          onClick={() => setIsFleetlyOpen(true)}
          className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors cursor-pointer group min-h-[80px] sm:h-20 flex items-center mb-3"
        >
          <div className="flex items-center justify-between w-full gap-2 sm:gap-0">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <InfinityIcon size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-base truncate">Fleetly</h3>
                <p className="text-gray-400 text-xs sm:text-xs leading-tight">Tap into the future of AI driven fleetmanagement</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-2 sm:ml-4 px-2 sm:px-3"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>

      {/* Footer - clearly separated from content */}
      <div className="mt-32 pb-8 text-gray-500 text-sm">
        <span className="text-xs">© 2025 Bunyamin</span>
      </div>

      {/* The Highground Modal */}
      <Dialog open={isHighgroundOpen} onOpenChange={setIsHighgroundOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-center mb-2">
              <span className="text-xl">Highground</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-6">
            <div className="text-center space-y-4">
              <p className="text-lg leading-relaxed text-gray-300">
              </p>
              <p className="text-lg leading-relaxed">
                Transforming the world of KPI software in collaboration with <br></br><span className="font-semibold text-white">Tibor Olgers</span>.
              </p>
              <p className="text-base text-gray-400 italic">
                coming soon...
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => setIsHighgroundOpen(false)}
                variant="secondary"
                className="bg-gray-700 hover:bg-gray-600 text-white border-none"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* The Fleetly Modal */}
      <Dialog open={isFleetlyOpen} onOpenChange={setIsFleetlyOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-center mb-2">
              <span className="text-xl">Fleetly</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-6">
            <div className="text-center space-y-4">
              <p className="text-lg leading-relaxed text-gray-300">
              </p>
              <p className="text-lg leading-relaxed">
                Tap into the future of AI driven fleet management
              </p>
              <p className="text-base text-gray-400 italic">
                coming soon...
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => setIsFleetlyOpen(false)}
                variant="secondary"
                className="bg-gray-700 hover:bg-gray-600 text-white border-none"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Form Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-center mb-2">
              <span className="text-xl">Contact Me</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-800 text-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-800 text-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-800 text-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
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
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-white hover:bg-gray-200 text-black border-none flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}