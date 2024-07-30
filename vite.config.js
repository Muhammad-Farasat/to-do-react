import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
        manifest: {
          name: "To-Do App",
          short_name: "ToDo",
          description: "A simple to-do app",
          start_url: ".",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#00EDB5",
          icons: [
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
            {
              src: "/maskable.png",
              sizes: "568x568",
              type: "image/png",
              purpose: "any maskable"
            }
          ]
        }
    })
  ],
  
})
