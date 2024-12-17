import { Page,test,Locator,expect } from "@playwright/test";
import { PageInterface, LocateBy } from "./pageInterface";
import { AppConstants } from "../constants/appConstants";

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

  /**
   * Attempts to click on the given locator.
   * @param element The element to click on.
   * @param options Optional. Additional options for the click action.
   */
  async clickOn(element, options?: { stepTitle?: string, thresholdTimout?: number | undefined }) {
    await test.step(`${options?.stepTitle} : Attempting to click on given locator`, async () => {
      try {
        await element.click({ timeout: options?.thresholdTimout });
      } catch (err) {
        console.log(`Error occurred while trying to click on given locator : ${err}`);
      }
    });
  }

  /**
   * Tries to enter the given text in the locator.
   * @param element The element to click on.
   * @param textToFill The text to fill in the locator.
   * @param options Optional. Additional options for the fill action.
   */
  async fillIn(element: Locator | string, textToFill: string, options?: { stepTitle?: string, thresholdTimout?: number | undefined }) {
    await test.step(`Trying to enter given text ${textToFill} in the locator`, async () => {
      await element.fill(textToFill);
    });
  }
}