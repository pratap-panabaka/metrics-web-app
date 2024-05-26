/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'custom': '2px 2px 2px 2px rgba(62, 25, 41, 1)',
      },
      colors: {
        toodark: "#6C584C",
        dark: "#A98467",
        "dark-other": "#ADC178",
        lite: "#DDE5B6",
        toolite: "#F0EAD2"
      },
      fontFamily: {
        sans: ['"poiret-one"', "sans-serif"],
        custom: ['"tilt-warp"', "sans-serif"]
      }
    },
  },
  plugins: [forms],
}