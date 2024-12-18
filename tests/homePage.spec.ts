import { test, expect } from '@playwright/test';
import { pageManager } from '../src/pages/pageManager';
import loginData from '../src/data/testLogin.json';

test.beforeEach(async ({ page }) => {
  const page_manager = new pageManager(page)
  await page_manager.navigateTo().homePage()
});

test('Home page elements', async ({ page }) => {
    const page_manager = new pageManager(page)
    await page_manager.getHomePage().checkPageElements()
});

for (const user of loginData) {
    test(`Login test for ${user.title}`, async ({ page }) => {
        const page_manager = new pageManager(page)
        const homePage = page_manager.getHomePage()
        await homePage.logIn(user.username, user.password);
        await homePage.checkLogIn(user.message);
    });
}

// test.describe('Test password reset', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.getByText('Esqueci minha senha').click();
//   });

//   for (const user of resetPasswordData) {
//     test(`Password reset for ${user.title}`, async ({ page }) => {
//       const homePage = new HomePage(page);
//       await homePage.sendEmailReset(user.email);
//     });
//   }
// });