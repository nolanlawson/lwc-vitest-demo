import { mergeConfig} from 'vitest/config';
import baseConfig from '../../vitest.shared.js';

export default mergeConfig(
  baseConfig,
  {
    test: {
      snapshotSerializers: ['jest-serializer-html'],
      alias: {
        'lwc': '@lwc/engine-server'
      }
    }
  }
);
