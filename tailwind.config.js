/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-texture': "url('assets/hero-texture.jpg')",
      }
    },
  },
  plugins: [],
}

