import { expect } from '@playwright/test';
import { test } from './Fixtures/SelectProduct.fixture';



test('Test pause when a product was selected - workflow', async ({ page  }) => {
 
    
   await page.goto('https://www.amazon.com.mx/');
       
});