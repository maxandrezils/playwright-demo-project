import { Locator, Page } from '@playwright/test'

export class Search {
  readonly page: Page
  readonly searchField: Locator
  // TODO: add locators

  constructor(page: Page) {
    this.page = page
    this.searchField = page.locator('input[type = "text"]')
  }
}