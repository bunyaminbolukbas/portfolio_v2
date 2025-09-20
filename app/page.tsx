"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Briefcase, Infinity as InfinityIcon, MonitorSmartphoneIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isHighgroundOpen, setIsHighgroundOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative">
      {/* Logo */}
      <div className="mb-6">
        <MonitorSmartphoneIcon size={30} className="text-white opacity-80" />
      </div>

      {/* Main Tagline */}
      <div className="text-center mb-10 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-normal leading-tight mb-4">
          I turn your ideas,
        </h1>
        <h2 className="text-3xl md:text-4xl font-normal leading-tight text-gray-300">
          into software.
        </h2>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-4 px-4">
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
      <div className="w-full max-w-xl space-y-5 px-4">
        {/* Portfolio Card */}
        <Link href="/portfolio">
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group h-20 flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">My portfolio</h3>
                  <p className="text-gray-400 text-xs">Discover my work and projects</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white border-none group-hover:bg-gray-600 text-xs flex-shrink-0 ml-3"
              >
                View work
              </Button>
            </div>
          </div>
          <br></br>
        </Link>

        {/* Email Card */}
        <Link href="/contact">
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group h-20 flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">E-mail list</h3>
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
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <ExternalLink size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-base">Highground</h3>
                <p className="text-gray-400 text-xs">Transforming the world of KPI software</p>
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
        </div><br></br>

        {/* About Card */}
        <Link href="/about">
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group h-20 flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <InfinityIcon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Fleetly</h3>
                  <p className="text-gray-400 text-xs">Tap into the future of fleetmanagment powered by</p>
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
                Transforming the world of HR software in collaboration with <span className="font-semibold text-white">Tibor Olgers</span>.
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
    </div>
  );
}