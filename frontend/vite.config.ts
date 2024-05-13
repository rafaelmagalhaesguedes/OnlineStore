import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@chakra-ui/react', '@chakra-ui/icons', '@chakra-ui/theme-tools'],
  },
})
