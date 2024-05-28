/** @type {import('tailwindcss').Config} */
export default {

  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        light: {
          'primary-color': '#DC3845',
          'title-color': '#282525',
          'text-color': '#5D5656',
          'text-color-light': '#918888',
          'body-color': '#FFFFFF',
          'container-color': '#FFFFFF'
        },

        dark: {
          'primary-color': '#DB4D59',
          'title-color': '#F3F2F2',
          'text-color': '#C2BDBD',
          'text-color-light': '#918888',
          'body-color': '#251819',
          'container-color': '#2F2223'
        }

      },
    },
  },
  plugins: [],
}