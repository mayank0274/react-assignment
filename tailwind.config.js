/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./index.html"],

  theme: {
    extend: {
      animation: {
        "rotate-anim": "rotateYAnim 0.4s linear",
      },
      keyframes: {
        rotateYAnim: {
          "0%": {
            transform: "rotateY(0deg)",
          },

          "100%": {
            transform: "rotateY(90deg)",
          },
        },
      },
    },
  },
  safelist: ["animate-rotate-anim"],
  plugins: [],
};
