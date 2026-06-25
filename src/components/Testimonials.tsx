import { Star, Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'Lena Martinez',
    role: 'Founder, StartupX',
    quote:
      'We replaced our entire marketing stack in a weekend. Conversions jumped 32% in the first month alone.',
    avatar: 'LM',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Alex Park',
    role: 'CTO, Cloudify',
    quote:
      'The developer experience is unmatched. Our team ships landing page updates in hours, not weeks.',
    avatar: 'AP',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'Sara Kim',
    role: 'Product Lead, Nova',
    quote:
      'Our customers immediately noticed the difference. The UI feels premium and builds instant trust.',
    avatar: 'SK',
    color: 'from-violet-500 to-purple-500',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding mesh-gradient relative" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Testimonials"
          title="Loved by teams worldwide"
          subtitle="Join thousands of founders and product teams who ship faster with our platform."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-7 card-hover relative overflow-hidden group"
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-indigo-100 dark:text-indigo-500/25 group-hover:text-indigo-200 dark:group-hover:text-indigo-400/40 transition-colors" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-content leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shadow-md`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-content">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-content-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
