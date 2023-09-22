module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-second-row #code',
    messageToDriver: '#comment',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    cardSelectionButton: 'div=Add card',
    linkCardButton: 'button=Link',
    closePaymentMethodModalButton: '.payment-picker .close-button',
    supportivePlan: 'div=Supportive',
    selectBlanketAndHandkerchief: '.r-sw',
    moreIceCream: './/div[text()="Ice cream"]/../..//div[text()="+"]',
    callMyCar: '//*[@id="root"]/div/div[3]/div[4]/button/span[1]',
    // Modals
    phoneNumberModal: '.modal',
    // Misc
    cardSignatureString: '.plc',
    cardPaymentMethodIcon: 'img[alt="card"]',
    orderRequirements: '.reqs-header',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    addPaymentMethodCard: async function() {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const cardSelectionButton = await $(this.cardSelectionButton);
        await cardSelectionButton.waitForDisplayed();
        await cardSelectionButton.click();

        const cardNumber = await $(this.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(123443215432);
        const cardCode = await $(this.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(99);
        
        //added line due to bug within adding card form
        const cardSignatureString = await $(this.cardSignatureString);
        await cardSignatureString.waitForDisplayed();
        await cardSignatureString.click();
        
        //resuming test to click on the now clickable link button
        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        //closing the payment method form
        const closePaymentMethodModalButton = await $(this.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click();
    },
    instructionsForDriver: async function() {
        const messageToDriver = await $(this.messageToDriver);
        await messageToDriver.waitForDisplayed();
        await messageToDriver.setValue("Bring Kit Kats");
    },
    selectTariffType: async function() {
        const supportivePlan = await $(this.supportivePlan);
        await supportivePlan.waitForDisplayed();
        await supportivePlan.click();
    },
    blanketAndHandkerchiefAddOn: async function() {
        const orderRequirements = await $(this.orderRequirements);
        await orderRequirements.click();
        await orderRequirements.click();
        const selectBlanketAndHandkerchief = await $(this.selectBlanketAndHandkerchief);
        await selectBlanketAndHandkerchief.click();
    },
    moreIceCreamPlease: async function() {
        const moreIceCream = await $(this.moreIceCream);
        await moreIceCream.waitForDisplayed();
        await moreIceCream.click();
        await moreIceCream.click();
    },
    callMyRidePlease: async function() {
        const callMyCar = await $(this.callMyCar);
        await callMyCar.waitForDisplayed();
        await callMyCar.click();
    }
};