/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CA8A04',
          dark: '#B27B04'
        }
      }
    },
  },
  // Purge unused styles in production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [
        'bg-green-500',
        'bg-red-500',
        'text-green-600',
        'text-red-600',
        'hover:bg-green-600',
        'hover:bg-red-600'
      ]
    }
  }
};