import { test, expect , Page } from '@playwright/test';

test('Practice - form ', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByRole('textbox', {name: 'First Name'}).fill('Alain');
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Soto');
    await page.getByRole('textbox', {name: 'name@example.com'}).fill('Alain@soto.com');
    await page.locator('#gender-radio-1').check();
    await page.getByRole('textbox', {name: 'Mobile Number'}).fill('4581000000');
    await page.getByRole('textbox', {name: 'Mobile Number'}).fill('4581000000');

  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('es-ES', { month: 'short' }); // Ej: "Sep"
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

    const dateInput = page.locator('#dateOfBirthInput');
    await dateInput.click();
    await dateInput.press('Control+a'); 
    await dateInput.fill('formattedDate');
    await dateInput.press('Enter');
    
    await page.locator('.subjects-auto-complete__input').fill('asunto ');
    await page.getByRole('checkbox', {name: 'Sports'}).check();
    await page.getByRole('textbox', {name: 'Current Address'}).fill('Esta es una cadena de texto par aun campo  TextBox');
    await page.locator('#react-select-3-input').click();    
    await page.locator('div[class*="-option"]').nth(1).click();
    await page.locator('#react-select-4-input').click();    
    await page.locator('div[class*="-option"]').nth(1).click();
});