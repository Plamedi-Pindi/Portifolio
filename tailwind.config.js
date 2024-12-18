/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "60vh" : "60vh",
        "40vh" : "50vh",
        "26rm" : "30rem",
      },

      backgroundColor: {
        "default" : "#f0f0e8",
        "secundary" : "#72BF78",
        "test" : "#d0c8b8"
      },
      
      textColor: {
        "secundary" : "#7AB2D3",
      },
      
      borderColor:{
        "secundary" : "#72BF78",
      },

      width: {
        "container" : "80%",
        "container-mob" : "85%",
        "80p" : "80%"
      },

      rotate: {
        "360" : "360deg"
      }
    },

   
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

