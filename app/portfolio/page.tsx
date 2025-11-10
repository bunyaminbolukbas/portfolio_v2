"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar, MapPin, ArrowLeft, Code, Database, Globe } from 'lucide-react';
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative">
      {/* Header */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-4xl mx-auto pt-16">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-4">
            My Portfolio
          </h1>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection className="px-2 sm:px-4 mb-16" delay={200}>
          <div className="w-full max-w-xl mx-auto space-y-3">
            {/* Mission Control */}
            <AnimatedSection delay={300}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/logomission.png"
                      alt="Mission Control Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Mission Control – Web Application</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  A centralized dashboard for tracking all your important metrics and KPIs in one place.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">React</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">TypeScript</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Supabase</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Operations Grid */}
            <AnimatedSection delay={400}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/logoops.png"
                      alt="Operations Grid Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Operations Grid – Web Application</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Real-time operations management system for coordinating complex workflows and team activities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Next.js</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">TypeScript</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">PostgreSQL</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Personal Intel */}
            <AnimatedSection delay={500}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-0.5">
                    <Image
                      src="/images/task_01k92gsx4zeedtv5gbcybq3vtc_1762095124_img_2.webp"
                      alt="Personal Intel Logo"
                      width={48}
                      height={48}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Personal Intel – AI Application</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  AI-powered personal intelligence system for organizing information and insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">AI</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Python</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Node.js</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Highground */}
            <AnimatedSection delay={600}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/web-app-manifest-512x512 kopie.png"
                      alt="Highground Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Highground – Web Application</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  A fullstack KPI management dashboard for tracking employee KPI's. Features real-time analytics, team collaboration and AI integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">React</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Node.js</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">TypeScript</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Supabase</span>
                </div>
              </div>
            </AnimatedSection>

            {/* N8N Cloud Automation */}
            <AnimatedSection delay={700}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/n8n_pink+white_logo.png"
                      alt="N8N Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Cloudshift BV – N8N Automation</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Built automated workflows and a crypto wallet tracker for Cloudshift BV using N8N cloud platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">N8N</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Workflow automation</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">TypeScript</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Crane Simulation */}
            <AnimatedSection delay={800}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/n8n_pink+white_logo.png"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Eye Concept Industrial Automation BV – Crane Simulation</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Contributed to an advanced crane simulation in collaboration with HOWEST University students, commissioned by Port of Antwerp/Bruges, Europoort, and Eye Concept.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">TypeScript</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Simulation</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">C++</span>
                </div>
              </div>
            </AnimatedSection>

            {/* NAGA */}
            <AnimatedSection delay={900}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/naga logo.png"
                      alt="NAGA Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">NAGA – Landingpage</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Worked on the landingpage of NAGA, a leading fintech company. Worked on financial trading platforms and improving the front, user interfaces, and backend systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Vue.js</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">TypeScript</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Python</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Beek Automotive */}
            <AnimatedSection delay={950}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/beek-automotive-logozwart (1).png"
                      alt="Beek Automotive Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Beek Automotive – Custom Website</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Custom automotive website with API integration for automated car listings and advertising management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">React</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">API Integration</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">TypeScript</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Automation</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Dutch Police */}
            <AnimatedSection delay={1000}>
              <div className="bg-zinc-900 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
                    <Image
                      src="/images/politie-embleem.png"
                      alt="Dutch Police Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Dutch Police – Graduation Project</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Major graduation project in collaboration with the Dutch Police, worked on backend integration to a new database with various backend technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Java</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">Spring Boot</span>
                  <span className="px-2 py-1 text-xs bg-zinc-700 text-white rounded-full">API Integration</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <div className="mt-32 pb-8 text-center text-gray-500 text-sm">
          <span className="text-xs">© 2025 Bunyamin</span>
        </div>
      </div>
    </div>
  );
}