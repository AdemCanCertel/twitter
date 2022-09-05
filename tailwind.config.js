const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        primary: {
          button: "#1da1f2",
          button_hover: "rgb(23, 124, 192)",
          twıtter_ıcon: "#1da1f2",
          navi_hover: "#161616",
          profile_color: "#697077",
          search_box: "#202327",
          search_box_color: "#00ba7c",
          trends_fy_color: "#15181C",
          container_border_color: "#2F3336",
          wigdets_background_color: "#15181C",
          trends_d_color: "#8899a6",
          trends_hover: "#1C1F23",
          trends_circle_hover: "#1d9bf0",
          tweetbox_colors_hover: "#162d40",
          gray_colors: "#62696F",
          reply: "#1da1f2",
          reply_hover: "#1d9bf01a",
          retweet: "#17bf63",
          retweet_hover: "#17bf631a",
          like: "rgb(249, 24, 128)",
          like_hover: "rgba(249, 24, 128, 0.2)",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
