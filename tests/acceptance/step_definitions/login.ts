import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ICustomWorld } from './config/custom-world'

Given("Navego a la pagina de login",  async function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('https://www.saucedemo.com');
});

Given("Ingreso el nombre de usuario {string}",  async function (this: ICustomWorld,username:string) {
    const page = this.page!
    await page.fill('input#user-name', 'standard_user');
});

Given("Ingreso el password {string}",  async function (this: ICustomWorld, password:string){
    const page = this.page!
    await page.fill('input#password', 'standard_user');
});

When("Hago click en el boton de login",  async function (this: ICustomWorld) {
    const page = this.page!
    await page.locator('#login-button').click();
});

Then("Se me hara navegar a la pagina de inicio", async function (this: ICustomWorld) {
    const page = this.page!
    await expect(page).toHaveTitle("Swag Labs")
});