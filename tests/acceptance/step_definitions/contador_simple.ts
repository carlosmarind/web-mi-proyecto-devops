import { Given, When, Then } from '@cucumber/cucumber'
import { ICustomWorld } from './config/custom-world';
import { expect } from '@playwright/test';

Given('el usuario visita la pagina home', async function (this: ICustomWorld) {
    const page = this.page!;
    await page?.goto('localhost:3000/home');
})

When('el usuario hace click en el boton +', async function (this: ICustomWorld) {
    const page = this.page!;
    const botonMas = await page.locator('[data-testid="increase"]');
    await expect(botonMas).toBeVisible();
    await botonMas.click();
})

Then('El usuario ve el contador incrementarse', async function (this: ICustomWorld) {
    const page = this.page!;
    const contador = await page.locator('[data-testid="counter-text"]');
    await expect(contador).toHaveText('Count: 1');
});

When('el usuario hace click en el boton -', async function (this: ICustomWorld) {
    const page = this.page!;
    const botonMenos = await page.locator('[data-testid="decrease"]');
    await expect(botonMenos).toBeVisible();
    await botonMenos.click();
})

Then('El usuario ve el contador reducirse', async function (this: ICustomWorld) {
    const page = this.page!;
    const contador = await page.locator('[data-testid="counter-text"]');
    await expect(contador).toHaveText('Count: 0');
});