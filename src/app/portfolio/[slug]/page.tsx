import Link from 'next/link';
import { events } from '@/lib/data';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';
import { EventGallery } from '@/components/EventGallery';

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

      {/* Gallery */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <EventGallery images={event.images} couple={event.couple} />
        </div>
      </section>
    </>
  );
}
