import { colors } from "./src/Constants/Colors"

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.js'],
  // purge: ['./src/**/*.js', './public/index.html'],
  // darkMode: false,
  theme: {
    colors: {
      primary: "blue",
      secondary: "red",
      "text-base": "white",
      ...colors
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
