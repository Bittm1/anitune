/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glimmer: 'glimmer 3s infinite linear',
      },
      keyframes: {
        glimmer: {
          '0%': { transform: 'translateX(-100%) rotate(25deg)' },
          '100%': { transform: 'translateX(100%) rotate(25deg)' },
        },
      },
    },
  },
  plugins: [],
}
