/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // Vite ke liye
    "./src/**/*.{js,ts,jsx,tsx}", // React components ke liye
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
