import { CheckCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and early validation.',
    features: ['Up to 3 team members', 'Basic analytics', 'Community support', '1 project'],
    popular: false,
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For growing teams ready to scale their product.',
    features: [
      'Unlimited team members',
      'Advanced analytics & reports',
      'Priority email support',
      'Custom domains',
      'API access',
      'Integrations',
    ],
    popular: true,
    cta: 'Start 14-day Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations.',
    features: ['Dedicated account manager', 'SLA guarantee', 'SSO & SAML', 'Custom contracts', 'On-premise option'],
    popular: false,
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section className="section-padding section-surface relative" id="pricing">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free and upgrade as you grow. No hidden fees, cancel anytime."
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-primary text-white shadow-glow scale-[1.02] lg:scale-105 z-10 dark:shadow-dark-glow'
                  : 'glass card-hover dark:border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-content'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? 'text-indigo-100' : 'text-gray-500 dark:text-content-muted'
                  }`}
                >
                  {plan.description}
                </p>
              </div>
              <div className="mb-8">
                <span
                  className={`text-5xl font-extrabold tracking-tight ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-content'
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ml-1 ${
                      plan.popular ? 'text-indigo-200' : 'text-gray-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="flex-1 space-y-3.5 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-emerald-300' : 'text-primary dark:text-primary-glow'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-indigo-50' : 'text-gray-600 dark:text-content-muted'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-indigo-50 shadow-lg'
                    : 'bg-primary text-white hover:bg-primary-dark dark:bg-indigo-500 dark:hover:bg-indigo-400 shadow-lg shadow-indigo-500/20 dark:shadow-dark-glow'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
