class UPIPage {

    get upiPinModal() { return $('div*=Set UPI PIN'); }
    get aadhaarOption() { return $('div*=Aadhaar'); }
    get continueButton() { return $('button=Continue'); }

    get aadhaarInput() { return $('input[name="aadhaar"]'); }
    get dobInput() { return $('input[name="dob"]'); }
    get proceedButton() { return $('button=Proceed'); }

    get otpInput() { return $('input[type="tel"]'); }
    get submitOtpButton() { return $('button=Submit'); }

    get uidaiDecline() { return $('div*=UIDAI DECLINE'); }

    get upiPinSuccess() { return $('div*=UPI PIN set'); }
    get pay1RupeeButton() { return $('button*=Pay ₹1'); }

    async startAadhaarFlow() {
        await this.aadhaarOption.click();
        await this.continueButton.click();
    }

    async enterAadhaarDetails(aadhaar, dob) {
        await this.aadhaarInput.setValue(aadhaar);
        await this.dobInput.setValue(dob);
        await this.proceedButton.click();
    }

    async submitOtp(otp) {
        await this.otpInput.setValue(otp);
        await this.submitOtpButton.click();
    }
}

module.exports = new UPIPage();
