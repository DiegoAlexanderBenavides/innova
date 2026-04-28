// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://DiegoAlexanderBenavides.github.io',
  base: '/innova',

  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});