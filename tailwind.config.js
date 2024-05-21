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
        toodark: "#3e1929",
        dark: "#345995",
        lite: "#edcfbd",
        toolite: "#eeebd0"
      },
      fontFamily: {
        sans: ['"poiret-one"', "sans-serif"],
        custom: ['"tilt-warp"', "sans-serif"]
      }
    },
  },
  plugins: [],
}