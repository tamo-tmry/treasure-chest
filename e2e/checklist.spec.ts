import { test, expect } from '@playwright/test';

const appUrl = process.env.NEXT_PUBLIC_BASE_URL!;

test('チェックリストが表示されること', async ({ page }) => {
    await page.goto(`${appUrl}/checklist`);
    const title = await page.locator('h1').innerText();
    console.log(title)
    const checkbox = await page.getByRole('checkbox').all();
    expect(checkbox.length).toBeGreaterThan(0);
});
