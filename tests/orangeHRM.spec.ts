import {expect, test} from '@playwright/test';
test("Validate Orange HRM Login Screen",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByRole('textbox',{name:'username'}).fill('Admin')
    await page.getByRole('textbox',{name:'password'}).fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
    await expect(page).toHaveTitle("OrangeHRM")
})
