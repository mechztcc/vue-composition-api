import { defineConfig } from 'vitest/config';
import Components from 'unplugin-vue-components/vite'; // This imports the plugin
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {['el'].includes(tag)},
        },
      },
    }),
    Components({
      //dirs: ['src/modules/**/components', 'other/example'],
    }),
  ],
  test: {
    environment: 'jsdom',
  },
});
