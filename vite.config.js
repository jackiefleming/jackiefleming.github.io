import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root user/org GitHub Pages site (jackiefleming.github.io) is served from '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
