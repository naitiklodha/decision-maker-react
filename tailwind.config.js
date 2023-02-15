/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      roboto: ["Roboto"],
      Explora:["Explora"]
    },
    colors:{
      dm:{
     "yellow":"#fcde67",
     "neon-blue":"#5bccf6",
     "black":"#030e12"
      }
    }
  },
  },
  plugins: [],
}