interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      <span
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-5 ${
          light
            ? 'bg-white/15 text-white border border-white/25'
            : 'bg-indigo-50 text-primary border border-indigo-100 dark:bg-indigo-500/15 dark:text-primary-glow dark:border-indigo-400/30'
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            light ? 'bg-emerald-300' : 'bg-primary dark:bg-primary-glow'
          }`}
        />
        {badge}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          light ? 'text-white' : 'text-gray-900 dark:text-content'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? 'text-indigo-100' : 'text-gray-600 dark:text-content-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
