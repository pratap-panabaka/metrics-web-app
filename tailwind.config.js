/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 4px 4px 4px rgba(22, 72, 99, 1)',
      },
      colors: {
        toodark: "#121481",
        dark: "#FFB1B1",
        lite: "#FFCBCB",
        toolite: "#FFEAE3"
      }
    },
  },
  plugins: [],
}