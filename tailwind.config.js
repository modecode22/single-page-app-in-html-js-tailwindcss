/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gri: "#edf2f4",
        grii: "#8d99ae",
        griii: "#2b2d42",
        redy: "#d90429",
        redyy: "#ef233c",
      },
    },
  },
  plugins: [],
};
