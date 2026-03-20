'use client';

import { siteConfig } from '@/lib/data';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" fill="white" />
        </div>
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1a1a18] text-cream-200 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
