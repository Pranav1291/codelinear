/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-logo' : "url('/src/assets/Frame 513.svg')",
      }
    }
  },
  plugins: [],
};
    
