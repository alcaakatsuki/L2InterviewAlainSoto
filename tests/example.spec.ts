import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Amazon - Buy Laptop', async ({ page }) => {

  await page.goto('https://www.amazon.com.mx/');
  //await page.getByRole('link', { name: 'Todos los departamentos' }).click();
  await page.getByRole('searchbox', { name: 'Buscar en Amazon.com.mx' }).fill('laptop');
  await page.locator('#nav-search-submit-button').click();
  await page.getByRole('link', { name: 'ASUS Chromebook CM14 Escolar y Trabajo/MediaTek Kompanio 540/14' }).click();
  //await page.locator("a[href*='/dp/']").first().click();
  await expect(page.getByRole('heading', { name: 'ASUS Chromebook CM14 Escolar y Trabajo/MediaTek Kompanio 540/14' })).toBeVisible();
 
});

