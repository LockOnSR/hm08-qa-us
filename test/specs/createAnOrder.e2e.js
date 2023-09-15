const page = require('../../page');
const helper = require('../../helper')

 describe('Create an order', () => {
    /* it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    }) */

    it('should wait for taxi to arrive', async () => {
        // Call taxi to specified address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        
        // Selecting supportive mode
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlan.waitForDisplayed();
        await supportivePlan.click();
        
        await browser.pause(2000);

        /*
        // Payment Input
        await page.addPaymentMethodCard();
        //confirming the card has been selected after input
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();

        await browser.pause(2000);

        // Input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
 */
       

    })
})

