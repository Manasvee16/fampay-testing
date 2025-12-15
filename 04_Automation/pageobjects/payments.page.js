class PaymentsPage {

    // Send Money Module
    get sendMoneyButton() { return $('button=Send Money'); }
    get searchBar() { return $('input[type="search"]'); }
    get contactNotFound() { return $('div*=Contact not found'); }
    get verifiedUPIContact() { return $('div*=Bank A/C linked on UPI'); }

    // Payment screen
    get amountInput() { return $('input[name="amount"]'); }
    get payButton() { return $('button=Pay'); }

    // Payment success
    get paymentSuccessHeader() { return $('div*=Paid'); }
    get transactionId() { return $('div*=Transaction ID'); }

    async searchContact(name) {
        await this.searchBar.setValue(name);
    }

    async enterAmount(amount) {
        await this.amountInput.setValue(amount);
    }

    async makePayment() {
        await this.payButton.click();
    }
}

module.exports = new PaymentsPage();
