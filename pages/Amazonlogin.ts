import { Page, Locator, expect } from '@playwright/test';

export class AmazonLoginPage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly ProductLocator: Locator;
    readonly productLink: Locator;

    constructor(page: Page) {

        this.page = page;
        this.searchBox = page.getByRole('searchbox', { name: 'Buscar en Amazon.com.mx' });
        this.searchButton = page.getByRole('button', { name: 'Ir', exact: true });
        this.ProductLocator = page.locator('.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small').filter({ hasText: '$300 Xbox Gift Card' });
        this.productLink = this.ProductLocator.locator('.a-link-normal.s-line-clamp-4.s-link-style.a-text-normal');
        
    }

    async gotoAmazon(site: string): Promise<void> {
        await this.page.goto(site);
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async getProductLocator(productName: string): Promise<Locator> {
        const product = this.ProductLocator.filter({ hasText: productName }).first();
        product.locator('.a-link-normal.s-line-clamp-4.s-link-style.a-text-normal').click();
        return product; 
    }

    async assertProductTitleVisible(): Promise<void> {
        await expect(this.page.locator('#productTitle')).toBeVisible();
    }
}
