/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dracula"]'],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula", "light"],
  },
};
