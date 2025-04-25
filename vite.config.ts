import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url"; // Importa fileURLToPath da 'url'
import { dirname, resolve } from "path"; // Importa dirname e resolve da 'path'

// Calcola il percorso della cartella corrente
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Alias '@' per 'src'
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/functions" as *;
          @use "@/styles/variables" as *;
        `,
      },
    },
  },
});
