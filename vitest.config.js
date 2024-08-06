import { readFile } from 'node:fs/promises'
import {defineConfig} from 'vitest/config';
import lwcRollupPlugin from 'lwc/rollup-plugin'
import lwcConfig from './lwc.config.json'

const lwcPlugin = lwcRollupPlugin(lwcConfig)

const prefix = '\0virtual:lwc-ssr:'

export default defineConfig({
  plugins: [
    {
      name: 'lwc-ssr',
      buildStart(opts) {
        return lwcPlugin.buildStart.call(this, opts)
      },
      resolveId(id, importer) {
        if (id.endsWith('?ssr')) {
          const realId = id.substring(0, id.length - 4)
          const resolved = lwcPlugin.resolveId.call(this, realId, importer)
          return prefix + resolved
        }
      },
      transform(content, id) {
        if (id.startsWith(prefix)) {
          console.info('transforming', id)
          const realId = id.substring(prefix.length)
          const replacedContent = content.replaceAll('lwc', '@lwc/engine-server')
          return lwcPlugin.transform.call(this, replacedContent, realId)
        }
      },
      async load(id) {
        if (id.startsWith(prefix)) {
          console.info('loading', id)
          const realId = id.substring(prefix.length)
          console.info('realId', realId)
          const res = lwcPlugin.load.call(this, realId)
          if (res) {
            return res
          }
          return readFile(realId, 'utf-8')
        }
      }
    },
    lwcPlugin
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      exclude: [],
    },
  },
});
