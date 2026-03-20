'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const SLIDES = [
  '/images/carousel/04.jpg',
  '/images/carousel/02.jpg',
  '/images/carousel/03.jpg',
  '/images/carousel/01.jpg',
  '/images/carousel/05.jpg',
];

const INTERVAL = 10000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(Array(SLIDES.length).fill(false));

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const markLoaded = (i: number) => {
    setLoaded((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Hero slide ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover object-center"
            onLoad={() => markLoaded(i)}
            sizes="100vw"
          />
          {/* Overlay — light vignette only */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-0.5 transition-all duration-500 ${
              i === current ? 'w-8 bg-gold-400' : 'w-4 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
