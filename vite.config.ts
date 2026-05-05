import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [react(), tailwindcss(), Sitemap({ hostname: 'https://architech-nigeria.com' })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})