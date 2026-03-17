import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Configure base path for GitHub Pages
  // Change 'portfolio' to your repository name

  build: {
    // Output directory for production build
    outDir: "dist",
    // Generate sourcemaps for debugging
    sourcemap: false,
    // Minimize bundle size
    minify: "terser",
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Development server configuration
  server: {
    port: 5173,
    open: true,
  },
});
