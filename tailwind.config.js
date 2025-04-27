/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35", // Bright Orange        Buttons, CTAs (Call to Actions), Highlights
        secondary: "#6CA0DC", // Soft Blue          Button hover background, links, secondary CTAs
        cream: "#FFF8F3", // Light Cream       Body background, card backgrounds
        "secondary-cream": "#FFFCF0", // Light Cream       Body background, card backgrounds
        darkText: "#1C1C1E", // Dark Navy           Headings, titles, bold important text
        subText: "#4A4A4A", // Grey for subtitles   Descriptions, paragraph text, small labels
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
