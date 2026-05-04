/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       portalNavy: '#0a1d37',
      portalTeal: '#2dd4bf',
      }
    },
  },
  plugins: [],
}