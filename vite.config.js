import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: base muss dem Repo-Namen entsprechen (https://<user>.github.io/<repo>/).
// Fuer eine User-Page (<user>.github.io) oder eine eigene Domain: BASE_PATH=/ setzen.
const base = process.env.BASE_PATH ?? '/level-up-ladies/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    // Port kommt vom Harness (PORT), sonst Vite-Standard 5173
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
