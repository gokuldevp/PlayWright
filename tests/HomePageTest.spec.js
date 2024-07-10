// Import the 'test' and 'expect' functions from the '@playwright/test' module
const { test, expect } = require('@playwright/test');

// Define a test named "Home Page"
test("Home Page", async ({ page }) => {
    // Navigate to the specified URL
    await page.goto("https://www.demoblaze.com/");

    // Get the title of the page
    const pageTitle = await page.title(); 
    console.log("Page Title: " + pageTitle); 

    // Use an assertion to check that the page title is "STORE"
    await expect(page).toHaveTitle("STORE");

    // get the page url of the page
    const PageURL = await page.url();
    console.log("Page URL: " + PageURL);

    // Use an assertion to check that the page  url
    await expect(page).toHaveURL("https://www.demoblaze.com/");

    // Close the page
    await page.close(); // Closes the browser tab or window represented by the 'page' object
});
