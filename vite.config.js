import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
        manifest: {
          name: 'To-Do App',
          short_name: 'ToDo',
          description: 'A simple to-do app',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#3f51b5',
          icons: [
            {
              src: '/Icons/icon.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/Icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        }
    })
  ],
  
})
