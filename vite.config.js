// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Con base "./", todas las URLs en tu index.html serán relativas
  base: "./",

  // Para que Vite copie TODO lo que pongas en public/ directamente a dist/
  publicDir: "public",

  plugins: [react()],

  server: {
    port: 3000,
  },

  build: {
    outDir: "dist",     // build saldrá en dist/
    assetsDir: "assets",// JS/CSS/otros irán en dist/assets/

    rollupOptions: {
      output: {
        // JS de entrada y chunks en dist/assets/
        entryFileNames:   `assets/[name].[hash].js`,
        chunkFileNames:   `assets/[name].[hash].js`,
        // Otros assets (font, svg…) en dist/assets/
        // Pero imágenes JPG/PNG las metemos en dist/images/
        assetFileNames: assetInfo => {
          const ext = assetInfo.name.split(".").pop();
          if (["png", "jpg", "jpeg", "gif", "svg"].includes(ext)) {
            return "images/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        }
      }
    }
  }
});
