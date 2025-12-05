'use client'; 

import React, { useState } from 'react';
import { Briefcase, ChevronDown, Cloud, Code, Server, Smartphone, TrendingUp } from 'lucide-react';

// Service definitions with detailed descriptions and associated images
const servicesData = [
  {
    title: 'Full-Stack Web Development (React / Next.js)',
    description:
      '**Modern, High-Performance Development:** We create complete and scalable web applications. We use **Next.js** and **React** to ensure ultra-fast loading times (SSR/SSG), excellent SEO, and a fluid user experience, ideal for complex dashboards, client portals, and business platforms.',
    details:
      'Specializing in TypeScript, responsive design with Tailwind CSS, speed optimization (Core Web Vitals), and modular architecture for easy maintenance.',
    icon: Code,
    image: '/images/Full-Stack.png',
  },
  {
    title: 'Backend & API Development (.NET Core / Node.js)',
    description:
      '**Robust and Secure Core Systems:** We design and build the infrastructure that powers your application. We focus on RESTful and GraphQL APIs using **.NET Core** (C#) or **Node.js/Express**, guaranteeing security, performance, and horizontal scalability.',
    details:
      'Clean Architecture/DDD implementation, advanced authentication (JWT), database management (SQL Server, PostgreSQL), and exhaustive testing.',
    icon: Server,
    image: '/images/Backend.png',
  },
  {
    title: 'Mobile App Development (Android & React Native)',
    description:
      '**Native and Cross-Platform Experience:** We develop mobile applications for Android using **Kotlin/Java** with modern patterns (MVVM), and also build efficient cross-platform solutions with **React Native**. We ensure your app runs smoothly on all devices.',
    details: 'Payment integration (Stripe), offline support, push notifications, and UX design optimized for user retention.',
    icon: Smartphone,
    image: '/images/Mobile.png',
  },
  {
    title: 'Cloud, DevOps & Technical Architecture',
    description:
      '**Infrastructure as Code (IaC):** We provide cloud deployment, monitoring, and management solutions (primarily **AWS** or Google Cloud). We create automated CI/CD pipelines using **Docker** and **Kubernetes** to ensure a fast and reliable software lifecycle.',
    details:
      'High-availability environment configuration, backup strategies, cloud cost reduction, and infrastructure security optimization.',
    icon: Cloud,
    image: '/images/Cloud.png',
  },
  {
    title: 'Business Systems & Workflow Automation',
    description:
      '**Efficiency Through Software:** We transform manual processes into automated systems. We build custom software, such as inventory management systems, internal CRMs, booking systems, and analytics platforms.',
    details:
      'Integration with existing (legacy) systems, development of personalized payment modules, and automation of reports and email marketing.',
    icon: Briefcase,
    image: '/images/Business.png',
  },
  {
    title: 'Technical Consulting & Software Advisory',
    description:
      '**Strategic Technology Guidance:** We offer expert consulting to help you make informed decisions about your technology stack, architecture, and development roadmap. Ideal for startups or companies undergoing digital transformation.',
    details: 'Code auditing, migration planning, project estimation, and internal technical team training.',
    icon: TrendingUp,
    image: '/images/Technical.png',
  },
];

export default function Services() {
  // State to control which service is expanded. Stores the title of the service.
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedService(title === expandedService ? null : title);
  };

  return (
    <section id="services" className="section-default max-w-4xl mx-auto" aria-labelledby="services-title">
      <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-white text-center">
        Our Premium Development Services ⚙️
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Click on a service below to see key technological solutions and detailed focus areas.
      </p>

      {/* Accordion Container */}
      <div className="space-y-4">
        {servicesData.map((service) => {
          const Icon = service.icon;
          const isExpanded = service.title === expandedService;
          const contentId = `content-${service.title.replace(/\s/g, '-')}`;

          return (
            <div key={service.title} className="rounded-xl border border-white/10 transition-all duration-300">
              {/* Clickable Service Header */}
              <button
                className={`w-full text-left p-6 flex justify-between items-center transition-all duration-300 rounded-xl
                            ${
                              isExpanded
                                ? 'bg-cyan-900/40 shadow-[0_0_20px_rgba(6,182,212,0.3)]' // Neon glow active
                                : 'bg-white/5 hover:bg-white/10'
                            }`}
                onClick={() => handleToggle(service.title)}
                aria-expanded={isExpanded}
                aria-controls={contentId}
              >
                <div className="flex items-center gap-4">
                  <Icon className={`w-6 h-6 transition-colors ${isExpanded ? 'text-cyan-400' : 'text-gray-500'}`} />
                  <h3 className={`text-xl font-semibold transition-colors ${isExpanded ? 'text-cyan-200' : 'text-white'}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Chevron Icon to indicate expansion state */}
                <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180 text-cyan-400' : 'text-gray-500'}`} />
              </button>

              {/* Expandable Content (Accordion Body) */}
              <div
                id={contentId}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-[1200px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0'
                }`}
              >
                {isExpanded && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                    {/* Detailed Description */}
                    <div className="lg:col-span-2 space-y-3">
                      <p className="text-gray-200 text-lg font-medium" dangerouslySetInnerHTML={{ __html: service.description }} />
                      <p className="text-gray-400 text-sm italic border-l-2 border-cyan-500 pl-3 pt-2">
                        **Key Details:** {service.details}
                      </p>
                    </div>

                    {/* Service Image */}
                    <div className="lg:col-span-1 rounded-lg overflow-hidden border border-white/10 bg-black/50">
                      <img src={service.image} alt={`Visual for ${service.title}`} className="w-full h-48 lg:h-auto object-cover" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
