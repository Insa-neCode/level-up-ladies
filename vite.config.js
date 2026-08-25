import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: base muss dem Repo-Namen entsprechen (https://<user>.github.io/<repo>/).
// Fuer eine User-Page (<user>.github.io) oder eine eigene Domain: BASE_PATH=/ setzen.
const root = dirname(fileURLToPath(import.meta.url))
const base = process.env.BASE_PATH ?? '/level-up-ladies/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Zwei Landingpages aus einem Projekt:
      //   /         -> Zielgruppe Bildungsbereich (index.html)
      //   /frauen/  -> Zielgruppe alle Frauen (frauen/index.html)
      input: {
        main: resolve(root, 'index.html'),
        frauen: resolve(root, 'frauen/index.html'),
        impressum: resolve(root, 'impressum/index.html'),
      },
    },
  },
  server: {
    // Port kommt vom Harness (PORT), sonst Vite-Standard 5173
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
