import { Globe, Mail, Share2 } from 'lucide-react';

const links = {
  Product: ['Features', 'Pricing', 'How it works', 'FAQ'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-border bg-gray-50 dark:bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-glow dark:shadow-dark-glow">
                S
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-content">SaaS Demo</span>
            </div>
            <p className="text-gray-600 dark:text-content-muted max-w-sm leading-relaxed mb-6">
              The modern platform to launch, grow, and scale your product — built for teams who ship fast.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white dark:bg-surface-raised border border-gray-200 dark:border-border flex items-center justify-center text-gray-500 dark:text-content-muted hover:text-primary dark:hover:text-primary-glow hover:border-primary/30 dark:hover:border-indigo-500/40 transition-all"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 dark:text-content mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 dark:text-content-muted hover:text-primary dark:hover:text-primary-glow transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-gray-200 dark:border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-content-faint">
          <p>&copy; {new Date().getFullYear()} SaaS Demo. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
