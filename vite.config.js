import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
      browser: false
    })
  ],
  build: {
    // Optimizaciones de build para mejor performance
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer';
          }
          if (id.includes('node_modules/react-icons')) {
            return 'vendor-icons';
          }
        }
      }
    },
    reportCompressedSize: false,
    sourcemap: false,
    cssCodeSplit: true,
    // Incrementa límites para mejor caching
    chunkSizeWarningLimit: 500
  },
  // Optimizaciones de servidor dev
  server: {
    middlewareMode: false,
    preTransformRequests: true
  }
})
