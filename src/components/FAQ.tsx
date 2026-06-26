import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import SectionHeader from './SectionHeader';

const faqItems = [
  {
    question: 'Is there a free plan available?',
    answer:
      'Yes! Our Starter plan is free forever and includes everything you need to validate your idea. Upgrade anytime as your team grows.',
  },
  {
    question: 'Can I customize the design and branding?',
    answer:
      'Absolutely. All colors, fonts, and components are fully customizable through Tailwind configuration. White-label options are available on Enterprise plans.',
  },
  {
    question: 'Do I need a backend to use this?',
    answer:
      'The landing page works out of the box as a static site. Forms can connect to Formspree, your own API, or any serverless function with minimal setup.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Starter users get community support. Pro plans include priority email with 24h response. Enterprise customers receive a dedicated account manager.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel at any time with no penalties. Your data remains accessible until the end of your billing period.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding section-surface" id="faq">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          badge="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know before getting started."
        />
        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-indigo-200 dark:border-indigo-500/40 shadow-card dark:shadow-dark-card bg-indigo-50/50 dark:bg-indigo-500/10'
                    : 'border-gray-200 dark:border-border bg-white dark:bg-surface-raised hover:border-indigo-100 dark:hover:border-border-strong'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center gap-4 p-5 text-left"
                >
                  <span className="flex items-center gap-3 font-semibold text-gray-900 dark:text-content">
                    <MessageCircleQuestion
                      className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-primary dark:text-primary-glow' : 'text-gray-400 dark:text-content-faint'}`}
                    />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary dark:text-primary-glow' : 'text-gray-400 dark:text-content-faint'
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 dark:text-content-muted leading-relaxed ml-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
