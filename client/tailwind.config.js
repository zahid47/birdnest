/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts, tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        background: "background ease infinite",
      },
      keyframes: {
        background: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
