import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import compression from 'vite-plugin-compression';
import Inspect from 'vite-plugin-inspect';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: true,
    }),
    compression({
      algorithm: 'gzip',
    }),
    compression({
      algorithm: 'brotliCompress',
    }),
    Inspect(),
  ],
  base: "/",
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      plugins: [
        visualizer({
          open: false,
          filename: 'dist/stats.html',
        }) as PluginOption,
      ],
    },
  },
});
