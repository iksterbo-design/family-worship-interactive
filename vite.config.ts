import { defineConfig } from 'vite';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  base: '/',
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Family Worship Interactive',
          DESCRIPTION: 'A daily family worship and learning hub.',
        },
      },
      template: 'index.html',
    }),
  ],
  // @ts-expect-error - title is a Vite config option not in the typed export
  title: 'Family Worship Interactive',
});
