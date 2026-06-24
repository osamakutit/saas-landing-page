import { UserPlus, Settings, Rocket } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Create your account',
    description: 'Sign up in seconds with email or SSO. No credit card required to get started.',
    icon: UserPlus,
  },
  {
    number: '02',
    title: 'Configure your workspace',
    description: 'Connect your tools, customize branding, and set up billing in a guided flow.',
    icon: Settings,
  },
  {
    number: '03',
    title: 'Launch and grow',
    description: 'Go live with one click. Monitor metrics and iterate with real-time insights.',
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding section-alt relative" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="How it works"
          title="Up and running in minutes"
          subtitle="Three simple steps from signup to your first paying customer."
        />
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-200 dark:from-indigo-600/40 dark:via-violet-500/50 dark:to-indigo-600/40" />
          {steps.map((step, idx) => (
            <div key={idx} className="relative text-center group">
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold text-primary dark:text-primary-glow tracking-widest uppercase mb-3 block">
                Step {step.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-content mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-content-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
