import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { pageManager } from '../src/pages/pageManager';
import transactionRegisterData from '../src/data/transactionRegisterData.json';

test.describe('Test include transaction', () =>{
    test.beforeEach(async ({ page }) => {
        const page_manager = new pageManager(page);
        await page_manager.navigateTo().includeTransactionPage();
    });

    for (const transaction of transactionRegisterData) {
        test(`transaction register for ${transaction.id}`, async ({ page }) => {
            const page_manager = new pageManager(page);
            const transactionPage = page_manager.getTransactionPage();

            if (transaction.nome && transaction.saldo) {
                const nomeValue = transaction.nome === 'random' ? faker.person.fullName() : transaction.nome;
                const saldoValue = transaction.saldo === 'random' 
                    ? (faker.number.int({ min: 0, max: 10000 }) + Math.random()).toFixed(2) 
                    : transaction.saldo;

                // Check if client exists, if not create a new client with the correct balance.
                const balanceValue = transactionPage.sumStringAndFloat(saldoValue, transaction.tipoSaldo)
                await transactionPage.checkIfClientExist(nomeValue, balanceValue);

                await transactionPage.fillClient(nomeValue);
                await transactionPage.fillValue(saldoValue);
            }

            await transactionPage.clickButton(transaction.botao);
            await transactionPage.checkMessage(transaction.mensagem);
        });
    }
})
