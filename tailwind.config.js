/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), 
    daisyui,// Add this line
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#3490dc', // Example primary color
          'secondary': '#ffed4a', // Example secondary color
          'accent': '#38b2ac', // Example accent color
          'neutral': '#2d3748', // Example neutral color
          'base-100': '#ffffff', // Background color (white)
          'base-content': '#000000', // Text color (black)
          'info': '#3b82f6', // Example info color
          'success': '#10b981', // Example success color
          'warning': '#f59e0b', // Example warning color
          'error': '#ef4444', // Example error color
        },
      },
    ],
  },
};
