import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from /cb-codes-dev/, not from the domain root
  base: '/cb-codes-dev/',
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      // Multi-page build: each HTML file becomes its own page
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        rechtliches: resolve(import.meta.dirname, 'rechtliches.html'),
      },
    },
  },
});
