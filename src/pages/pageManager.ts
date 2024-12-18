import { Page, expect } from "@playwright/test";
import {NavigationPage} from './navigationPage';
import { BasePage } from "./basePage";
import { HomePage } from "./homePage";
import { ClientPage } from "./clientPage";

export class pageManager extends BasePage {

    readonly navigationPage: NavigationPage
    readonly homePage: HomePage
    readonly clientPage: ClientPage

    constructor(page:Page){
        super(page)

        this.navigationPage = new NavigationPage(page);
        this.homePage = new HomePage(page);
        this.clientPage = new ClientPage(page);
    }

    navigateTo(){
        return this.navigationPage
    }

    getHomePage(){
        return this.homePage
    }

    getClientPage(){
        return this.clientPage
    }
}