import { faker } from '@faker-js/faker';
import { test } from '@playwright/test';
import { pageManager } from '../src/pages/pageManager';
import clientRegisterData from '../src/data/clientRegisterData.json';

test.describe('Test include client', () =>{
    test.beforeEach(async ({ page }) => {
        const page_manager = new pageManager(page);
        await page_manager.navigateTo().includeClientPage();
    });

    for (const client of clientRegisterData) {
        test(`client register for ${client.id}`, async ({ page }) => {
            const page_manager = new pageManager(page);
            const clientPage = page_manager.getClientPage();

            if (client.nome) {
                // If the value is random randomize it.
                const nomeValue = client.nome === 'random' ? faker.person.fullName() : client.nome;
                await clientPage.fillName(nomeValue);
            }
            if (client.cpf) {
                // If the value is random randomize it, use only values with 11 digits.
                const cpfValue = client.cpf === 'random' 
                    ? (faker.number.int({ min: 10000000000, max: 99999999999 }) + Math.random()).toFixed(0) 
                    : client.cpf;
                await clientPage.fillCPF(cpfValue);
            }
            if (client.status) {
                // If the value is random randomize it.
                const statusValue = client.status === 'random' ? faker.helpers.arrayElement(['Ativo', 'Inativo']) : client.status;
                await clientPage.fillStatus(statusValue);
            }
            if (client.saldo) {
                // If the value is random randomize it only with positive values.
                const saldoValue = client.saldo === 'random' 
                    ? (faker.number.int({ min: 0 }) + Math.random()).toFixed(2) 
                    : client.saldo;
                await clientPage.fillBalance(saldoValue);
            }

            await clientPage.clickButton(client.botao);
            await clientPage.checkMessage(client.mensagem)
        });
    }

})
