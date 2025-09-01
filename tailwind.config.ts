import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f0f8ff', // Light sky blue
        'surface': '#e6f3ff', // Lighter periwinkle
        'primary': '#059669', // Softer emerald green
        'secondary': '#10b981', // Softer green
        'accent': '#3b82f6', // Sky blue
        'blue-primary': '#3b82f6', // Sky blue
        'blue-secondary': '#60a5fa', // Lighter sky blue
        'blue-accent': '#93c5fd', // Periwinkle
        'muted': '#64748b',
        'card': 'rgba(255, 255, 255, 0.9)',
        'card-border': 'rgba(5, 150, 105, 0.2)', // Updated to match new primary
        'text-primary': '#1e293b',
        'text-secondary': '#475569',
        'text-muted': '#64748b',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'biotech-gradient': 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #dbeafe 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.9) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        biotech: {
          'primary': '#059669',
          'primary-focus': '#047857',
          'primary-content': '#ffffff',

          'secondary': '#10b981',
          'secondary-focus': '#059669',
          'secondary-content': '#ffffff',

          'accent': '#3b82f6',
          'accent-focus': '#2563eb',
          'accent-content': '#ffffff',

          'neutral': '#e6f3ff',
          'neutral-focus': '#dbeafe',
          'neutral-content': '#1e293b',

          'base-100': '#f0f8ff',
          'base-200': '#e6f3ff',
          'base-300': '#dbeafe',
          'base-content': '#1e293b',
        },
      },
    ],
  },
};

export default config;
