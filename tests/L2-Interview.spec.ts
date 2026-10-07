import { test, expect } from '@playwright/test';
import { AmazonLoginPage } from '../pages/Amazonlogin';


test('Practice Locator ', async ({ page }) => {

    await page.goto('https://www.amazon.com.mx/');
    await page.getByRole('searchbox', { name: 'Buscar en Amazon.com.mx' }).fill('xbox');
    await page.getByRole('button', { name: 'Ir', exact: true }).click();
    const product = page.locator('.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small').filter({ hasText: '$300 Xbox Gift Card' }).first();
    await product.locator('.a-link-normal.s-line-clamp-4.s-link-style.a-text-normal').click();
    await expect(page.locator('#productTitle')).toBeVisible();
    await page.pause();
});
    
test ('Practice POM ', async ({ page  }) => {

    const amazonLoginPage = new AmazonLoginPage(page);
    await amazonLoginPage.gotoAmazon('https://www.amazon.com.mx');
    await amazonLoginPage.searchProduct('xbox');
    await (await amazonLoginPage.getProductLocator('$300 Xbox Gift Card')).click();
    await amazonLoginPage.assertProductTitleVisible();
    
});

test ('Alternative flow api + locator', async ({ page , request  }) => {

 const response = await request.get('https://dog.ceo/api/breeds/image/random');
 expect(response.status()).toBe(200);
 const data = await response.json();
 console.log(data);

 await page.goto('https://dog.ceo/dog-api/#google_vignette');
 await page.getByRole('link', { name: 'Fetch!' }).click();
 expect(page.locator('.image')).toBeVisible();
 //page.pause();


const reponse = await page.request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
             userId: 1,
             id: 1,
             title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\n' +
                  'suscipit recusandae consequuntur expedita et cum\n' +
                     'reprehenderit molestiae ut ut quas totam\n' +
                     'nostrum rerum est autem sunt rem eveniet architecto'
        }   

    });
    expect(reponse.status()).toBe(201);
    const data2 = await reponse.json();
    console.log(data2);


});

test ('Dropdown Test', async ({ page  }) => {

    await page.goto('https://practice.expandtesting.com/dropdown');
    await page.locator('.col-md-6').first().getByRole('combobox').selectOption({ index: 2 });
   //await page.selectOption('[id="dropdown"]', {index: 2 })
    await page.getByRole('combobox', { name: 'Elements per Page:' }).selectOption({ index: 1 });
    await page.selectOption('[name="country"]', { index: 5 });
});
