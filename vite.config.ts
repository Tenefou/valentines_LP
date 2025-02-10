import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Pas besoin de @tailwindcss/vite ici

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    react(),
  ],
})
