import Image from 'next/image';
import { siteConfig } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { Camera, Film, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Camera, value: '500+', label: 'Events Captured' },
  { icon: Film, value: '300+', label: 'Films Created' },
  { icon: Users, value: '1000+', label: 'Happy Couples' },
  { icon: Globe, value: '5+', label: 'Countries' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <p className="font-bengali text-lg text-maroon-400">{siteConfig.nameBn}</p>
          <h1 className="font-display text-4xl sm:text-6xl text-cream-50">About Us</h1>
          <p className="text-sm text-cream-300/40 max-w-lg mx-auto leading-relaxed">
            A passionate team of photographers and cinematographers dedicated to telling your love story.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-maroon-950 to-[#1a1a18] relative overflow-hidden ring-1 ring-maroon-900/20">
            <div className="absolute inset-0 shimmer" />
            <div className="absolute bottom-6 left-6">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-maroon-800/30">
                <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <SectionHeading
              subtitle="Our Story"
              title="Capturing love, one frame at a time"
              align="left"
            />
            <div className="space-y-4 text-sm text-cream-300/50 leading-relaxed">
              <p>
                Shondhikkhon is a multi-disciplinary wedding photography and cinematography team
                based in Dhaka, Bangladesh. We believe that every event carries its own unique story
                — and our mission is to tell that story through artful imagery and film.
              </p>
              <p>
                Our work encompasses photography, cinematography, sound and motion. Whether
                documenting the vibrant energy of a Holud ceremony, the sacred vows of a Nikkah,
                or the grand celebration of a Wedding, we approach every moment with passion,
                intelligence, and personal commitment.
              </p>
              <p>
                From intimate gatherings to grand affairs, from Dhaka to destinations across the
                globe — we are here to transform your precious moments into timeless visual stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-[#0f0f0e]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-maroon-900/20 flex items-center justify-center ring-1 ring-maroon-800/20">
                <stat.icon size={20} className="text-gold-500/60" />
              </div>
              <div className="font-display text-3xl text-cream-50">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-cream-300/30">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeading subtitle="What We Offer" title="Our Services" />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Photography',
                desc: 'From candid moments to styled portraits — we capture every emotion with artistic precision.',
                icon: Camera,
              },
              {
                title: 'Cinematography',
                desc: 'Cinematic wedding films with trailers, full-length videos, and Instagram reels.',
                icon: Film,
              },
              {
                title: 'Event Coverage',
                desc: 'Complete coverage of Holud, Nikkah, Wedding, Reception, and Engagement events.',
                icon: Users,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-cream-300/5 hover:border-maroon-900/30 bg-[#1a1a18] hover:bg-maroon-950/20 transition-all duration-500 space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-maroon-900/20 flex items-center justify-center ring-1 ring-maroon-800/10 group-hover:bg-maroon-800/30 transition-colors">
                  <service.icon size={18} className="text-gold-500/60" />
                </div>
                <h3 className="font-display text-lg text-cream-100">{service.title}</h3>
                <p className="text-sm text-cream-300/40 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
