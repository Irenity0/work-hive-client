/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#030303",
          "secondary": "#2c2c2e",
          "accent": "white",
          "base-100": "white"
        }
      }
    ]
  }
}