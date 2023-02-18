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
        'secondary-color': 'rgba(28, 28, 36, 0.9)',
      },

      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      dropShadow: {
        '3xl': '0 15px 15px rgba(255, 255, 255, 0.25)',
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
  plugins: [],
});
