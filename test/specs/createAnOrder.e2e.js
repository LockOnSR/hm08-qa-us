const page = require('../../page');
const helper = require('../../helper')

 describe('Create an order', () => {
    it('should wait for taxi to arrive', async () => {
        // Call taxi to specified address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })
 }),

describe('Adds tariff type to order', () => {
    it('Should select supportive tariff type', async () => {
        // Selecting supportive mode
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectTariffType();
    })
}),

describe('Adds payment type to order', () => {
    it('Should add credit card payment method', async () => {
        // Payment Input
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addPaymentMethodCard();

        //confirming the card has been selected after input
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
    })
}),

describe('Adds phone number to order', () => {
    it('Should add phone number to the order', async () => {
        // Input phone number
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
}),

describe('Adds instructions to driver', () => {
    it('Should give the driver instructions', async () => {
        //message to the driver to bring kit kats
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectTariffType();
        await page.instructionsForDriver();
        await expect(await $(page.messageToDriver)).toBeExisting();
    })
}),

describe('Adds specified addon to the order', () => {
    it('Should add blanket and handkerchief to the order', async () => {
        //selecting the blanket and handkerchief reqs
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectTariffType();
        await page.blanketAndHandkerchiefAddOn();
        await expect(await $(page.selectBlanketAndHandkerchief)).toBeExisting();
    })
}),

describe('Adds type of ice cream to thhe supportive tarrif order', () => {
    it('Should add two ice cream buckets to the order', async () => {
        //selecting the Ice Cream button
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectTariffType();
        await page.moreIceCreamPlease();
        await expect(await $(page.moreIceCream)).toBeExisting();
    })
}),


describe('Select Order button and waits for driver', () => {
    it('Should Order the ride and wait for the driver to be selected', async () => {
        // Payment Input
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addPaymentMethodCard();

        //confirming the card has been selected after input
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();

        // Input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

        //selecting the Order button to search for a car
        await page.callMyRidePlease();

        //waiting this period of time allows for the driver found modal to appear with an arrival time
        await browser.pause(40000)
    })
 })
*/