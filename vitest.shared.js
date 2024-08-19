import path from 'node:path'
import {defineConfig} from 'vitest/config';
import lwcRollupPlugin from 'lwc/rollup-plugin'

export default defineConfig({
  plugins: [
    lwcRollupPlugin({
      rootDir: path.resolve(__dirname),
      modules: [
        {
          dir: path.resolve(__dirname, 'src/modules')
        }
      ]
    })
  ],
});
