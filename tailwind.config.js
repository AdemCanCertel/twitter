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
            borderColor: '#2F3336',
            profileColor: '#697077',
            bgHover: '#161616',
            tweetButton: '#1a8cd8',
            textBox: '#1d9bf01a',
            tweetBox: '#00ba7c'
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
