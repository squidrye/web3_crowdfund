/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary-color': '#0f2027',
      },

      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      dropShadow: {
        '3xl': '0 12px 12px #0f2027',
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
  plugins: [],
});
