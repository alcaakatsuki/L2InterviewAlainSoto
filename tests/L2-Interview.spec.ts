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

