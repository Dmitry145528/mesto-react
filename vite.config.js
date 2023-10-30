import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: '', // Отключаем папку assets

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `fonts/${assetInfo.name}`;
          } else if (/\.(png|svg|jpg|jpeg|gif)$/i.test(assetInfo.name)) {
            return `images/${assetInfo.name}`;
          }
          return assetInfo.name; // Оставляем остальные файлы в корне
        },
      },
    },
  },
});
