import { test, expect } from '@playwright/test';

test('チェックリストが表示されること', async ({ page }) => {
    await page.goto(`http://localhost:3000/checklist`);
    const checkbox = await page.getByRole('checkbox').all();
    expect(checkbox.length).toBeGreaterThan(0);
});
