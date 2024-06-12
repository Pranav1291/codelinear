/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scaleX(1) '},
          '25%, 50%': { transform: 'scaleX(1.5) ' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '25%, 100%': { opacity: '1' },
        },
      },
      animation: {
        zoomInOut: 'zoomInOut 3s ease-in-out infinite',
        fadeInOut: 'fadeInOut 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
    
