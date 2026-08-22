import { test, expect, Page } from '@playwright/test';



/*
    ACCESSIBILITY TESTS


*/ 
test.describe("Accessibility Tests", () => {


test.describe("All images should have alt text", () => {

    test("Check for images without alt text", async ({ page }) => {
        await page.goto('/index.html');
        const imagesWithoutAlt = await page.$$eval('img:not([alt])', imgs => imgs.length);
        expect(imagesWithoutAlt).toBe(0);
    });







});