import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ICustomWorld } from './custom-world'

Given("I Navigate to the login page",  async function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('https://www.saucedemo.com');
});

Given("I enter username {string}",  async function (this: ICustomWorld,username:string) {
    const page = this.page!
    await page.fill('input#user-name', 'standard_user');
});

Given("I enter password {string}",  async function (this: ICustomWorld, password:string){
    const page = this.page!
    await page.fill('input#password', 'standard_user');
});

When("I click on the login button",  async function (this: ICustomWorld) {
    const page = this.page!
    await page.locator('#login-button').click();
});

Then("I will be navigated to home page", async function (this: ICustomWorld) {
    const page = this.page!
    await expect(page).toHaveTitle("Swag Labs")
});