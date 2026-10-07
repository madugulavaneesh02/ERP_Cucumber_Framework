import { Given,When,Then, Before, After } from "@cucumber/cucumber";
import{chromium,Browser,Page,BrowserContext, expect} from "@playwright/test"
 let browser:Browser
 let context:BrowserContext
 let page:Page
 let SupExp_Num=""
 let CusExp_Num=""
// Before(async()=>{
// browser=await chromium.launch({headless:false})
// context=await browser.newContext()
// page=await context.newPage()
//  })
//the default time is 5 seconds extended to 30 sec buz may the loading issue while launching browser
Before({ timeout: 30000 }, async () => {
    browser = await chromium.launch({ headless: false })
    context = await browser.newContext()
    page = await context.newPage()
})
 Given('user launch url in a browser', async function () {
   await page.goto('http://webapp.qedgetech.com/')
});

Given('user enter username as {string}', async function (user) {
  await page.locator('#username').waitFor()
   await page.locator('#username').first().fill(user)
});

Given('user enter password as {string}', async function (pass) {
  await page.locator('#password').first().fill(pass)
});

Given('user click login button', async function () {
  await page.locator('#btnsubmit').first().click()
});

Then('user should see dashboard page', async function () {
  await page.locator('#ewPageCaption').waitFor()
  await expect(page.locator('#ewPageCaption')).toBeVisible()
});

When('user should navigate to add supplier', async function () {
    await page.locator('#mi_a_suppliers').waitFor()
    await page.locator('#mi_a_suppliers').click()

    const addButton = page.locator('.btn.btn-default.ewAddEdit.ewAdd.btn-sm').first()

    await addButton.waitFor()
    await addButton.click()
});

When('user capture supplier number', async function () {
  await page.locator('#x_Supplier_Number').waitFor()
  SupExp_Num=await page.locator('#x_Supplier_Number').inputValue()
});

When('user fills supplier details {string},{string},{string},{string},{string},{string},{string},{string},{string}', async function 
  (Sname:string,Saddress:string,Scity:string,Scountry:string,Scperson:string,Sphonenum:string,Semail:string,Smnumber:string,Snotes:string) {
   await page.locator('#x_Supplier_Name').fill(Sname)
   await page.locator('#x_Address').fill(Saddress)
   await page.locator('#x_City').fill(Scity)
   await page.locator('#x_Country').fill(Scountry)
   await page.locator('#x_Contact_Person').fill(Scperson)
   await page.locator('#x_Phone_Number').fill(Sphonenum)
   await page.locator('#x__Email').fill(Semail)
   await page.locator('#x_Mobile_Number').fill(Smnumber)
   await page.locator('#x_Notes').fill(Snotes)

});

When('user click Add button', async function () {
  await page.locator('#btnAction').first().click()
});

When('user click confirm ok button', async function () {
  await page.locator('.ajs-button.btn.btn-primary').waitFor()
  await page.locator('.ajs-button.btn.btn-primary').click()
});

When('user click Alert ok button', async function () {
   await page.locator('.ajs-button.btn.btn-primary').waitFor()
   await page.locator('.ajs-button.btn.btn-primary').click()
});

When('user navigate to suppler table', async function () {
 if(!await page.locator('#psearch').isVisible())
  {
    await page.locator('.glyphicon.glyphicon-search.ewIcon').click()
    await page.locator('#psearch').clear()
    await page.locator('#psearch').fill(SupExp_Num)
    await page.locator('#btnsubmit').click()
  } 
});

Then('user should see supplier number', async function () {
 const Act_Num= await page.locator('#tbl_a_supplierslist tbody tr:nth-child(1) td:nth-child(6) div span span').textContent()
 if( Act_Num?.trim()===SupExp_Num.trim())
 {
console.log(`Supplier number Found in the table ${Act_Num} ${SupExp_Num}`)
 }
 else{
  console.log(`Supplier number NotFound in the table ${Act_Num} ${SupExp_Num}`)
 }
});

When('user should navigate to add customer', async function () {
    await page.locator('#mi_a_customers').waitFor()
    await page.locator('#mi_a_customers').click()

    const addButton = page.locator('.btn.btn-default.ewAddEdit.ewAdd.btn-sm').first()

    await addButton.waitFor()
    await addButton.click()
});

When('user capture customer number', async function () {
  await page.locator('#x_Customer_Number').waitFor()
  CusExp_Num=await page.locator('#x_Customer_Number').inputValue()
   
});

When('user fills customer details {string},{string},{string},{string},{string},{string},{string},{string},{string}', async function 
  (Cname:string, Caddress:string, Ccity:string, Ccountry:string, Ccperson:string, Cphonenum:string, Cemail:string, Cmnumber:string,Cnotes:string) {
  await page.locator('#x_Customer_Name').fill(Cname)
   await page.locator('#x_Address').fill(Caddress)
   await page.locator('#x_City').fill(Ccity)
   await page.locator('#x_Country').fill(Ccountry)
   await page.locator('#x_Contact_Person').fill(Ccperson)
   await page.locator('#x_Phone_Number').fill(Cphonenum)
   await page.locator('#x__Email').fill(Cemail)
   await page.locator('#x_Mobile_Number').fill(Cmnumber)
   await page.locator('#x_Notes').fill(Cnotes)
});

When('user navigate to customer table', async function () {
 if(!await page.locator('#psearch').isVisible())
  {
    await page.locator('.glyphicon.glyphicon-search.ewIcon').click()
    await page.locator('#psearch').clear()
    await page.locator('#psearch').fill(CusExp_Num)
    await page.locator('#btnsubmit').click()
  }   
});

Then('user should see customer number', async function () {
const Act_Num= await page.locator('#tbl_a_customerslist tbody tr:nth-child(1) td:nth-child(5) div span span').textContent()
 if(Act_Num?.trim()===CusExp_Num.trim())
 {
console.log(`Customer number Found in the table ${Act_Num} ${CusExp_Num}`)
 }
 else{
  console.log(`Customer number NotFound in the table ${Act_Num} ${CusExp_Num}`)
 }  
});
After(async()=>{
 await browser.close()
})