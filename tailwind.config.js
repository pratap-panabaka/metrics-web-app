/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 2px 2px rgba(62, 25, 41, 1)',
      },
      colors: {
        toodark: "#02182b",
        dark: "#016fb9",
        lite: "#e7f9a9",
        toolite: "#68c5db"
      },
      fontFamily: {
        sans: ['"poiret-one"', "sans-serif"],
        custom: ['"tilt-warp"', "sans-serif"]
      }
    },
  },
  plugins: [],
}