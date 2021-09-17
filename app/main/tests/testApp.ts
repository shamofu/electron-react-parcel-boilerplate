import { Application } from 'spectron';
import electron from 'electron';
import { resolve } from 'app-root-path';

export async function bootApp() {
  const app = new Application({
    path: electron.toString(),
    args: [resolve('.')],
    env: {
      ELECTRON_IS_DEV: '0',
    },
  });
  await app.start();
  return app;
}

export async function terminateApp(app) {
  await app.stop();
}
