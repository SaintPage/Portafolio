// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Opcional: si quieres personalizar el puerto o el directorio de salida
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
