import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

/**
 * The `HomePage` class represents a page object for the home page of a website.
 */
export class ClientPage extends BasePage {

    /**
     * Constructs a new instance of the `ClientPage` class.
     * @param page The Playwright `Page` object associated with the home page.
     */
    constructor(page: Page) {
        super(page);
    }

    /**
     * Fills the name field with the provided values.
     * @param name The name to fill in the name field.
     */
    async fillName(name: string) {
        const inputField = this.page.locator('#nome');
        await expect(inputField).toBeEditable();

        await inputField.fill(name);
    }

    /**
     * Fills the cpf field with the provided values.
     * @param cpf The cpf to fill in the cpf field.
     */
    async fillCPF(cpf: string) {
        const inputField = this.page.locator('#cpf');
        await expect(inputField).toBeEditable();

        await inputField.fill(cpf);
    }

    /**
     * Fills the status field with the provided values.
     * @param status The status to fill in the status field.
     */
    async fillStatus(status: string) {
        const inputField = this.page.locator('#status');
        await expect(inputField).toBeEditable();

        await inputField.selectOption({ label: status });
    }

    /**
     * Fills the balance field with the provided values.
     * @param balance The balance to fill in the balance field.
     */
    async fillBalance(balance: string) {
        const inputField = this.page.locator('#saldoCliente');
        await expect(inputField).toBeEditable();

        await inputField.click();
        await inputField.press('Control+A');

        await inputField.fill(balance);
    }

    /**
     * Click in the specific button.
     * @param label The button label that should be clicked.
     */
    async clickButton(label: string) {
        if (label === 'Cancelar') {
            await this.page.getByText(label).click();
        }
        else {
            await this.page.getByRole('button', { name: label }).click();
        }

        if (label === 'Limpar') {
            await this.checkEmptyInputs();
        }
    }

    /**
     * Check if the correct message is shown in the specific button.
     * @param message The button label that should be clicked.
     */
    async checkMessage(message: string) {
        await expect(this.page.getByText(message).first()).toBeVisible();
    }

    /**
     * Check if all the fields are empty.
     */
    async checkEmptyInputs() {
        const nameField = this.page.locator('#nome');
        const cpfField = this.page.locator('#cpf');
        const statusField = this.page.locator('#status');
        const balanceField = this.page.locator('#saldoCliente');

        expect(await nameField.inputValue().then(value => value.trim())).toBe('');
        expect(await cpfField.inputValue().then(value => value.trim())).toBe('');
        expect(await statusField.inputValue().then(value => value.trim())).toBe('');
        expect(await balanceField.inputValue().then(value => value.trim())).toBe('');
    }
}