import Link from 'next/link';
import { events } from '@/lib/data';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static paths for all events
export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-12 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto space-y-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cream-300/30 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest text-gold-400 bg-gold-400/10 rounded-full">
              {event.eventType}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-cream-50">{event.couple}</h1>
            <p className="text-sm text-cream-300/40 max-w-lg">{event.description}</p>
            <div className="flex items-center gap-6 text-xs text-cream-300/30">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} /> {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} /> {event.venue}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {event.images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-xl overflow-hidden bg-[#1a1a18] relative group"
              >
                {/* Placeholder - replace with actual images */}
                <div
                  className="shimmer"
                  style={{
                    aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Instructions for adding real images */}
          <div className="mt-16 p-6 rounded-xl border border-dashed border-cream-300/10 text-center space-y-2">
            <p className="text-xs text-cream-300/30">
              To add photos: place your images in{' '}
              <code className="px-1.5 py-0.5 bg-cream-300/5 rounded text-gold-500/60">
                /public/images/events/{event.slug}/
              </code>
            </p>
            <p className="text-xs text-cream-300/20">
              Then update the images array in{' '}
              <code className="px-1.5 py-0.5 bg-cream-300/5 rounded text-gold-500/60">
                src/lib/data.ts
              </code>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
