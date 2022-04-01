import { Locator, Page } from '@playwright/test';

export class Header {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }
}