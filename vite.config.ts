import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    port: 5176,  // Виберіть вільний порт
  },
  plugins: [react()],
  base: '/',
});