class HomePage {

    get mainCTA() {
        return $("button");
    }

    get headerText() {
        return $("h1");
    }

    open() {
        return browser.url("https://get.fampay.in/");
    }
}

module.exports = new HomePage();
