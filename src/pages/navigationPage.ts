import { expect, Locator, Page } from "@playwright/test";
import { AppConstants } from '../constants/appConstants';
import { BasePage } from "./basePage";
import { pageManager } from "./pageManager";

/**
 * The NavigationPage class hanldes the page flow.
 * It contains methods and fields that are used to navigate throught different pages.
 */
export class NavigationPage extends BasePage{
    
    constructor(page:Page){
        super(page)
    }

    async homePage(){
        await this.page.goto(AppConstants.INSTANCE_URL);
    }

    async includeClientPage(){
        await this.homePage();
        const page_manager = new pageManager(this.page);
        await page_manager.getHomePage().logIn('admin', 'admin');

        await this.page.locator('a[title="QA"]').click();
        await this.page.getByText('Clientes').click();
        await this.page.locator('a[title="Incluir"]').click();
    }
}