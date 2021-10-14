import { jest } from '@jest/globals';

import { bootApp, terminateApp } from './testApp';

jest.setTimeout(60000);

let app;

test('dummy', () => {
  expect(true).toBe(true);
});

beforeAll(async () => {
  app = await bootApp();
});

afterAll(async () => {
  await terminateApp(app);
});

test('application title', async () => {
  expect(await app.client.getTitle()).toBe('Electron-React-Parcel-Boilerplate');
});

test('go to Start', async () => {
  const foo = await app.client.$('a#start');
  await foo.click();
  const bar = await app.client.$('h1');
  expect(await bar.getText()).toBe('Electron + React + Parcel');
});
