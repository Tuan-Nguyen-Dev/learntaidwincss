const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
      // eslint-disable-next-line no-undef
      flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "neutralSilver":"#F5F7FA",
        "eutralDGrey":"#4D4D4D",
        "brandPrimary":"#4CAF4F",
        "neutralGrey":"#717171",
        "textGray900":"#18191F",
        "neutralLGrey":"#89939E"
      }
    },
  },
  plugins: [
     // eslint-disable-next-line no-undef
     flowbite.plugin(),
  ],
};
