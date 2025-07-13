import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Build configuration for Azure Static Web Apps
  build: {
    // Ensure proper file extensions and chunking
    rollupOptions: {
      output: {
        // Ensure JS files have proper extensions
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          // Split vendor libraries for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion', 'gsap', 'motion'],
          ui: ['lucide-react', 'clsx', 'tailwind-merge', 'class-variance-authority'],
          webgl: ['ogl']
        }
      }
    },
    // Ensure source maps are generated for debugging
    sourcemap: true,
    // Use esbuild for minification (faster and no extra dependency needed)
    minify: 'esbuild',
    target: 'es2020'
  },
  
  // Ensure proper base path for Azure Static Web Apps
  base: '/',
  
  // Development server configuration
  server: {
    host: true,       // Enables access from local network (e.g., 192.168.x.x)
    port: 5173,       // You can change this if needed
  },
  
  // Preview server configuration (for testing production build)
  preview: {
    port: 4173,
    host: true
  }
})