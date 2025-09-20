"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Briefcase, Infinity as InfinityIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isHighgroundOpen, setIsHighgroundOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative">
      {/* Infinity Logo */}
      <div className="mb-12">
        <InfinityIcon size={80} className="text-white opacity-80" />
      </div>

      {/* Main Tagline */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-normal leading-tight mb-4">
          I build cool companies,
        </h1>
        <h2 className="text-3xl md:text-4xl font-normal leading-tight text-gray-300">
          with cool people.
        </h2>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-16 px-4">
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors text-sm"
        >
          <Github size={20} />
          <span>@bunyamin</span>
        </Link>
        
        <Link
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
        >
          <Linkedin size={20} />
          <span>@bunyamin</span>
        </Link>
        
        <Link
          href="https://instagram.com/thebunyaminnn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors text-sm"
        >
          <Instagram size={20} />
          <span>@thebunyaminnn</span>
        </Link>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-lg space-y-4 px-4">
        {/* Portfolio Card */}
        <Link href="/portfolio">
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group h-20 flex items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-base">My Portfolio</h3>
                  <p className="text-gray-400 text-xs">Discover my work and projects</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-4"
              >
                View work
              </Button>
            </div>
          </div>
        </Link>

        {/* Email Card */}
        <Link href="/contact">
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group h-20 flex items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-base">E-mail list</h3>
                  <p className="text-gray-400 text-xs">Receive emails with valuable knowledge templates and more</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-4"
              >
                Sign up
              </Button>
            </div>
          </div>
        </Link>

        {/* The Highground Card */}
        <div 
          onClick={() => setIsHighgroundOpen(true)}
          className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group h-20 flex items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <ExternalLink size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-base">The Highground</h3>
                <p className="text-gray-400 text-xs">Transforming the world of HRM software</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-4"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* About Card */}
        <Link href="/about">
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group h-20 flex items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <InfinityIcon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-base">About Me</h3>
                  <p className="text-gray-400 text-xs">Learn more about my journey and experience</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-4"
              >
                Learn more
              </Button>
            </div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-gray-500 text-sm">
        <span className="text-xs">© 2025 Bunyamin</span>
      </div>

      {/* The Highground Modal */}
      <Dialog open={isHighgroundOpen} onOpenChange={setIsHighgroundOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium text-center mb-4">
              <span className="text-xl">The Highground</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-6">
            <div className="text-center space-y-4">
              <p className="text-lg leading-relaxed text-gray-300">
                Learn more about one of the projects I'm going to be very proud of:
              </p>
              <p className="text-lg leading-relaxed">
                Transforming the world of HRM software in collaboration with <span className="font-medium text-white">Tibor Olgers</span>.
              </p>
              <p className="text-base text-gray-400 italic">
                More to follow...
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
    </div>
  );
}