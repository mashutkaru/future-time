import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: must match the repository name on GitHub
  // Example: https://USERNAME.github.io/future-time/
  base: '/future-time/',
})
