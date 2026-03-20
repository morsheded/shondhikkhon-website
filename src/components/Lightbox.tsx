'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, index, alt, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        className="absolute left-2 sm:left-6 z-10 p-3 text-white/50 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Image */}
      <div
        className="relative w-full h-full max-w-6xl max-h-[90vh] mx-16 sm:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${alt} — ${index + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Next */}
      <button
        className="absolute right-2 sm:right-6 z-10 p-3 text-white/50 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}
