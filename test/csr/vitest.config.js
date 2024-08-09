import { mergeConfig} from 'vitest/config';
import baseConfig from '../../vitest.shared.js';

export default mergeConfig(
  baseConfig,
  {
    test: {
      snapshotSerializers: ['@quatico/dom-serializer/bin/serializer']
    }
  }
);
