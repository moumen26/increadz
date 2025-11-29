/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This sets DM Sans as the default font for the whole app
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
