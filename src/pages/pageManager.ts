import { Page, expect } from "@playwright/test";
import {NavigationPage} from './navigationPage';
import { BasePage } from "./basePage";
import { HomePage } from "./homePage";

export class pageManager extends BasePage {

    readonly navigationPage: NavigationPage
    readonly homePage: HomePage

    constructor(page:Page){
        super(page)

        this.navigationPage = new NavigationPage(page);
        this.homePage = new HomePage(page);
    }

    navigateTo(){
        return this.navigationPage
    }

    getHomePage(){
        return this.homePage
    }

}