import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PrediumDesignUI',
      formats: ['es'],
      fileName: 'predium-design-ui',
    },
    rollupOptions: {
      external: ['vue', 'vue-router', '@headlessui/vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    cssCodeSplit: false,
  },
})
