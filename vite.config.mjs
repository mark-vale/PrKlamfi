import { fileURLToPath, URL } from 'node:url'

// Plugins
import Vue from '@vitejs/plugin-vue'
// Utilities
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})
