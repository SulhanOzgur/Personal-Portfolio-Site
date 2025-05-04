/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // <== BUNU EKLE!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // Eğer dark mode class temelli ise bunu da ekle
};
