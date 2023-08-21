/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "popins":"Poppins"
      },
      height:{
        "100px":"300px",
        "b1":"400px",
        "200px":"250px",
        "100vh":"100vh",
      },
      width:{
        "100px":"300px",
        "b1":"400px",
        "200px":"300px",
        "2nd":"400px"
      }
      
    },
  },
  plugins: [],
}

