class HomePage {

    get headerLogo() { return $('img[alt="FamX"]'); }
    get getVerifiedButton() { return $('button=Get Verified'); }
    get menuButton() { return $('button[aria-label="Menu"]'); }

    async open() {
        await browser.url('/');
        await browser.pause(500);
    }

    async startKYC() {
        await this.getVerifiedButton.click();
    }
}

module.exports = new HomePage();
