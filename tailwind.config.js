/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPurple: "#6C63FF",
        mainWhite: "#F7F7F7",
        mainBlack: "#252525",
      },
    },
  },
  plugins: [require("daisyui")],
};
