'use client';

import { useState } from 'react';
import Link from 'next/link';
import { packages, addOns, siteConfig } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { Check, ArrowRight, Plus } from 'lucide-react';

export default function PackagesPage() {
  const [expandedAddon, setExpandedAddon] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHeading
            subtitle="Investment"
            title="Our Packages"
            description="From intimate celebrations to grand affairs — choose the package that fits your vision."
          />
        </div>
      </section>

      {/* Packages grid */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl border transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-maroon-950/60 to-[#1a1a18] border-maroon-700/30 ring-1 ring-maroon-700/15 shadow-xl shadow-maroon-900/10'
                  : 'bg-[#1a1a18] border-cream-300/5 hover:border-maroon-900/20'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-maroon-600 to-transparent" />
              )}

              {pkg.highlight && (
                <div className="text-center py-1.5 bg-maroon-900/30">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold-400">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1 p-6 space-y-5">
                {/* Header */}
                <div className="space-y-1">
                  <h3 className="font-display text-xl text-cream-100">{pkg.name}</h3>
                  <p className="font-bengali text-xs text-maroon-400/60">{pkg.nameBn}</p>
                </div>

                {/* Price */}
                <div className="pb-4 border-b border-cream-300/5">
                  <span className="font-display text-3xl text-gold-500">
                    ৳{pkg.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-cream-300/25 ml-1.5">per event</span>
                  {pkg.extraHourCost && (
                    <p className="text-[10px] text-cream-300/20 mt-1">
                      Extra hour: ৳{pkg.extraHourCost.toLocaleString()}
                    </p>
                  )}
                </div>

                {/* Recommended */}
                <p className="text-xs text-cream-300/40 italic">{pkg.recommended}</p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-cream-300/50">
                      <Check size={12} className="mt-0.5 text-maroon-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <Link
                  href="/book-us"
                  className={`w-full flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider rounded-xl transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-maroon-800 hover:bg-maroon-700 text-cream-100 ring-1 ring-maroon-600/20'
                      : 'bg-cream-300/5 hover:bg-maroon-900/30 text-cream-200/60 hover:text-cream-100'
                  }`}
                >
                  Book This Package
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6 lg:px-12 bg-[#0f0f0e]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="Enhance Your Experience"
            title="Add-Ons"
            description="Customize your package with these premium additions."
          />

          <div className="mt-12 space-y-3">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="group flex items-center justify-between p-5 rounded-xl border border-cream-300/5 hover:border-maroon-900/20 bg-[#1a1a18] hover:bg-maroon-950/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-maroon-900/20 flex items-center justify-center ring-1 ring-maroon-800/10">
                    <Plus size={14} className="text-gold-500/50" />
                  </div>
                  <div>
                    <h4 className="text-sm text-cream-100 font-medium">{addon.name}</h4>
                    <p className="text-xs text-cream-300/30">{addon.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-display text-lg text-gold-500">
                    ৳{addon.price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms note */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs text-cream-300/25 leading-relaxed">
            70% advance payment required to confirm booking. All packages include a sneak peek
            within one week and final delivery within 45 days. For events outside Dhaka, additional
            costs for transportation, accommodation, and food apply.
          </p>
          <Link
            href="/terms"
            className="inline-flex items-center gap-1.5 text-xs text-cream-300/30 hover:text-gold-400 transition-colors"
          >
            View full Terms &amp; Conditions
            <ArrowRight size={10} />
          </Link>
        </div>
      </section>
    </>
  );
}
