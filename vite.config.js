/* ShopCam — Configuration Vite : plugin React et écoute réseau pour le développement local. */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.us5.manus.computer'],
  },
})
