const HomePage = require('../pageobjects/home.page');
const FAQPage = require('../pageobjects/faq.page');

describe("FamPay Web – Basic Sanity Suite", () => {

    it("Should load homepage successfully", async () => {
        await HomePage.open();
        await expect(HomePage.mainCTA).toBeExisting();
    });

    it("Should verify header exists on homepage", async () => {
        await expect(HomePage.headerText).toBeExisting();
    });

    it("Should navigate to FAQs and validate content", async () => {
        await FAQPage.open();
        await expect(FAQPage.faqHeader).toBeExisting();
    });

});
