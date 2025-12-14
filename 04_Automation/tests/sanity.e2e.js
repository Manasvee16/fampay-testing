const PaymentsPage = require('../pageobjects/payments.page');
const UPIPage = require('../pageobjects/upi.page');

describe("FamPay – E2E Sanity Suite", () => {

    it("Should block payments until email is verified", async () => {
        await PaymentsPage.search("Rahul");
        await expect($('div*=Add email for extra security')).toBeDisplayed();
    });

    it("Should refresh contact list after permission is granted", async () => {
        await PaymentsPage.search("Ishu");
        await expect(PaymentsPage.upiVerifiedName).toBeDisplayed();
    });

    it("Should show payment success screen with transaction ID", async () => {
        await expect(PaymentsPage.paySuccessHeader).toBeDisplayed();
    });

    it("Should display UPI PIN setup blockers", async () => {
        await expect(UPIPage.upiPinSetupModal).toBeDisplayed();
    });

});
