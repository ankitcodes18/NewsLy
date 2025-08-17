/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222",   // custom blue
        secondary: "#FF6347", // custom tomato red
        dark: {
          100: "#1a1a1a",     // nested shades
          200: "#0f0f0f",
        }
      },
    },
  },
  plugins: [],
}

