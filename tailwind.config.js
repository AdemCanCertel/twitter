const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    transitionDuration: {
      '2': '0.2s;'
    },
      width: {
        '350': '350px',
        '275': '275px',
        '90': '90%'
      },
      colors: {
        extends: {
          colors: {
            tweetBorder: '#1d9bf0',
            borderColor: '#2F3336',
            profileColor: '#697077',
            bgHover: '#161616',
            textBox: '#1d9bf01a',
            tweetBox: '#00ba7c',
            searchBox: '#202327',
            trendsColor: '#15181C',
            trendsHover: '#1C1F23',
            trendsDescription: '#8899a6'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
