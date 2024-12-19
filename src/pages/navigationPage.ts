import { expect, Page } from "@playwright/test";
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

    /**
     * Navigate do home page.
     */
    async homePage(){
        await this.goToUrl(AppConstants.INSTANCE_URL);
    }

    /**
     * Navigate do include client page.
     */
    async includeClientPage(){
        await this.homePage();
        const page_manager = new pageManager(this.page);
        await page_manager.getHomePage().logIn('admin', 'admin');

        await this.page.locator('a[title="QA"]').click();
        await this.page.getByText('Clientes').click();
        await this.page.locator('a[title="Incluir"]').click();
        await expect(this.page.getByText('Incluir Cliente')).toBeVisible();
    }

    /**
     * Navigate do list client page.
     */
    async listClientPage(){
        await this.homePage();
        const page_manager = new pageManager(this.page);
        await page_manager.getHomePage().logIn('admin', 'admin');

        await this.page.locator('a[title="QA"]').click();
        await this.page.getByText('Clientes').click();
        await this.page.locator('a[title="Listar"]').click();
        await expect(this.page.getByText('Listar Clientes')).toBeVisible();
    }

    /**
     * Navigate do include transaction page.
     */
    async includeTransactionPage(){
        await this.homePage();
        const page_manager = new pageManager(this.page);
        await page_manager.getHomePage().logIn('admin', 'admin');

        await this.page.locator('a[title="QA"]').click();
        await this.page.getByText('Transações').click();
        await this.page.getByRole('link', { name: ' Incluir' }).click();
        await expect(this.page.getByText('Incluir Transacao')).toBeVisible();
    }

    /**
     * Navigate do list transaction page.
     */
    async listTransactionPage(){
        await this.homePage();
        const page_manager = new pageManager(this.page);
        await page_manager.getHomePage().logIn('admin', 'admin');

        await this.page.locator('a[title="QA"]').click();
        await this.page.getByText('Transações').click();
        await this.page.locator('a[href="/desafioqa/listarVenda"] span.menu-item-parent').click();
        await expect(this.page.getByRole('heading', { name: ' Listar Transações' })).toBeVisible();
    }
}