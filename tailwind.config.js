module.exports = {
  content: ['./src/**/*.html' /* ... */],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s ease-in infinite',
      }
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"]
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'),],
}
