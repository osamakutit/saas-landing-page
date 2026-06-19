import { useState } from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import heroImg from '../assets/hero.png';
import Modal from './Modal';

const stats = [
  { value: '10K+', label: 'Active teams' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9/5', label: 'User rating' },
];

const logos = ['Stripe', 'Vercel', 'Notion', 'Linear', 'Figma'];

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col mesh-hero overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 flex-1 flex items-center pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Now with AI-powered analytics
            </div>

            <h1 className="animate-fade-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Ship your SaaS
              <span className="block text-gradient">10x faster</span>
            </h1>

            <p className="animate-fade-up animate-delay-200 text-lg sm:text-xl text-indigo-100/90 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Everything you need to launch, convert, and scale — from stunning landing pages to
              subscription billing, all in one polished platform.
            </p>

            <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button onClick={() => setOpen(true)} className="btn-primary text-base">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary text-base">
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </button>
            </div>

            <div className="animate-fade-up animate-delay-400 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-indigo-200/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up animate-delay-200 hidden sm:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/40 border border-white/10 animate-float">
              <img
                src={heroImg}
                alt="Product dashboard preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent" />
            </div>

            <div className="absolute -left-6 top-1/4 glass-dark rounded-xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">+32% conversions</p>
                  <p className="text-indigo-300 text-xs">vs. last month</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 glass-dark rounded-xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">SOC 2 Compliant</p>
                  <p className="text-indigo-300 text-xs">Enterprise ready</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-dark rounded-xl px-5 py-3 shadow-xl hidden md:flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-white text-sm font-medium">Deploy in under 60 seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm py-8 px-6">
        <p className="text-center text-indigo-200/60 text-sm font-medium mb-5 uppercase tracking-widest">
          Trusted by innovative teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 max-w-4xl mx-auto">
          {logos.map((logo) => (
            <span key={logo} className="text-white/40 font-semibold text-lg tracking-wide hover:text-white/60 transition-colors">
              {logo}
            </span>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
