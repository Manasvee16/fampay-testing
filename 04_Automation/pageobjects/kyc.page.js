class KYCPage {

    get aadhaarInput() { return $('input[name="aadhaar"]'); }
    get proceedAadhaarButton() { return $('button=Verify Aadhaar'); }

    get aadhaarOtpInput() { return $('input[type="tel"]'); }
    get submitAadhaarOtpButton() { return $('button=Submit'); }

    get panInput() { return $('input[name="pan"]'); }
    get submitPanButton() { return $('button=Verify PAN'); }
    get panSuccessMessage() { return $('div*=successful'); }

    get verifyViaVideoButton() { return $('button=Verify via video call'); }
    get videoKycHeader() { return $('div*=Welcome to Video KYC'); }
    get startVideoKycButton() { return $('button=Start Journey'); }

    get razorpayHeader() { return $('div*=Razorpay'); }
    get paymentFailMessage() { return $('div*=Payment failed'); }
    get retryPaymentButton() { return $('button=Retry Payment'); }
    get paymentSuccessMessage() { return $('div*=Payment successful'); }
    get continueToVideoKycButton() { return $('button=Continue with video'); }

    async submitAadhaar(aadhaar) {
        await this.aadhaarInput.setValue(aadhaar);
        await this.proceedAadhaarButton.click();
    }

    async submitAadhaarOtp(otp) {
        await this.aadhaarOtpInput.setValue(otp);
        await this.submitAadhaarOtpButton.click();
    }

    async submitPan(pan) {
        await this.panInput.setValue(pan);
        await this.submitPanButton.click();
    }
}

module.exports = new KYCPage();
