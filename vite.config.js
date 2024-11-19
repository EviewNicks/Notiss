import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/React_Note/", // Sesuaikan dengan nama repository Anda
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
});
