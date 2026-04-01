'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="w-full bg-white dark:bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SNS Digital Solutions"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold tracking-tight text-black dark:text-white hidden sm:inline">
              SNS Digital Solutions
            </span>
          </a>
          <div className="hidden md:flex gap-8">
            <a
              href="#services"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-centeopacity-10r justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight text-black dark:text-white">
              Design that Elevates Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brand
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We create beautiful, responsive websites that engage users and drive real business results. Modern design meets strategic thinking.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="inline-block px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg font-semibold hover:border-black dark:hover:border-white transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          <div className="pt-12 text-gray-500 dark:text-gray-500">
            <p className="text-sm font-medium">↓ Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions to elevate your digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Design',
                description: 'Beautiful, modern designs that reflect your brand identity and engage your audience.',
                icon: '✨',
              },
              {
                title: 'Development',
                description: 'Fast, secure, and scalable websites built with the latest technologies and best practices.',
                icon: '⚡',
              },
              {
                title: 'Optimization',
                description: 'Improve performance, SEO, and user experience to maximize conversions and growth.',
                icon: '🎯',
              },
              {
                title: 'E-Commerce',
                description: 'Complete e-commerce solutions with payment integration and inventory management.',
                icon: '🛒',
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications that delight users.',
                icon: '📱',
              },
              {
                title: 'Maintenance',
                description: 'Ongoing support, updates, and optimization to keep your site running smoothly.',
                icon: '🔧',
              },
            ].map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`p-8 rounded-lg border transition-all duration-300 cursor-pointer ${
                  hoveredService === index
                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-lg transform -translate-y-2'
                    : 'bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-800'
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p
                  className={
                    hoveredService === index
                      ? 'text-gray-100 dark:text-gray-900'
                      : 'text-gray-600 dark:text-gray-400'
                  }
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Recent Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Showcase of our latest work and successful client partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'PreSchool',
                category: 'Education',
                description: 'Website for a preschool aimed for generating maximum leads for admissions.',
                image: '/preschool.png',
                url: 'https://indorepreschool.vercel.app/',
              },
              {
                title: 'Fashion Forward',
                category: 'E-Commerce',
                description: 'Modern fashion e-commerce platform with personalized recommendations.',
                image: '/artwork.png',
                url: 'https://kalagallery.vercel.app/',
              },
              {
                title: 'Wellness Co',
                category: 'Corporate',
                description: 'Clean corporate website for a wellness and fitness company.',
                image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=400&fit=crop',
                url: 'https://wellness-co.com',
              },
              {
                title: 'Remote Work',
                category: 'Media',
                description: 'Find remote jobs and listings from multiple sources.',
                image: '/work.png',
                url: 'https://workremotelynow.com',
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer rounded-lg overflow-hidden block hover:opacity-90 transition-opacity"
              >
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 border border-t-0 border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-black dark:text-white mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Choose a plan that fits your goals. Both plans include SEO and a polished, modern UI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Basic Plan */}
            <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />

              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">Basic Website</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Perfect for startups, portfolios, and local businesses.
                    </p>
                  </div>

                  <span className="shrink-0 inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-3 py-1 text-sm font-semibold border border-blue-200/60 dark:border-blue-900">
                    Most Popular
                  </span>
                </div>

                <div className="mt-8 flex items-end gap-3">
                  <div className="text-5xl font-extrabold tracking-tight text-black dark:text-white">
                    ₹6,000
                  </div>
                  <div className="pb-1">
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-through">₹12,000</div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">50% OFF</div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    'Up to 10 pages website development',
                    '1 year domain + hosting FREE',
                    'SEO included (basic on-page setup)',
                    'Mobile-first responsive design',
                    'Fast loading + performance optimization',
                    'Contact form integration',
                    'WhatsApp/Call CTA integration',
                    'Basic security hardening (HTTPS-ready)',
                  ].map((feature) => (
                    <div key={feature} className="flex gap-3 items-start">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                        <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://rzp.io/rzp/JV11IM4A"
                    className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full"
                  >
                    Buy Basic Plan
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white font-semibold hover:border-black dark:hover:border-white transition-all duration-300 w-full"
                  >
                    Talk to Us
                  </a>
                </div>

                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  Delivery timeline depends on content readiness (text/images). We’ll guide you end-to-end.
                </p>
              </div>
            </div>

            {/* E-Commerce Plan (Featured) */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-100 blur-sm" />
              <div className="relative rounded-2xl border border-gray-200/40 dark:border-gray-800/60 bg-black text-white dark:bg-white dark:text-black">
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">E-Commerce Pro</h3>
                      <p className="mt-2 text-white/75 dark:text-black/70">
                        For brands ready to sell online with a complete store experience.
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center rounded-full bg-white/10 dark:bg-black/10 px-3 py-1 text-sm font-semibold border border-white/20 dark:border-black/20">
                      Best Value
                    </span>
                  </div>

                  <div className="mt-8 flex items-end gap-3">
                    <div className="text-5xl font-extrabold tracking-tight">
                      ₹12,500
                    </div>
                    <div className="pb-1">
                      <div className="text-sm text-white/70 dark:text-black/60 line-through">₹25,000</div>
                      <div className="text-sm font-semibold text-green-300 dark:text-green-700">50% OFF</div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {[
                      'Full e-commerce website development',
                      'Admin panel to manage products, orders & customers',
                      'Payment gateway integration included',
                      'SEO included (on-page essentials)',
                      'Product categories, filters & search',
                      'Order notifications + invoice-ready flow',
                      'Speed & conversion optimized UI',
                      'Security best practices + role-based admin access',
                    ].map((feature) => (
                      <div key={feature} className="flex gap-3 items-start">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 dark:bg-black/10">
                          <span className="h-2 w-2 rounded-full bg-white dark:bg-black" />
                        </span>
                        <p className="text-white/90 dark:text-black/80">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://rzp.io/rzp/jEP8NZ6S"
                      className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white text-black dark:bg-black dark:text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full"
                    >
                      Buy E-Commerce Plan
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-4 rounded-xl border-2 border-white/40 dark:border-black/30 text-white dark:text-black font-semibold hover:border-white dark:hover:border-black transition-all duration-300 w-full"
                    >
                      Request a Call
                    </a>
                  </div>

                  <p className="mt-6 text-sm text-white/70 dark:text-black/60">
                    Need custom features (shipping APIs, multi-vendor, GST invoice, etc.)? We can scale this plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            By purchasing, you agree to share necessary content/assets for timely delivery.
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">About Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                SNS Digital Solutions is a creative agency dedicated to building exceptional digital experiences. With over a decade of combined expertise, we help businesses of all sizes establish a powerful online presence.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We believe in the power of thoughtful design and clean code. Every project is approached with strategy, creativity, and meticulous attention to detail.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">50+</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">40+</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image src="/logo.png" alt="SNS Digital Solutions Logo" fill className="object-contain p-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch with our team today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a
              href="mailto:darshansagare@snsdigitalsolutions.in"
              className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Send Email
            </a>
            <a
              href="tel:+1234567890"
              className="inline-block px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg font-semibold hover:border-black dark:hover:border-white transition-all duration-300"
            >
              Call Us
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div>
              <h4 className="font-bold text-black dark:text-white mb-2">Email</h4>
              <p className="text-gray-600 dark:text-gray-400">darshansagare@snsdigitalsolutions.in</p>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-2">Phone</h4>
              <p className="text-gray-600 dark:text-gray-400">+91 9111060477</p>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-2">Address</h4>
              <p className="text-gray-600 dark:text-gray-400">2 Vihar vihar , swasthya nagar,sukhliya,Indore ,452010</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">© 2026 S&S Digital Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition text-sm font-medium">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition text-sm font-medium">
              Terms
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition text-sm font-medium">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
