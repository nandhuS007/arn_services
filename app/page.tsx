'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  { icon: '🏗️', title: 'JCB Services', description: 'Professional JCB equipment rental for construction projects' },
  { icon: '🚜', title: 'Tractor Hire', description: 'Heavy-duty tractors for agriculture and earthwork' },
  { icon: '⏱️', title: 'Timing Services', description: 'Expert timing and coordination for project success' },
  { icon: '🔧', title: 'Maintenance', description: '24/7 equipment maintenance and support' },
];

const founders = [
  { name: 'Founder 1', role: 'Founder & CEO', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder1-qiEUryOjLK1tGupJxLifdK0pN7QJYC.png' },
  { name: 'Founder 2', role: 'Operations Lead', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder2-30VFPcYol6FECA6iEOcYPY8EcQ9PCx.png' },
  { name: 'Founder 3', role: 'Business Manager', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder3-P9467EJaY3wJtwEeZajfOgIEACSztf.png' },
];

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <main className="w-full bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-accent">ARN EARTH MOVERS</h1>
          <div className="hidden md:flex gap-8">
            <Link href="#services" className="text-primary-foreground hover:text-accent transition-all">Services</Link>
            <Link href="#equipment" className="text-primary-foreground hover:text-accent transition-all">Equipment</Link>
            <Link href="#team" className="text-primary-foreground hover:text-accent transition-all">Team</Link>
            <Link href="#contact" className="text-primary-foreground hover:text-accent transition-all">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
          {/* Left Content */}
          <div className="flex-1 animate-fadeInUp">
            <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Heavy Equipment Solutions
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Professional JCB and tractor services for all your construction and earthmoving needs. Reliable, efficient, and always on time.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>

          {/* Right - Hero Image */}
          <div className="hidden lg:flex flex-1 justify-center items-center animate-slideInRight">
            <div className="relative w-96 h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full bg-primary-foreground/5 rounded-2xl overflow-hidden border border-accent/20 backdrop-blur-sm shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JCB-N2guhCCB13G65T6B6x9HWA6OWUVy3l.jpeg"
                  alt="JCB Equipment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive heavy equipment solutions tailored to your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                <div className="relative p-8 bg-card hover:bg-card/90 border border-border rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                  <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-125">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="mt-4 h-1 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase Section */}
      <section id="equipment" className="py-20 md:py-32 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Equipment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art machinery ready for your projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* JCB */}
            <div className="animate-slideInLeft group">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-border shadow-2xl group-hover:shadow-2xl group-hover:border-accent/50 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JCB-N2guhCCB13G65T6B6x9HWA6OWUVy3l.jpeg"
                  alt="JCB Backhoe Loader"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-2">JCB Backhoe Loader</h3>
              <p className="text-muted-foreground">Versatile and powerful equipment for excavation and loading tasks</p>
            </div>

            {/* Tractor */}
            <div className="animate-slideInRight group">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-border shadow-2xl group-hover:shadow-2xl group-hover:border-accent/50 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TRACTOR-kECFjNygVjYUBokJrB7Qz6U8JSIrdf.jpeg"
                  alt="Heavy Duty Tractor"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-2">Heavy Duty Tractor</h3>
              <p className="text-muted-foreground">Professional agricultural and earthmoving equipment with superior performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section id="team" className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="group flex flex-col items-center"
                style={{
                  animation: `scaleIn 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div className="relative mb-6 h-80 w-64 rounded-3xl overflow-hidden border-4 border-accent/30 shadow-lg group-hover:shadow-2xl group-hover:border-accent transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute inset-0 rounded-3xl group-hover:ring-2 group-hover:ring-accent/50 transition-all duration-300 pointer-events-none"></div>
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-3xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1 text-center">{founder.name}</h3>
                <p className="text-accent font-semibold text-center">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact us today for a quote and expert consultation on your earthmoving needs
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg">
              Get Quote Now
            </button>
            <button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/95 via-primary to-primary/95 border-t-4 border-accent">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 animate-fadeInUp">
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Quick Contact</h3>
            <p className="text-primary-foreground/80 mb-6">Need immediate assistance? Connect with us on WhatsApp</p>
          </div>
          <a
            href="https://wa.me/918675727272?text=Hello%20ARN%20Earth%20Movers%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white hover:bg-green-50 text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            <svg className="w-8 h-8 text-green-500 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.24C1.498 6.945.5 8.948.5 11.467c0 1.545.325 3.074.949 4.5L.5 23.25l4.952-1.297c1.359.731 2.814 1.175 4.514 1.175 5.049 0 9.15-4.095 9.15-9.128 0-2.367-.923-4.6-2.605-6.282-1.682-1.681-3.916-2.605-6.282-2.605zm4.905 12.816c-2.286 2.287-5.344 3.548-8.568 3.548-1.453 0-2.89-.322-4.234-.933l-.3-.158-3.11.815.824-3.01-.196-.31c-.68-1.395-1.038-2.896-1.038-4.426 0-3.22 1.253-6.253 3.533-8.532 2.28-2.28 5.314-3.533 8.535-3.533 3.221 0 6.253 1.253 8.533 3.533 2.28 2.279 3.533 5.312 3.533 8.533-.001 3.221-1.253 6.253-3.533 8.532z" />
            </svg>
            <span>+91 8675727272</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">ARN EARTH MOVERS</h3>
              <p className="text-primary-foreground/70">Professional heavy equipment solutions since day one.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">JCB Rental</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Tractor Hire</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-primary-foreground/70 text-sm">
                <span className="block">Email: info@arnearthmovers.com</span>
                <span className="block">WhatsApp: +91-8675727272</span>
                <a href="https://wa.me/918675727272" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 mt-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.24C1.498 6.945.5 8.948.5 11.467c0 1.545.325 3.074.949 4.5L.5 23.25l4.952-1.297c1.359.731 2.814 1.175 4.514 1.175 5.049 0 9.15-4.095 9.15-9.128 0-2.367-.923-4.6-2.605-6.282-1.682-1.681-3.916-2.605-6.282-2.605zm4.905 12.816c-2.286 2.287-5.344 3.548-8.568 3.548-1.453 0-2.89-.322-4.234-.933l-.3-.158-3.11.815.824-3.01-.196-.31c-.68-1.395-1.038-2.896-1.038-4.426 0-3.22 1.253-6.253 3.533-8.532 2.28-2.28 5.314-3.533 8.535-3.533 3.221 0 6.253 1.253 8.533 3.533 2.28 2.279 3.533 5.312 3.533 8.533-.001 3.221-1.253 6.253-3.533 8.532z" />
                  </svg>
                  Message us
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 ARN Earth Movers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
