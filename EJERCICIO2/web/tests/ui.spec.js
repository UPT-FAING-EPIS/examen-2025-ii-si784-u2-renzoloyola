const { test, expect } = require('@playwright/test');
const path = require('path');

test('Play button updates status', async ({ page, browserName }) => {
  const file = 'file://' + path.resolve(__dirname, '..', 'index.html');
  await page.goto(file);
  await page.click('#play');
  await expect(page.locator('#status')).toHaveText('Playing the song.');
});

test('Pause button updates status', async ({ page }) => {
  const file = 'file://' + path.resolve(__dirname, '..', 'index.html');
  await page.goto(file);
  await page.click('#pause');
  await expect(page.locator('#status')).toHaveText('Pausing the song.');
});
