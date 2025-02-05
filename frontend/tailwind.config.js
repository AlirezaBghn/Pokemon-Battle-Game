// frontend/tailwind.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        retroBlack: "#000000",
        retroNeonPink: "#FF6EC7",
        retroNeonBlue: "#1B03A3",
        retroNeonGreen: "#39FF14",
        retroNeonPurple: "#B026FF",
      },
      fontFamily: {
        retro: ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
