import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base set to './' so assets load correctly on github pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
