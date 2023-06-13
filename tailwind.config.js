/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}

