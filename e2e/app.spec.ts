import { test, expect } from '@playwright/test';

test('loads and shows worship tab by default', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('button[data-tab="worship"]');
  await expect(page.locator('button[data-tab="worship"]')).toHaveClass(/tw-bg-violet-50/);
});

test('switches between tabs', async ({ page }) => {
  await page.goto('/');
  const tabs = page.getByRole('button');
  expect(await tabs.count()).toBeGreaterThan(5);

  // Worship tab is active by default
  await expect(page.getByRole('button', { name: 'Worship' })).toHaveClass(/tw-bg-violet-50/);

  // Switch to Games & Learning
  await page.getByRole('button', { name: 'Games & Learning' }).click();
  await expect(page.getByRole('button', { name: 'Games & Learning' })).toHaveClass(/tw-bg-violet-50/);

  // Switch to Habits
  await page.getByRole('button', { name: 'Habits' }).click();
  await expect(page.getByRole('button', { name: 'Habits' })).toHaveClass(/tw-bg-violet-50/);
});

test('shows Scripture Flashcards and Quiz on Games tab', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Games & Learning' }).click();

  await expect(page.getByText('Scripture Flashcards')).toBeVisible();
  await expect(page.getByText('Bible Quiz')).toBeVisible();
  await expect(page.getByText('Bingo')).toBeVisible();
  await expect(page.getByText('Memory Match')).toBeVisible();
});

test('shows Family Habits on Habits tab', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Habits' }).click();

  await expect(page.getByText('Family Habits')).toBeVisible();
  for (const habit of ['Daily Bible Reading', 'Family Devotion']) {
    await expect(page.getByText(habit)).toBeVisible();
  }
});
