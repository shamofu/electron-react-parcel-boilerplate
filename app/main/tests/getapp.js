import electron from 'electron';
import { Application } from 'spectron';
import { resolve } from 'app-root-path';

export default () => (
  new Application({
    path: electron,
    args: [resolve('.')],
    startTimeout: 10000,
    waitTimeout: 10000,
    env: {
      ELECTRON_IS_DEV: 0
    }
  })
);