/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'merinda' : ["Merienda", 'cursive'],
      },
      colors : {
        rama: '#047592',
      },
      animation: {
        'zoom': 'zoomIn 1s ease-in-out',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'shake': 'shake 0.5s ease-in',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        shake: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutBottom: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
      animation: {
        slideInTop: 'slideInTop 0.5s ease-in-out forwards',
        slideOutBottom: 'slideOutBottom 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
