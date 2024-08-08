import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      exclude: [
        '**/*.spec.js',
        '**/vitest.*.js',
      ],
    },
  },
});
