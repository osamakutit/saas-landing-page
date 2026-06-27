import { useForm } from 'react-hook-form';
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@saasdemo.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Office', value: 'San Francisco, CA' },
];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log('Contact form submitted:', data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      <div className="absolute inset-0 mesh-hero" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          badge="Contact"
          title="Let's build something great"
          subtitle="Have questions or want a personalized demo? Our team typically responds within 24 hours."
          light
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4 glass-dark rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm font-medium mb-0.5">{info.label}</p>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </div>
            ))}
            <div className="glass-dark rounded-2xl p-6">
              <p className="text-indigo-200 text-sm mb-2">Office hours</p>
              <p className="text-white font-semibold">Mon – Fri, 9am – 6pm PST</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 glass-dark rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">Name</label>
                <input
                  {...register('name', { required: true })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-indigo-300/50 focus:bg-white/15 focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition"
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">Name is required</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">Email</label>
                <input
                  {...register('email', { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-indigo-300/50 focus:bg-white/15 focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition"
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">Valid email is required</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-2">Message</label>
              <textarea
                {...register('message', { required: true })}
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-indigo-300/50 focus:bg-white/15 focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition resize-none"
              />
              {errors.message && <p className="text-red-300 text-sm mt-1">Message is required</p>}
            </div>
            <button
              type="submit"
              className="w-full btn-primary !py-3.5"
            >
              {sent ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Message Sent!
                </span>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
