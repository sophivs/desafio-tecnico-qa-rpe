import { Page, expect } from '@playwright/test';
import { ClientPage } from "./clientPage";
import { BasePage } from './basePage';
import { pageManager } from './pageManager';

/**
 * The `TransactionPage` class represents a page object for the client page of a website.
 */
export class TransactionPage extends BasePage {

    /**
     * Constructs a new instance of the `TransactionPage` class.
     * @param page The Playwright `Page` object associated with the Transaction page.
     */
    constructor(page: Page) {
        super(page);
    }

    /**
     * Select the client based in the name.
     * @param name The name to select the client.
     */
    async fillClient(name: string) {
        const inputField = this.page.locator('#cliente');
        await expect(inputField).toBeEditable();
        
        await inputField.selectOption({ label: name });
    }

    /**
     * Fills the transaction value field with the provided values.
     * @param value The transaction value to fill in the balance field.
     */
    async fillValue(value: string) {
        const inputField = this.page.locator('#valorTransacao');
        await expect(inputField).toBeEditable();

        await inputField.click();
        await inputField.press('Control+A');

        await inputField.fill(value);
    }

    /**
     * Click in the specific button.
     * @param label The button label that should be clicked.
     */
    async clickButton(label: string) {
        if (label === 'Cancelar') {
            await this.page.getByText(label).click();
            return;
        }

        await this.page.getByRole('button', { name: label }).click();
    }

    /**
     * Check if the correct message is shown in the specific button.
     * @param message The button label that should be clicked.
     */
    async checkMessage(message: string) {
        await expect(this.page.getByText(message).first()).toBeVisible();
    }

    /**
     * Check if the client to be handled exist, otherwise create the client.
     * @param name The name to select the client.
     * @param value The transaction value to fill in the balance field.
     */
    async checkIfClientExist(name: string, value: string) {
        const inputField = this.page.locator('#cliente');
        const optionExists = await inputField.locator(`option:has-text("${name}")`).count();
        if (optionExists == 0) {
            const client_page = new ClientPage(this.page);
            await client_page.createBasicClient(name, value);
            
            const page_manager = new pageManager(this.page);
            await page_manager.navigateTo().includeTransactionPage();
        }
    }

    /**
     * Create the basic client for all other tests.
     * @param saldoValue The base value to fill in the balance field.
     * @param tipoSaldo The value to add the balance value.
     */
    sumStringAndFloat(saldoValue: string, tipoSaldo: number): string {
        const saldoNumber = parseFloat(saldoValue);
        const result = saldoNumber + tipoSaldo;
    
        return result.toFixed(2);
    }
}