// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://qwer.nl',
  // The dev toolbar's built-in performance audit does its own background
  // `fetch` of page images to inspect them, which throws in some headless
  // testing setups. It's a dev-only debugging overlay (never shipped in
  // the production build), so it's disabled here to keep `npm run dev`'s
  // console clean.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
