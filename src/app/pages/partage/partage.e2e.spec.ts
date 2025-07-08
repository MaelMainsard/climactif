import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Partage Page - Accessibility and Quality Tests', () => {


  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/partage');
    await page.waitForLoadState('networkidle');
  });


  test('should not have accessibility violations', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });


  test('should have proper page structure', async ({ page }) => {
    await expect(page).toHaveTitle(/climactif/i);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });


  test('should have proper heading hierarchy', async ({ page }) => {
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });


  test('should have proper alt text for images', async ({ page }) => {
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt?.trim().length).toBeGreaterThan(0);
    }
  });


  test('should be keyboard navigable', async ({ page }) => {
    const focusableElements = await page.locator('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])').all();
    if (focusableElements.length > 0) {
      await page.keyboard.press('Tab');
      await expect(page.locator(':focus')).toBeVisible();
    }
  });


  test('should have proper color contrast', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    const colorContrastViolations = accessibilityScanResults.violations.filter(
      violation => violation.id === 'color-contrast'
    );
    expect(colorContrastViolations).toEqual([]);
  });



  test('should have proper form labels if forms exist', async ({ page }) => {
    const forms = await page.locator('form').count();

    if (forms > 0) {
      const inputs = await page.locator('input:not([type="hidden"]), select, textarea').all();

      for (const input of inputs) {
        const id = await input.getAttribute('id');
        const ariaLabel = await input.getAttribute('aria-label');
        const ariaLabelledby = await input.getAttribute('aria-labelledby');

        if (id) {
          const label = await page.locator(`label[for="${id}"]`).count();
          expect(label > 0 || ariaLabel || ariaLabelledby).toBeTruthy();
        } else {
          expect(ariaLabel || ariaLabelledby).toBeTruthy();
        }
      }
    }
  });



  test('should have semantic HTML elements', async ({ page }) => {
    const semanticElements = await page.locator('main, nav, header, footer, section, article, aside').count();
    expect(semanticElements).toBeGreaterThan(0);
  });



  test('should have proper viewport meta tag', async ({ page }) => {
    const viewportMeta = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewportMeta).toContain('width=device-width');
  });



  test('should load in reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('http://localhost:4200/partage');
    await page.waitForLoadState('domcontentloaded');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });
});
