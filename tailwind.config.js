/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        myPink:'#ffe6e5',
        myMustard:'#b9854b',
        myRed:'#9c3337',
        PinkCard:'#ffbed2',
        
      }
    },
  },
  plugins: [],
}

