import { test } from '@playwright/test';
import { pageManager } from '../src/pages/pageManager';
import loginData from '../src/data/testLogin.json';

test.beforeEach(async ({ page }) => {
    const page_manager = new pageManager(page);
    await page_manager.navigateTo().homePage();
});

test('Home page elements', async ({ page }) => {
    const page_manager = new pageManager(page);
    await page_manager.getHomePage().checkPageElements();
});

for (const user of loginData) {
    test(`Login test for ${user.title}`, async ({ page }) => {
        const page_manager = new pageManager(page);
        const homePage = page_manager.getHomePage();
        await homePage.logIn(user.username, user.password);
        await homePage.checkLogIn(user.message);
    });
}

test('Home page elements', async ({ page }) => {
    const page_manager = new pageManager(page);
    const homePage = page_manager.getHomePage();
    await homePage.forgotPassword('admin');
});