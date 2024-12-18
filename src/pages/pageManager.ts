import { Page } from "@playwright/test";
import {NavigationPage} from './navigationPage';
import { BasePage } from "./basePage";
import { HomePage } from "./homePage";
import { ClientPage } from "./clientPage";
import { TransactionPage } from "./transactionPage";

export class pageManager extends BasePage {

    readonly navigationPage: NavigationPage
    readonly homePage: HomePage
    readonly clientPage: ClientPage
    readonly transactionPage: TransactionPage

    constructor(page:Page){
        super(page)

        this.navigationPage = new NavigationPage(page);
        this.homePage = new HomePage(page);
        this.clientPage = new ClientPage(page);
        this.transactionPage = new TransactionPage(page);
    }

    /**
     * Get navigation page class.
     */
    navigateTo(){
        return this.navigationPage
    }

    /**
     * Get home page class.
     */
    getHomePage(){
        return this.homePage
    }

    /**
     * Get client page class.
     */
    getClientPage(){
        return this.clientPage
    }

    /**
     * Get transaction page class.
     */
    getTransactionPage(){
        return this.transactionPage
    }
}