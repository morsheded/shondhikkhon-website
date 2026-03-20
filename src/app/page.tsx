'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Film, Heart, Star } from 'lucide-react';
import { events, packages, siteConfig } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { HeroCarousel } from '@/components/HeroCarousel';

export default function Home() {
  const featured = events.filter((e) => e.featured).slice(0, 4);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-screen overflow-hidden">
        <HeroCarousel />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ===== FEATURED WORK ===== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Stories"
            title="Featured Work"
            description="Every couple has a unique story. Here are some of our favorites."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featured.map((event, i) => (
              <Link
                key={event.slug}
                href={`/portfolio/${event.slug}`}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? 'sm:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
                } bg-charcoal-light`}
              >
                <Image
                  src={event.coverImage}
                  alt={event.couple}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400/70">
                    {event.eventType}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-cream-50">
                    {event.couple}
                  </h3>
                  <p className="text-xs text-cream-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {event.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-500/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-cream-300/40 hover:text-gold-400 transition-colors duration-300"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BRAND STATEMENT ===== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/30 via-transparent to-maroon-950/30" />

        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-maroon-900/30 flex items-center justify-center ring-1 ring-maroon-800/20">
            <Heart size={24} className="text-maroon-400" />
          </div>

          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream-100 leading-relaxed italic">
            &ldquo;We capture stories through creative photography — molding today&rsquo;s precious
            moments into tomorrow&rsquo;s treasured memories.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-8 text-cream-300/30 text-xs uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <Camera size={14} className="text-gold-500/50" /> Photography
            </span>
            <span className="flex items-center gap-2">
              <Film size={14} className="text-gold-500/50" /> Cinematography
            </span>
            <span className="flex items-center gap-2">
              <Star size={14} className="text-gold-500/50" /> Worldwide
            </span>
          </div>
        </div>
      </section>

      {/* ===== PACKAGES PREVIEW ===== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#0f0f0e]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Investment"
            title="Our Packages"
            description="Tailored packages to suit events of every scale, from intimate gatherings to grand celebrations."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                  pkg.highlight
                    ? 'bg-maroon-950/40 border-maroon-800/40 ring-1 ring-maroon-700/20'
                    : 'bg-[#1a1a18] border-cream-300/5 hover:border-maroon-900/30'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-maroon-800 text-[10px] uppercase tracking-widest text-cream-200 rounded-full">
                    Popular
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="font-display text-lg text-cream-100">{pkg.name}</h3>
                  <div>
                    <span className="text-2xl font-display text-gold-500">
                      ৳{pkg.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-cream-300/30 ml-1">per event</span>
                  </div>
                  <p className="text-xs text-cream-300/40">{pkg.recommended}</p>

                  <ul className="space-y-2 pt-4 border-t border-cream-300/5">
                    {pkg.features.slice(0, 5).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-cream-300/50">
                        <span className="mt-1 w-1 h-1 rounded-full bg-maroon-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                    {pkg.features.length > 5 && (
                      <li className="text-xs text-cream-300/30">
                        +{pkg.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-maroon-900 hover:bg-maroon-800 text-cream-100 text-sm uppercase tracking-wider rounded-full transition-all duration-300 ring-1 ring-maroon-700/30"
            >
              View All Packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/40 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-maroon-900/10 rounded-full blur-[150px]" />

        <div className="relative max-w-2xl mx-auto text-center space-y-8">
          <p className="font-bengali text-lg text-maroon-400">{siteConfig.nameBn}</p>
          <h2 className="font-display text-3xl sm:text-5xl text-cream-50 leading-tight">
            Ready to tell your story?
          </h2>
          <p className="text-sm text-cream-300/40">
            Let us capture the moments that matter most. Get in touch to discuss your special day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-us"
              className="group flex items-center gap-2 px-10 py-4 bg-maroon-800 hover:bg-maroon-700 text-cream-100 text-sm uppercase tracking-wider rounded-full transition-all duration-300"
            >
              Book Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream-300/40 hover:text-green-400 transition-colors"
            >
              Or chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
