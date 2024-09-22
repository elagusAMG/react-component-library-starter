/** @type {import('tailwindcss').Config} */
export default {
  important: '.ui',
  prefix: 'ui-',
  content: ['./lib/**/*.{ts,tsx}'],
  presets: [require('./tailwind-preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
