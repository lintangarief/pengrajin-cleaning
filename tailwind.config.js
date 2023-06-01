/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pengrajin-blue': '#007bff',
        'pengrajin-blue-dark': '#1067c4',
        'pengrajin-wash' : '#f2f0ed'
      },
      backgroundImage: {
        'hero-texture': "url('https://pixabay.com/get/ge20deda85c485c2eed083d2b3d17322d542aea35b9cac717f8f4b1fe1e4dbdfd4ca791093a33c55cdc13b5648782c019.jpg')",
        'hero-devi': "url('https://cdn.pixabay.com/photo/2021/04/05/16/28/packages-6153947_1280.jpg')", 
        'hero-shop-a' : "url('https://cdn.pixabay.com/photo/2019/12/15/08/17/bedroom-4696556_1280.jpg')",
      },
    },
  },
  plugins: [],
}
