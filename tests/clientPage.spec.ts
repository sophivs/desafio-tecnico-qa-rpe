import { faker } from '@faker-js/faker';
import { test } from '@playwright/test';
import { pageManager } from '../src/pages/pageManager';
import clientRegisterData from '../src/data/clientRegisterData.json';
import clientListData from '../src/data/clientListData.json';

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

test.describe('Test list client', () =>{
    test.beforeEach(async ({ page }) => {
        const page_manager = new pageManager(page);
        await page_manager.navigateTo().listClientPage();
    });

    for (const client of clientListData) {
        test(`client list for ${client.id}`, async ({ page }) => {
            const page_manager = new pageManager(page);
            const clientPage = page_manager.getClientPage();

            if (client.nome) {
                // If the value is random randomize it.
                const nomeValue = client.nome === 'random' ? faker.person.fullName() : client.nome;
                await clientPage.fillNameList(nomeValue);
            }
            if (client.validade) {
                // If the value is random randomize it.
                const dateValue = client.validade === 'random' 
                    ? (() => {
                        const randomDate = faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' });
                        const month = String(randomDate.getMonth() + 1).padStart(2, '0');
                        const year = randomDate.getFullYear();
                        return `${month}/${year}`;
                    })()
                    : client.validade;
                await clientPage.fillValidateList(dateValue);
            }

            await clientPage.clickButton('Pesquisar');
            await clientPage.checkClientElementsInList(client.check)
        });
    }
})
