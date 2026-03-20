'use client';

import { useState } from 'react';
import { siteConfig, packages } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { Send, Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function BookUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, integrate with Formspree, Cloudflare Workers, or your email service
    // For now, we'll show a success state
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHeading
            subtitle="Let's Connect"
            title="Book Your Date"
            description="Tell us about your special day and we'll craft the perfect coverage for your celebration."
          />
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-12 rounded-2xl border border-maroon-800/20 bg-maroon-950/20 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-900/20 flex items-center justify-center ring-1 ring-green-700/20">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="font-display text-2xl text-cream-50">Thank You!</h3>
                <p className="text-sm text-cream-300/40 max-w-md mx-auto">
                  We&apos;ve received your inquiry. Our team will reach out to you within 24 hours
                  to discuss your event in detail.
                </p>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-800/20 hover:bg-green-800/30 text-green-300 text-sm rounded-full transition-colors ring-1 ring-green-700/20"
                >
                  <MessageCircle size={14} />
                  Or chat now on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                      Bride&apos;s Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 placeholder:text-cream-300/15 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                      Groom&apos;s Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 placeholder:text-cream-300/15 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all"
                      placeholder="Enter name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 placeholder:text-cream-300/15 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all"
                      placeholder="+880"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 placeholder:text-cream-300/15 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                      Event Type
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all appearance-none"
                    >
                      <option value="">Select event type</option>
                      <option value="holud">Holud</option>
                      <option value="nikkah">Nikkah</option>
                      <option value="wedding">Wedding</option>
                      <option value="reception">Reception</option>
                      <option value="engagement">Engagement</option>
                      <option value="mehendi">Mehendi</option>
                      <option value="multiple">Multiple Events</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                      Event Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                    Package Interest
                  </label>
                  <select className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all appearance-none">
                    <option value="">Not sure yet</option>
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} — ৳{pkg.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                    Venue &amp; Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 placeholder:text-cream-300/15 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all"
                    placeholder="Venue name and city"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-cream-300/30">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-[#1a1a18] border border-cream-300/5 rounded-xl text-sm text-cream-100 placeholder:text-cream-300/15 focus:outline-none focus:border-maroon-700/40 focus:ring-1 focus:ring-maroon-700/20 transition-all resize-none"
                    placeholder="Tell us more about your event — guest count, special requests, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-maroon-800 hover:bg-maroon-700 text-cream-100 text-sm uppercase tracking-wider rounded-xl transition-all duration-300 ring-1 ring-maroon-600/20 hover:ring-maroon-500/30"
                >
                  <Send size={14} />
                  Send Inquiry
                </button>

                <p className="text-[10px] text-cream-300/20 text-center">
                  We typically respond within 24 hours. For urgent inquiries, contact us on WhatsApp.
                </p>
              </form>
            )}
          </div>

          {/* Contact sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick contact card */}
            <div className="p-6 rounded-2xl border border-cream-300/5 bg-[#1a1a18] space-y-6">
              <h3 className="font-display text-lg text-cream-100">Quick Contact</h3>

              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm text-cream-300/50 hover:text-cream-200 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-maroon-900/20 flex items-center justify-center ring-1 ring-maroon-800/10">
                    <Phone size={14} className="text-gold-500/50" />
                  </div>
                  {siteConfig.phone}
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-cream-300/50 hover:text-cream-200 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-maroon-900/20 flex items-center justify-center ring-1 ring-maroon-800/10">
                    <Mail size={14} className="text-gold-500/50" />
                  </div>
                  {siteConfig.email}
                </a>

                <div className="flex items-center gap-3 text-sm text-cream-300/50">
                  <div className="w-9 h-9 rounded-lg bg-maroon-900/20 flex items-center justify-center ring-1 ring-maroon-800/10">
                    <MapPin size={14} className="text-gold-500/50" />
                  </div>
                  {siteConfig.address}
                </div>

                <div className="flex items-center gap-3 text-sm text-cream-300/50">
                  <div className="w-9 h-9 rounded-lg bg-maroon-900/20 flex items-center justify-center ring-1 ring-maroon-800/10">
                    <Clock size={14} className="text-gold-500/50" />
                  </div>
                  Available Worldwide
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl border border-green-800/20 bg-green-950/10 hover:bg-green-950/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-green-800/20 flex items-center justify-center ring-1 ring-green-700/20 group-hover:bg-green-800/30 transition-colors">
                <MessageCircle size={20} className="text-green-400" fill="currentColor" />
              </div>
              <div>
                <h4 className="text-sm text-cream-100 font-medium">Chat on WhatsApp</h4>
                <p className="text-xs text-cream-300/30">Quick response, direct conversation</p>
              </div>
            </a>

            {/* Social */}
            <div className="p-6 rounded-2xl border border-cream-300/5 bg-[#1a1a18] space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-cream-300/30">Follow Our Work</h4>
              <div className="flex gap-3">
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-center text-xs text-cream-300/30 hover:text-maroon-400 bg-cream-300/3 hover:bg-maroon-900/10 rounded-lg transition-all"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-center text-xs text-cream-300/30 hover:text-maroon-400 bg-cream-300/3 hover:bg-maroon-900/10 rounded-lg transition-all"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
