import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0faf4',
          100: '#d8f3e3',
          200: '#b0e5c8',
          300: '#7dd0a8',
          400: '#4db583',
          500: '#2d9266',
          600: '#1e7550',
          700: '#195f41',
          800: '#174d36',
          900: '#13402d',
          950: '#0a2419',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [typography],
};
