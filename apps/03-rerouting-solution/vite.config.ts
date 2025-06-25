import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikCity } from '@builder.io/qwik-city/vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/03-rerouting-solution',
  root: 'apps/03-rerouting-solution',
  plugins: [
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/03-rerouting-solution/client',
      },
      ssr: {
        outDir: '../../dist/apps/03-rerouting-solution/server',
      },
      tsconfigFileNames: ['tsconfig.app.json'],
    }),
    tsconfigPaths({ root: '../../' }),
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../../'],
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
  },
});
