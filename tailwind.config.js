/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    colors:{
      red:{
        50: "#F8E7E7",
        100: "#E9B5B3",
        200: "#DE918E",
        300: "#CF5E5B",
        400: "#C53F3B",
        default: "#B70F0A",
        600: "#A70E09",
        700: "#820B07",
        800: "#650806",
        900: "#4D0604"
      },
      grey:{
        50: "#E9E9E9",
        100: "#BBBBBB",
        200: "#9A9A9A",
        300: "#6C6C6C",
        400: "#4F4F4F",
        default: "#232323",
        600: "#202020",
        700: "#191919",
        800: "#131313",
        900: "0F0F0F"
      },
      bg: {
        default: "#F3F7F8"
      },
      natural:{
        black: "#000000",
        white: "#FFFFFF"
      }
    },
    fontFamily: {
      "clashdisplay-bold": ["ClashDisplay-Bold", "sans-serif"],
      "manrope-bold": ["Manrope-Bold", "sans-serif"],
      "manrope-semibold": ["Manrope-SemiBold", "sans-serif"],
      "manrope-medium": ["Manrope-Medium", "sans-serif"],
      "manrope-regular": ["Manrope-Regular", "sans-serif"],
      "manrope-light": ["Manrope-Light", "sans-serif"],
      "manrope-extralight": ["Manrope-ExtraLight", "sans-serif"],
    }
  },
  plugins: [],
};
