const { test, expect } = require('@playwright/test');

test.describe('Navegación — La boutique d\'Evangeline', () => {

  test('TC-010: Header sticky', async ({ page }) => {
    // 1. Abrir la web
    await page.goto('/');
    
    // 2. Esperar a que la página cargue
    await page.waitForSelector('header', { timeout: 10000 });
    
    // 3. Verificar que el header esté visible antes del scroll
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // 4. Hacer scroll hacia abajo
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);
    
    // 5. Verificar que el header siga visible después del scroll
    await expect(header).toBeVisible();
  });

});