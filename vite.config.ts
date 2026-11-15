import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // Leave Drei's barrel unbundled: it pulls optional CommonJS modules into
    // one optimized file, which has caused broken exports in this workspace.
    exclude: ["@react-three/drei"],
    include: [
      "three",
      "@react-three/fiber",
      "cookie",
      "stats.js",
      "tunnel-rat",
      "zustand",
      "use-sync-external-store",
      "use-sync-external-store/shim/with-selector",
    ],
  },
})
