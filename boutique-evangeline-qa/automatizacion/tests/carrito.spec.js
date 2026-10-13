const { test, expect } = require('@playwright/test');

test.describe('Carrito — La boutique d\'Evangeline', () => {

  test('TC-004: Agregar producto al carrito', async ({ page }) => {
    // 1. Abrir la web
    await page.goto('/');
    
    // 2. Esperar a que el catálogo esté visible
    await page.waitForSelector('img', { timeout: 10000 });
    
    // 3. Buscar el primer botón "+" de un producto
    const botonAgregar = page.locator('button:has-text("+")').first();
    await botonAgregar.click();
    
    // 4. Esperar un momento para que se actualice el estado
    await page.waitForTimeout(1000);
    
    // 5. Verificar que el contador del carrito se haya actualizado
    // (buscamos un número en el header, cerca del ícono del carrito)
    const header = page.locator('header');
    await expect(header).toContainText('1');
  });

});