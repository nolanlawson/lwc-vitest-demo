import { mergeConfig} from 'vitest/config';
import baseConfig from '../../vitest.shared.js';

export default mergeConfig(
  baseConfig,
  {
    test: {
      alias: {
        'lwc': '@lwc/engine-server'
      }
    }
  }
);
