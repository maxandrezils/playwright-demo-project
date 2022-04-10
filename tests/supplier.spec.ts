import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  page.goto('https://seller.fees-calculator.env/')
})

test.only('', async ({ page }) => {
  await page.locator('body').click()
})
