import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:53856',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/\.netlify\/functions/, ''),
      },
    },
  },
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
});