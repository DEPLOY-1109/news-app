/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.js",
    "./public/*.{html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
