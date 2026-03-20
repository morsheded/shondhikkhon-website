interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({ subtitle, title, description, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${align === 'center' ? 'text-center' : 'text-left'} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {subtitle && (
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-500">
          {subtitle}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl leading-tight ${light ? 'text-cream-50' : 'text-cream-100'}`}>
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-cream-300/50 leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
      )}
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} pt-2`}>
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-maroon-700" />
        <span className="w-1.5 h-1.5 rounded-full bg-maroon-700" />
        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-maroon-700" />
      </div>
    </div>
  );
}
