/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        sans: ['Montserrat', 'sans-serif'],
      },

      screens: {

        "previo-sm": "426px",
        "previo-lg": "965px",
      },

    },
  },
   
  plugins: [

    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-none': {
          'scrollbar-width': 'none',
        },

        '.mask-gradient': {
          maskImage: 'linear-gradient(black 30%, transparent)',
        },
        
      };

      addUtilities(newUtilities);
    },

  ],
}