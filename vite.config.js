// Import configuration function from Vite
import { defineConfig } from 'vite'
// Import React plugin to enable JSX and Fast Refresh
import react from '@vitejs/plugin-react'

// Official Vite configuration documentation: https://vite.dev/config/
// Define and export Vite configuration
export default defineConfig({
  // Register React plugin for optimal development experience
  plugins: [react()],
})