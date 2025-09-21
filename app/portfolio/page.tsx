"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar, MapPin, ArrowLeft, Code, Database, Globe } from 'lucide-react';
import Link from 'next/link';

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
          <div className="grid md:grid-cols-2 gap-6">
            {/* Highground Project */}
            <AnimatedSection delay={300}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Highground</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  A comprehensive KPI management platform built with modern web technologies. Features real-time analytics, team collaboration, and intuitive dashboards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">React</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Node.js</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">TypeScript</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">MongoDB</span>
                </div>
                <div className="text-sm text-gray-400">
                  Status: <span className="text-yellow-400">In Development</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Fleetly Project */}
            <AnimatedSection delay={400}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Fleetly</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  AI-driven fleet management solution that optimizes routes, tracks vehicles, and provides predictive maintenance insights for modern transportation companies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Next.js</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Python</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">AI/ML</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">PostgreSQL</span>
                </div>
                <div className="text-sm text-gray-400">
                  Status: <span className="text-yellow-400">In Development</span>
                </div>
              </div>
            </AnimatedSection>

            {/* N8N Cloud Automation Project */}
            <AnimatedSection delay={500}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">N8N Cloud Automation – Cloudshift BV</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Built automated workflows and business process automation solutions for Cloudshift BV using N8N cloud platform. Streamlined operations, reduced manual tasks, and improved efficiency across multiple departments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">N8N</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Workflow Automation</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">API Integration</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Cloud Solutions</span>
                </div>
                <div className="text-sm text-gray-400">
                  Status: <span className="text-green-400">Completed</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Crane Simulation Project */}
            <AnimatedSection delay={600}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Crane Simulation – Eye Concept Industrial Automation BV</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Contributed to an advanced crane simulation in collaboration with HOWEST University students, commissioned by Port of Antwerp/Bruges, Europoort, and Eye Concept. The simulation increased container handling efficiency by 20% in a proof of concept.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Industrial Automation</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Simulation</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">C++</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Port Operations</span>
                </div>
                <div className="text-sm text-gray-400">
                  Status: <span className="text-green-400">Completed</span>
                </div>
              </div>
            </AnimatedSection>

            {/* NAGA Project */}
            <AnimatedSection delay={700}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Web Developer – NAGA (Fintech)</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Web development role at NAGA, a leading fintech company. Worked on financial trading platforms, user interfaces, and backend systems for cryptocurrency and traditional financial markets.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Vue.js</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">TypeScript</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Fintech</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Trading Platforms</span>
                </div>
                <div className="text-sm text-gray-400">
                  Status: <span className="text-green-400">Completed</span>
                </div>
              </div>
            </AnimatedSection>

            {/* National Police Project */}
            <AnimatedSection delay={800}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Graduation Project – Dutch Police</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Major graduation project in collaboration with the Dutch Police, specifically working on General Vehicle & Motor Management (GVMM) integration. Focused on secure data management, API development, and law enforcement system integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Java</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Spring Boot</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">API Integration</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Security</span>
                </div>
                <div className="text-sm text-gray-400">
                  Status: <span className="text-green-400">Completed</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection className="px-2 sm:px-4 mb-16" delay={400}>
          <h3 className="text-xl sm:text-2xl font-light mb-8 text-center">Technologies & Skills</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Frontend */}
            <AnimatedSection delay={500}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-800 transition-colors mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe size={24} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Frontend</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>React & Next.js</div>
                  <div>Vue.js & Nuxt.js</div>
                  <div>TypeScript</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Backend */}
            <AnimatedSection delay={600}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-800 transition-colors mb-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code size={24} className="text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Backend</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>Node.js & Express</div>
                  <div>Python & FastAPI</div>
                  <div>REST APIs</div>
                  <div>Authentication</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Database */}
            <AnimatedSection delay={700}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-800 transition-colors mb-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Database size={24} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Database</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>MongoDB</div>
                  <div>PostgreSQL</div>
                  <div>Firebase</div>
                  <div>Redis</div>
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