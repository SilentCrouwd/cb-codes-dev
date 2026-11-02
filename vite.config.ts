import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from /cb-codes-dev/, not from the domain root
  base: '/cb-codes-dev/',
  plugins: [react(), tailwindcss()],
});
