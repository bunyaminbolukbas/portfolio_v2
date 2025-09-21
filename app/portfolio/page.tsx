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
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-4xl mx-auto pt-16">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-4">
            My Portfolio
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-gray-300">
            my journey & work.
          </h2>
        </AnimatedSection>

        {/* Timeline Section */}
        <AnimatedSection className="px-2 sm:px-4 mb-16" delay={200}>
          <h3 className="text-xl sm:text-2xl font-light mb-8 text-center">My Journey</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <AnimatedSection delay={400}>
                <div className="relative flex items-start">
                  <div className="absolute left-2 sm:left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>
                  <div className="ml-12 sm:ml-20">
                    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors">
                      <div className="flex items-center mb-3">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-400">2025 - Present</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Building Highground & Fleetly</h3>
                      <p className="text-gray-300">
                        Currently developing innovative software solutions - Highground for KPI management and Fleetly for AI-driven fleet management.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Timeline Item 2 */}
              <AnimatedSection delay={500}>
                <div className="relative flex items-start">
                  <div className="absolute left-2 sm:left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-black"></div>
                  <div className="ml-12 sm:ml-20">
                    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors">
                      <div className="flex items-center mb-3">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-400">2023 - 2024</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Erasmus Project & National Police Internship</h3>
                      <p className="text-gray-300">
                        Completed a major Erasmus project in Belgium and gained valuable experience through an internship at the National Police.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Timeline Item 3 */}
              <AnimatedSection delay={600}>
                <div className="relative flex items-start">
                  <div className="absolute left-2 sm:left-6 w-4 h-4 bg-orange-400 rounded-full border-4 border-black"></div>
                  <div className="ml-12 sm:ml-20">
                    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors">
                      <div className="flex items-center mb-3">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-400">2022 - 2023</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Software Development Studies & BBE Operations</h3>
                      <p className="text-gray-300">
                        Started studying Software Development in Rotterdam and founded BBE Operations, my freelance brand, completing various projects for small businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Timeline Item 4 */}
              <AnimatedSection delay={700}>
                <div className="relative flex items-start">
                  <div className="absolute left-2 sm:left-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-black"></div>
                  <div className="ml-12 sm:ml-20">
                    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors">
                      <div className="flex items-center mb-3">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-400">2020 - 2022</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">NAGA Cyprus - Application Manager</h3>
                      <p className="text-gray-300">
                        Worked onsite at NAGA in Cyprus as Application Manager, supporting Dutch customers and transitioning into full-stack development with a focus on frontend.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Timeline Item 5 */}
              <AnimatedSection delay={800}>
                <div className="relative flex items-start">
                  <div className="absolute left-2 sm:left-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black"></div>
                  <div className="ml-12 sm:ml-20">
                    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors">
                      <div className="flex items-center mb-3">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-400">2019 - 2020</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Started Coding as a Hobby in Malta</h3>
                      <p className="text-gray-300">
                        Began my coding journey as a hobby in Malta during COVID, learning programming fundamentals and discovering my passion for software development.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Projects Section */}
        <AnimatedSection className="px-2 sm:px-4 mb-16" delay={300}>
          <h3 className="text-xl sm:text-2xl font-light mb-8 text-center">Featured Projects</h3>

          <div className="space-y-3">
            {/* Project Card 1 */}
            <AnimatedSection delay={400}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group mb-3">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Highground</h3>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <Github size={18} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <ExternalLink size={18} />
                  </Button>
                </div>
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

            {/* Project Card 2 */}
            <AnimatedSection delay={500}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group mb-3">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Fleetly</h3>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <Github size={18} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <ExternalLink size={18} />
                  </Button>
                </div>
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

            {/* Project Card 3 */}
            <AnimatedSection delay={600}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group mb-3">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Portfolio Website</h3>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <Github size={18} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <ExternalLink size={18} />
                  </Button>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark theme, mobile optimization, and contact form integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Next.js</span>
                <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">TypeScript</span>
                <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Vercel</span>
              </div>
              <div className="text-sm text-gray-400">
                Status: <span className="text-green-400">Live</span>
              </div>
              </div>
            </AnimatedSection>

            {/* Project Card 4 */}
            <AnimatedSection delay={700}>
              <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-colors group mb-3">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">More Projects</h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                      <Github size={18} />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Explore more of my work and experiments on GitHub. From small utilities to learning projects, you'll find a variety of code samples and implementations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Various</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">JavaScript</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Python</span>
                  <span className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">Web Development</span>
                </div>
                <div className="text-sm text-gray-400">
                  Status: <span className="text-blue-400">Ongoing</span>
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