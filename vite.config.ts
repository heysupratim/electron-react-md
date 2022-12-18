import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {builtinModules} from 'module'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.IS_DEV !== 'true' ? './' : '/',
  build: {
    outDir: 'app/build',
    rollupOptions:{
      external: [
        ...builtinModules.filter(m => m !== 'process' && m !=='asserts')
      ]
    }
  },
  plugins: [react()],
})
