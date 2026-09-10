import { test as base, Page } from '@playwright/test';

type MyFixtures = {
    Workflow : Page;
      }

    
  
export const test = base.extend<MyFixtures>({
 Workflow: async ({ page }, use) => {
    
    //await use(page);
  },
});


export * from './SelectProduct.fixture';
