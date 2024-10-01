import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'nav',
      filename: 'remoteEntry.js',
      exposes: {
        './Nav': './src/App.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  preview: {
    port: 4175,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  base: '/' 
})