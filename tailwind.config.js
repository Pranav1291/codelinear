/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green' : '#577F3E',
        'custom-bg' : '#D3DAA7',
      },

      
    },
  },
  plugins: [],
}

