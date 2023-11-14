/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#222831',
        'secondary':'#393E46',
        'accent':'#FF813B',
        'light':'#EEEEEE',
        'accent-h':'#FF6008',
        'dark':'#020201',
        'shine':'#B2AE66'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

