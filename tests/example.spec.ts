import { test, expect } from '@playwright/test';



test('Amazon - Buy Laptop', async ({ page }) => {

  await page.goto('https://www.amazon.com.mx/');
  //await page.getByRole('link', { name: 'Todos los departamentos' }).click();
  await page.getByRole('searchbox', { name: 'Buscar en Amazon.com.mx' }).fill('laptop');
  await page.locator('#nav-search-submit-button').click();
  await page.getByRole('link', { name: 'ASUS Chromebook CM14 Escolar y Trabajo/MediaTek Kompanio 540/14' }).click();
  //await page.locator("a[href*='/dp/']").first().click();
  await expect(page.getByRole('heading', { name: 'ASUS Chromebook CM14 Escolar y Trabajo/MediaTek Kompanio 540/14' })).toBeVisible();
 
});

test('Select Dropdown', async ({ page }) => {

  await page.goto("https://practicesoftwaretesting.com/");

  await page.getByRole('button', { name: 'Select language' }).click();
  await page.locator('.dropdown-menu.dropdown-menu-right li').nth(0).click();
}); 


test('print console names from all items', async ({ page }) => {
   await page.goto("https://practicesoftwaretesting.com/");

   await page.waitForSelector('[class="card-body"]', { state: 'visible' });
   const productos: string[] = await page.locator('.card-title').allInnerTexts();
   productos.forEach((nombre: string, index: number) => {
    console.log(`${index + 1}. ${nombre.trim()}`);
  });
  
}); 


test('print console names from all items 2 ', async ({ page }) => {
   await page.goto("https://academybugs.com/");

   await page.waitForSelector('[class="example-tile-content-wrapper"]', { state: 'visible' });
   const productos: string[] = await page.locator('.example-tile-heading').allInnerTexts();
   productos.forEach((nombre: string, index: number) => {
   console.log(`${index + 1}. ${nombre}`);
  });
  
}); 


test ('Souce Prudct list' , async ({page})=>
{
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button',{ name: 'Login' }).click();
  
  await page.waitForSelector('.inventory_list');
   const nombres: string[] =  await page.locator('.inventory_item_name ').allInnerTexts();

  nombres.forEach( (nombre: string , index : number)  => {

    console.log( index +1 , nombre)
    
    
   });

});



test('filter produc items ', async ({ page }) => {
   await page.goto("https://practicesoftwaretesting.com/");

  await page.selectOption('.form-select', {index : 1 });
 
const maxSlider = page.getByRole('slider', { name: 'ngx-slider-max' });

await maxSlider.focus();
//await page.keyboard.press('Home');

  for (let i = 0; i < 50; i++) {
    await page.keyboard.press('ArrowLeft');
  }


  
}); 


test ('test' , async ({ page })=>{

  
  await page.goto("https://www.amazon.com.mx/");
  await page.getByRole("searchbox", { name:"Buscar en Amazon.com.mx" }).fill("Iphone 18 pro");
  await page.locator('#nav-search-submit-button').click();
  await expect( await page.locator('.rush-component').first()).toBeVisible();
 

  const productos: string[] = await page.locator('.a-truncate-cut').allInnerTexts();
  let contador = 0;
 productos.forEach(element => {
  contador++;
 });

 console.log('Numero de productos:', contador );

} );

