import { test, expect, Page } from '@playwright/test';



/*
    ACCESSIBILITY TESTS


*/ 
test.describe("Accessibility Tests", () => {


    
        test("Check for images without alt text", async ({ page }) => {

        await page.goto('/index.html');
        const imagesWithoutAlt = await page.$$eval('img:not([alt])', imgs => imgs.length);
        expect(imagesWithoutAlt).toBe(0);
        });


        test("Check for form elements with labels", async ({ page }) => {
        await page.goto('/register.html');
        const formElementsWithoutLabels = await page.$$eval('input:not([aria-label]):not([id])', inputs => inputs.length);
        expect(formElementsWithoutLabels).toBe(0);
        });


        test("Should have proper heading structure", async ({ page }) => {
        await page.goto('/index.html');
        const headings = await page.$$eval('h1, h2, h3, h4, h5, h6', headings => headings.map(h => h.tagName));
        expect(headings).toEqual(['H1', 'H2', 'H3']); // Example expected structure
        });

        






});