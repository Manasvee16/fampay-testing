class FAQPage {

    get faqHeader() { return $('h1=FAQs'); }
    get questionList() { return $$('div.faq-question'); }

    async open() {
        await browser.url('/faqs');
        await this.faqHeader.waitForDisplayed();
    }

    async openQuestion(index) {
        await this.questionList[index].click();
    }
}

module.exports = new FAQPage();
