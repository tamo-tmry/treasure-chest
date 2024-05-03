import { test, expect } from '@playwright/test';

const appUrl = process.env.BASE_URL!

test('チェックリストが表示されること', async ({ page }) => {
    await page.goto(`${appUrl}/checklist`);
    const checkbox = await page.getByRole('checkbox').all();
    expect(checkbox.length).toBeGreaterThan(0);
});
