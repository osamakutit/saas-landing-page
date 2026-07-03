/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#090D14',
          raised: '#121A28',
          overlay: '#1A2436',
          muted: '#0E1420',
          accent: '#151F30',
        },
        border: {
          DEFAULT: '#2A3A52',
          subtle: '#1E2A3D',
          strong: '#3D5270',
        },
        content: {
          DEFAULT: '#F1F5F9',
          muted: '#A8B4C7',
          faint: '#6B7A94',
        },
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
          light: '#818CF8',
          glow: '#A5B4FC',
        },
        secondary: '#6366F1',
        accent: '#F59E0B',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #9333ea 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        'gradient-dark': 'linear-gradient(180deg, #090D14 0%, #121A28 100%)',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(79, 70, 229, 0.12)',
        glow: '0 0 60px -12px rgba(79, 70, 229, 0.35)',
        card: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(79,70,229,0.08)',
        'dark-card': '0 4px 24px -4px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        'dark-glow': '0 0 40px -8px rgba(99, 102, 241, 0.45)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
