/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "24rem",
        md: "48rem",
        lg: "56rem",
        xl: "64rem",
        ll: "80rem",
        mm: "90rem",
        nn: "102rem",
        op: "160rem",
      },
    },
  },
  plugins: [],
};
