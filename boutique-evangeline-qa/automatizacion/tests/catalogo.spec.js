const { test, expect } = require('@playwright/test');

test.describe('Catálogo — La boutique d\'Evangeline', () => {
  
  test('TC-001: Visualización de productos en desktop', async ({ page }) => {
    // 1. Abrir la web
    await page.goto('/');
    
    // 2. Esperar a que el catálogo esté visible
    await page.waitForSelector('img', { timeout: 10000 });
    
    // 3. Contar cuántos productos se muestran
    const productos = await page.locator('img').count();
    
    // 4. Verificar que haya al menos 1 producto
    expect(productos).toBeGreaterThan(0);
    
    // 5. Verificar que el título de la página sea el correcto
    await expect(page).toHaveTitle(/La boutique d'Evangeline/);
  });

});