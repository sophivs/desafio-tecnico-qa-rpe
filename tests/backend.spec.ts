import { test } from '@playwright/test';
import { Backend } from '../src/pages/backend';
import cartaoPutTests from '../src/data/cartaoPutTests.json';
import dependentePostTests from '../src/data/dependentePostTests.json';
import portadorGetTests from '../src/data/portadorGetTests.json';
import portadorPatchTests from '../src/data/portadorPatchTests.json';
import telefoneDeleteTests from '../src/data/telefoneDeleteTests.json';

test.describe('API Testing for Portadores Endpoint', () => {
    for (const getTest of portadorGetTests) {
        // Response with code 404 should have a message in body like in documentation, but do not has message.
        test(`Test ${getTest.testId} - get portador with code ${getTest.code}`, async ({ page }) => {
            const backend = new Backend(page);
            const response = await backend.getPortador(getTest.idPortador, getTest.Authorization);
            await backend.validateResponse(response, getTest.code, getTest.data);
        });
    }

    for (const postTest of dependentePostTests) {
        // Response with code 500 should have a message in body like in documentation, but do not has message.
        test(`Test ${postTest.testId} - post dependete with code ${postTest.code}`, async ({ page }) => {
            const backend = new Backend(page);
            const response = await backend.postDependente(postTest.idPortador, postTest.Authorization, postTest.body);
            await backend.validateResponse(response, postTest.code, postTest.data);
        });
    }

    // Response with code 404 should have a message in body like in documentation, but do not has message.
    for (const patchTest of portadorPatchTests) {
        test(`Test ${patchTest.testId} - patch portador with code ${patchTest.code}`, async ({ page }) => {
            const backend = new Backend(page);
            const response = await backend.patchPortador(patchTest.idPortador, patchTest.Authorization, patchTest.body);
            await backend.validateResponse(response, patchTest.code, patchTest.data);
        });
    }

    for (const deleteTest of telefoneDeleteTests) {
        test(`Test ${deleteTest.testId} - delete telefone with code ${deleteTest.code}`, async ({ page }) => {
            const backend = new Backend(page);
            const response = await backend.deleteTelefone(deleteTest.idPortador, deleteTest.idTelefone, deleteTest.Authorization);
            await backend.validateResponse(response, deleteTest.code, deleteTest.data);
        });
    }
});

test.describe('API Testing for Cartão Endpoint', () => {
    for (const putTest of cartaoPutTests) {
        // Response with code 400 should have a body like in documentation, but do not has body.
        test(`Test ${putTest.testId} - put senha with code ${putTest.code}`, async ({ page }) => {
            const backend = new Backend(page);
            const response = await backend.putSenha(putTest.idCartao, putTest.parameters, putTest.Authorization);
            await backend.validateResponse(response, putTest.code, putTest.data);
        });
    }
});