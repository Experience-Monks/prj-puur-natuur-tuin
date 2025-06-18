import {test} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('https://media.monks.com/');
    await page.getByRole('button', {name: 'Decline'}).click();
});
