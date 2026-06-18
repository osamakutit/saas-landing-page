import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-surface/90 backdrop-blur-xl border-b border-gray-200/70 dark:border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-glow group-hover:scale-105 transition-transform">
            S
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${
              scrolled ? 'text-gray-900 dark:text-content' : 'text-white'
            }`}
          >
            SaaS Demo
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:text-primary dark:text-content-muted dark:hover:text-primary-glow'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className={`p-2.5 rounded-xl transition ${
              scrolled
                ? 'hover:bg-gray-100 dark:hover:bg-surface-overlay text-gray-600 dark:text-content-muted'
                : 'hover:bg-white/10 text-white/80'
            }`}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="#pricing" className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-5">
            Start Free Trial
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition ${
              scrolled ? 'text-gray-600 dark:text-content-muted' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200/70 dark:border-border bg-white/95 dark:bg-surface-raised/98 backdrop-blur-xl px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-700 dark:text-content font-medium hover:text-primary dark:hover:text-primary-glow transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="btn-primary w-full mt-3 text-sm">
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}
