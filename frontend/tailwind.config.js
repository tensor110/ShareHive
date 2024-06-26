const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
   screens:{
    'xxsm': '320px',
    'xsm': '400px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
   },
   
    extend: {
      colors:{
        primary:"#1565D8",
        dark:{
          light:"#5A7184",
          hard:"#0D2436",
          soft:"#183B56"
        },
      },
      fontFamily:{
        opensans:["'Open Sans'", "sans-serif"],
        roboto:["'Roboto'", "sans-serif"],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

