import  { test, expect} from '@playwright/test';


test ('APICall - status ', async ({ page  }) => {

    const reponse = await page.request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(reponse.status()).toBe(200);
    const data = await reponse.json();
    console.log(data);
});

test ('APICall - POST ', async ({ page  }) => {

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
    const data = await reponse.json();
    console.log(data);
});
test ('APICall - DELETE ', async ({ page  }) => {

    const reponse = await page.request.delete('https://jsonplaceholder.typicode.com/posts/1', {
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
    expect(reponse.status()).toBe(200);
    const data = await reponse.json();
    console.log(data);
});
 