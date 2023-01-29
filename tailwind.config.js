/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.js",
    "./templates/**/*.html.twig",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'pinkish': '#f5a3a9',
        'greenish': '#143626',
        'whiteish': '#f6f4db',
        'blueish': '#b6dee2',
        'goldish': '#f3b353',
        'white': '#ffffff'
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
