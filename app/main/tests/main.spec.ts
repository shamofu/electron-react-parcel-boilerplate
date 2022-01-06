import { jest } from '@jest/globals';

jest.setTimeout(60000);

test('Spectron is now deprecated', async () => {
  expect(true).toBe(true);
});

/*
test('application title', async () => {
  expect(await app.client.getTitle()).toBe('Electron-React-Parcel-Boilerplate');
});

test('go to Start', async () => {
  const foo = await app.client.$('a#start');
  await foo.click();
  const bar = await app.client.$('h1');
  expect(await bar.getText()).toBe('Electron + React + Parcel');
});
*/
