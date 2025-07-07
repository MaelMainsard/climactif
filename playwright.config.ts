import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['@skilbourn/playwright-report-summary', { outputFile: 'playwright-summary.txt' }],
    ['html']
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
