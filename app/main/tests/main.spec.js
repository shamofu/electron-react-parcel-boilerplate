/* eslint-env jest */

import getApp from './getapp';

let app;

afterEach(() => {
  if (app && app.isRunning()) {
    return app.stop();
  }
});
beforeEach(() => {
  app = getApp();
  return app.start();
});
  
test('application title', () => {
  return app.client.getTitle()
    .then(title => {
      expect(title).toBe('Electron-React-Parcel-Boilerplate');
    });
});