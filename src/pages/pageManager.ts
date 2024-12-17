import { Page, expect } from "@playwright/test";
import {NavigationPage} from './navigationPage';
import { BasePage } from "./basePage";

export class pageManager extends BasePage{

  readonly navigationPage: NavigationPage

  constructor (page: Page){

      super(page)
      this.navigationPage = new NavigationPage(this.page)
    }

  navigateTo(){
      return this.navigationPage
  }

}