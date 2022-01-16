import { jest } from '@jest/globals';

jest.setTimeout(60000);

test('Spectron is now deprecated', async () => {
  expect(true).toBe(true);
});
