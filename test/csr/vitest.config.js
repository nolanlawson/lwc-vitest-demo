import { mergeConfig} from 'vitest/config';
import baseConfig from '../../vitest.shared.js';

export default mergeConfig(
  baseConfig,
  {
    test: {
      environment: 'jsdom',
      snapshotSerializers: ['@quatico/dom-serializer/bin/serializer']
    }
  }
);
