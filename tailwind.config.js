 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["index.html"],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        dark:'#020617',
        secondary:'#64748b'
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}