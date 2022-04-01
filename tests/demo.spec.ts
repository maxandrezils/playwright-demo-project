import { expect, test } from '@playwright/test'

test('Navigate to page and click something', async ({ page }) => {
  await page.goto('https://www.takealot.com', { waitUntil: 'domcontentloaded' });
  await page.locator('[placeholder="Search for products\\, brands\\.\\.\\."]').click()
  expect(await page.screenshot()).toMatchSnapshot('homepage.png', { threshold: 3.15 });
});
