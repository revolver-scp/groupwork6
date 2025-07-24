
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        run:{
          '0%' :{'margin-top':'0px', transform:'scale(1)'},
          '50%' :{'margin-top':'0px',transform:'scale(1.1)'},
          '100%' :{'margin-top':'0px',transform:'scale(1)'}
        }
      },
      animation:{
        simple : 'run 1s ease infinite'
      },
      colors:{
        'red ': '#fff000s1'
      }
    },
      screens: {

      'mi': '510px',
      //@media (min-width:510px)
      'mx': { max:'510px'}
      // @media (max-width:510px)
    }
  },
  plugins: [],
}


