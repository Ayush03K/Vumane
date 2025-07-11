/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#191B20',
        onwghite:'#CDCABB',
        wood:"#2e2d32",
        moong:"#171717",
        lightgray:"#262626",
        text:"#ffffff",
        b:"#007BFF"
      },
      fontFamily:{
        highfield:['Highfield','sans-serif'],
        moon:['MoonBerry','sans-serif']
      },
      animation: {
        blink: 'blink-animation 0.65s infinite',
      },
      keyframes: {
        'blink-animation': {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}