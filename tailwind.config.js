module.exports = {
  content: ['./src/**/*.html' /* ... */],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ["group-hover"]
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'),],
}
