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
        "test" : "#d0c8b8"
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
  plugins: [],
}

