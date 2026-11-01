import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  base: '/',
  // @ts-expect-error - title is a Vite config option not in the typed export
  title: 'Family Worship Interactive',
});
