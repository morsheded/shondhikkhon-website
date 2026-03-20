'use client';

import { useState } from 'react';
import Link from 'next/link';
import { events } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';

const filters = ['all', 'wedding', 'holud', 'nikkah', 'reception', 'engagement', 'mehendi'] as const;

export default function PortfolioPage() {
  const [active, setActive] = useState<string>('all');

  const filtered = active === 'all' ? events : events.filter((e) => e.eventType === active);

  return (
    <>
      <section className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHeading
            subtitle="Our Work"
            title="Portfolio"
            description="A collection of love stories we've had the honor of capturing."
          />
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full transition-all duration-300 ${
                active === f
                  ? 'bg-maroon-800 text-cream-100 ring-1 ring-maroon-600/30'
                  : 'text-cream-300/30 hover:text-cream-300/60 hover:bg-cream-300/5'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-cream-300/30 text-sm">
              No events found for this category. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((event) => (
                <Link
                  key={event.slug}
                  href={`/portfolio/${event.slug}`}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1a1a18]"
                >
                  {/* Image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/60 to-[#1a1a18] shimmer" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                    <span className="inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest text-gold-400/80 bg-gold-400/10 rounded-full">
                      {event.eventType}
                    </span>
                    <h3 className="font-display text-lg text-cream-50 group-hover:text-gold-300 transition-colors">
                      {event.couple}
                    </h3>
                    <p className="text-xs text-cream-300/30">{event.venue}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
