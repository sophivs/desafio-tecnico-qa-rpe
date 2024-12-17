import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

/**
 * The NavigationPage class hanldes the page flow.
 * It contains methods and fields that are used to navigate throught different pages.
 */
export class NavigationPage extends BasePage{

    
    constructor(page:Page){
        super(page)
    }


}