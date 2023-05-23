/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'pengrajin-blue': '#007bff',
        'pengrajin-blue-dark': '#1067c4',
      },
      backgroundImage: {
        'hero-texture': "url('https://pixabay.com/get/ge20deda85c485c2eed083d2b3d17322d542aea35b9cac717f8f4b1fe1e4dbdfd4ca791093a33c55cdc13b5648782c019.jpg')",
      },
    },
  },
  plugins: [],
}

