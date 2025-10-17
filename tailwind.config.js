// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'], // so `font-sans` works
      },
      colors: {
        lightgray: '#f7f7f7',
        navy: '#001f3f',
      },
    },
  },
  plugins: [],
};



