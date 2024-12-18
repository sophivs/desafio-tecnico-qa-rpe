import { Page,test,Locator,expect } from "@playwright/test";

/**
 * The BasePage class is an abstract class that serves as a base for other page classes.
 * It contains methods and fields that are common to all page classes.
 */
export abstract class BasePage {
  
  /**
   * The `Page` object representing the web page.
   */
  readonly page: Page;

  /**
   * Initializes the `page` field with the provided `Page` object.
   * @param page The `Page` object associated with the page.
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Loads the provided URL.
   * @param url The URL to load.
   */
  async goToUrl(url: string) {
    await test.step(`Loading url ${url}`, async () => {
      await this.page.goto(url);
    });
  }
}