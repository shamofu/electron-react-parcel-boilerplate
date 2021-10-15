import { Application } from 'spectron';
import electron from 'electron';
import arp from 'app-root-path';
const { resolve } = arp;

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
