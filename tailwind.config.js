/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        '2xl': '1400px',
        '3xl': '1600px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}