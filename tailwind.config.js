/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "check-background":
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",

        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
      },
      backgroundImage: {
        "theme-dark":
          "url('./images/bg-desktop-dark.jpg'), linear-gradient(hsl(235, 21%, 11%), hsl(235, 21%, 11%));",
        "theme-light":
          "url('./images/bg-desktop-light.jpg'), linear-gradient(hsl(0, 0%, 98%), hsl(0, 0%, 98%));",
        "theme-light-mobile":
          "url('./images/bg-mobile-light.jpg'), linear-gradient(hsl(0, 0%, 98%), hsl(0, 0%, 98%)",
        "theme-dark-mobile":
          "url('./images/bg-mobile-dark.jpg'), linear-gradient(hsl(235, 21%, 11%), hsl(235, 21%, 11%)",
      },
    },
  },
  plugins: [],
};
