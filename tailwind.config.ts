import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#1e3a5f",
          900: "#0b1f3a",
          950: "#061326",
        },
        gold: {
          50: "#faf8f2",
          100: "#f4eedf",
          200: "#e8dcbe",
          300: "#d9c497",
          400: "#c8a96d",
          500: "#b58e45",
          600: "#987233",
          700: "#7a572a",
          800: "#624426",
          900: "#523924",
          950: "#2d1d11",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-cairo)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
