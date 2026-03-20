'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from './Lightbox';

interface EventGalleryProps {
  images: string[];
  couple: string;
}

export function EventGallery({ images, couple }: EventGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + images.length) % images.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % images.length);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-xl overflow-hidden bg-[#1a1a18] relative group cursor-zoom-in"
            onClick={() => open(i)}
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1' }}
            >
              <Image
                src={img}
                alt={`${couple} — photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          alt={couple}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
