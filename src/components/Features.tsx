import { Users, CreditCard, Zap, BarChart3, Lock, Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';

const features = [
  {
    icon: Users,
    title: 'Team Management',
    description: 'Invite teammates, assign roles, and manage permissions from a single dashboard.',
    span: 'lg:col-span-2',
  },
  {
    icon: CreditCard,
    title: 'Billing & Subscriptions',
    description: 'Stripe-powered recurring payments with flexible plans and invoicing.',
    span: '',
  },
  {
    icon: Zap,
    title: 'Blazing Performance',
    description: 'Edge-optimized delivery with sub-second load times worldwide.',
    span: '',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track conversions, churn, and revenue with beautiful dashboards that update live.',
    span: 'lg:col-span-2',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with SSO, 2FA, and end-to-end encryption.',
    span: '',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Serve content from 200+ edge locations for minimal latency.',
    span: '',
  },
];

export default function Features() {
  return (
    <section className="section-padding mesh-gradient relative" id="features">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          badge="Features"
          title="Everything you need to grow"
          subtitle="A complete toolkit designed for modern SaaS teams — from launch to scale, without the complexity."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group glass rounded-2xl p-7 card-hover ${f.span}`}
            >
              <div className="icon-box mb-5 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-6 h-6 text-primary dark:text-primary-glow" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-content mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-content-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
