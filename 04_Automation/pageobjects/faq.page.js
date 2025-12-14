class FAQPage {

    get faqHeader() {
        return $("h1");
    }

    open() {
        return browser.url("https://get.fampay.in/faqs");
    }
}

module.exports = new FAQPage();
