/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'winterBg': "url('/assets/winterBg.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

