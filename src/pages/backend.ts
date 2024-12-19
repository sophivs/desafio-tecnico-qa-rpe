import { Page, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { AppConstants } from '../constants/appConstants';
import axios from 'axios';

/**
 * The `Backend` class represents a object for the backend API.
 */
export class Backend extends BasePage {

    /**
     * Constructs a new instance of the `Backend` class.
     * @param page The Playwright `Page` object associated with the Backend.
     */
    constructor(page: Page) {
        super(page);
    }

    /**
     * Create the authorization token.
     */
    async createAuthorizationToken() {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Basic cnBlY2xpZW50OlVreUk4UHRudGlpalczemdhSlQ1YkxOQWNJUGFEdUZS',
            'Content-Type': 'application/x-www-form-urlencoded',
        };
      
        const data = new URLSearchParams();
        data.append('grant_type', AppConstants.grant_type);
        data.append('username', AppConstants.username);
        data.append('password', AppConstants.password);
      
        try {
            const response = await axios.post(`${AppConstants.BACKEND_URL}/oauth2/token`, data, { headers });
            return response.data.access_token;
        } catch (error) {
            return { error: 'Failed to obtain token' };
        }
    }

    /**
     * Get the portador information.
     * @param idPortador The portador ID value to retrieve.
     * @param auth The authorization to use in endpoint.
     */
    async getPortador(idPortador: any, auth: string) {
        try {
            // Generate authorization if necessary.
            const authorization = auth === 'generate' ? await this.createAuthorizationToken() : auth;

            const response = await axios.get(`${AppConstants.BACKEND_URL}/api/v1/portadores/${idPortador}`, {
                headers: { Authorization: `Bearer ${authorization}` },
            });

            return response
        } catch (error: any) {
            return error.response
        }
    }

    /**
     * Post the dependente information.
     * @param idPortador The portador ID value to retrieve.
     * @param auth The authorization to use in endpoint.
     * @param body The body to use in endpoint.
     */
    async postDependente(idPortador: any, auth: string, body: any) {
        try {
            // Generate authorization if necessary.
            const authorization = auth === 'generate' ? await this.createAuthorizationToken() : auth;

            const response = await axios.post(`${AppConstants.BACKEND_URL}/api/v1/portadores/${idPortador}/dependentes`, body, {
                headers: { Authorization: `Bearer ${authorization}` },
            });

            return response
        } catch (error: any) {
            return error.response
        }
    }

    /**
     * Patch the portador information.
     * @param idPortador The portador ID value to retrieve.
     * @param auth The authorization to use in endpoint.
     * @param body The body to use in endpoint.
     */
    async patchPortador(idPortador: any, auth: string, body: any) {
        try {
            // Generate authorization if necessary.
            const authorization = auth === 'generate' ? await this.createAuthorizationToken() : auth;

            const response = await axios.patch(`${AppConstants.BACKEND_URL}/api/v1/portadores/${idPortador}`, body, {
                headers: { Authorization: `Bearer ${authorization}` },
            });

            return response
        } catch (error: any) {
            return error.response
        }
    }

    /**
     * Delete the telefone information.
     * @param idPortador The portador ID value to use in endpoint.
     * @param idTelefone The telefone ID value to use in endpoint.
     * @param auth The authorization to use in endpoint.
     */
    async deleteTelefone(idPortador: any, idTelefone: any, auth: string) {
        try {
            // Generate authorization if necessary.
            const authorization = auth === 'generate' ? await this.createAuthorizationToken() : auth;

            const response = await axios.delete(`${AppConstants.BACKEND_URL}/api/v1/portadores/${idPortador}/telefones/${idTelefone}`, {
                headers: { Authorization: `Bearer ${authorization}` },
            });

            return response
        } catch (error: any) {
            return error.response
        }
    }

    /**
     * Put the senha information.
     * @param idCartao The cartao ID value to use in endpoint.
     * @param SenhaParameters The parameters to update the senha in endpoint.
     * @param auth The authorization to use in endpoint.
     */
    async putSenha(idCartao: any, SenhaParameters: any, auth: string) {
        try {
            // Generate authorization if necessary.
            const authorization = auth === 'generate' ? await this.createAuthorizationToken() : auth;

            const headers = {
                'Accept': 'application/json',
                'Authorization': `Bearer ${authorization}`,
                'Content-Type': 'application/json',
                'accept': '',
                'senha_antiga': SenhaParameters.senha_antiga,
                'senha_nova': SenhaParameters.senha_nova
            };

            const response = await axios.put(`${AppConstants.BACKEND_URL}/api/v1/cartoes/${idCartao}/senha?idProduto=${SenhaParameters.idProduto}`, {}, { headers });
            return response
        } catch (error: any) {
            return error.response
        }
    }

    /**
     * Validate get portador response with expected values.
     * @param response The endpoint response.
     * @param code The endpoint status code response expected.
     * @param data The endpoint data response expected.
     */
    async validateResponse(response: any, code: any, data: any) {
        expect(response.status).toBe(code);
        expect(response.data).toBeDefined();

        if (code === 200 || code === 201) {
            expect(response.data).toStrictEqual(data);
            return
        }

        if (code === 415) {
            return
        }

        if (data.fieldErrors) {
            expect(response.data.message).toStrictEqual(data.message);
            expect(response.data.fieldErrors).toStrictEqual(data.fieldErrors);
            return
        }

        expect(response.data.message).toStrictEqual(data);
    }
}