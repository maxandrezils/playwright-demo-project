import { expect, test } from '@playwright/test'
import { Search } from '../components/search.component'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.takealot.com', { waitUntil: 'domcontentloaded' })
})

test('Navigate to page and click something @visual', async ({ page }) => {
  const search = new Search(page)
  await search.searchField.click()
  expect(await page.screenshot()).toMatchSnapshot('homepage.png', { threshold: 3.15 })
})

test('Perform a search and view results @visual', async ({ page }) => {
  const search = new Search(page)
  await search.searchField.fill('Apple')
  await search.searchField.press('Enter')
  await page.locator('div.medium-order-1').waitFor()
  expect(await page.screenshot()).toMatchSnapshot('search.png', { threshold: 3.15 })
})

test('Open an Item and confirm elements are correct', async ({ page }) => {
  const search = new Search(page)
  await search.searchField.fill('Apple')
  await search.searchField.press('Enter')
  await page.locator('div.medium-order-1').waitFor()

})