class PaymentsPage {

    get searchBar() { return $('input[type="search"]'); }
    get contactNotFound() { return $('div*=Contact not found'); }
    get upiVerifiedName() { return $('div*=Bank A/C linked on UPI'); }
    get paySuccessHeader() { return $('div*=Paid'); }

    async search(name) {
        await this.searchBar.setValue(name);
    }
}

module.exports = new PaymentsPage();
