import { defineConfig } from 'vitest/config';
import lwcRollupPlugin from 'lwc/rollup-plugin'
import lwcConfig from './lwc.config.json'

export default defineConfig({
  plugins: [
    lwcRollupPlugin(lwcConfig)
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      exclude: [
      ],
    },
  },
});
