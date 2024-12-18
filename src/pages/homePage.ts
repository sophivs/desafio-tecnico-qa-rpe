import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

/**
 * The `HomePage` class represents a page object for the home page of a website.
 */
export class HomePage extends BasePage {
    /**
     * The locator for the username input field.
     */
    readonly username: Locator;

    /**
     * The locator for the password input field.
     */
    readonly password: Locator;

    /**
     * The locator for the login button.
     */
    readonly loginButton: Locator;

    /**
     * Constructs a new instance of the `HomePage` class.
     * @param page The Playwright `Page` object associated with the home page.
     */
    constructor(page: Page) {
        super(page);
        this.username = this.page.locator('label.input', { has: page.locator('input[name="username"]') });
        this.password = this.page.locator('label.input', { has: page.locator('input[name="password"]') });
        this.loginButton = this.page.getByRole('button', { name: 'Sign in' });
    }

    /**
     * Check if all page elements were loaded correctly
     */
    async checkPageElements() {
        const header = this.page.locator('form#login-form > header');
        const loginLabel = this.page.getByText('Login', { exact: true });
        const PasswordLabel = this.page.getByText('Password', { exact: true });
        const loginTooltip = this.page.getByText('Please enter login username');
        const PasswordTooltip = this.page.getByText('Enter your password');

        await expect(header).toHaveText('Sign In');
        await expect(loginLabel).toBeVisible();
        await expect(PasswordLabel).toBeVisible();
        await expect(loginTooltip).toBeVisible();
        await expect(PasswordTooltip).toBeVisible();
    }

    /**
     * Fills the username and password fields with the provided values and clicks the log-in button.
     * @param username The username to fill in the username field.
     * @param password The password to fill in the password field.
     */
    async logIn(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    /**
     * Check if the login result was right.
     * @param text The username to fill in the username field.
     */
    async checkLogIn(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    /**
     * Start the forgot password flow.
     * @param login The username to fill in the login field.
     */
    async forgotPassword(login: string): Promise<void> {
        await this.page.getByText('Enter your password').click();
        await this.page.getByText('Login', { exact: true }).fill(login);
        await this.page.getByText('Send remeber email').click();
    }
}