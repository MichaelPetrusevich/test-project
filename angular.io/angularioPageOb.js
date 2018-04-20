var angularioPageOb = function() {

    /*this.get = function() {
        browser.get('https://angular.io/docs/');
    };*/

    this.getHome = function () {
        return element(by.css('a.nav-link.home[href="/"]'));
    };

    this.getLeftMenu = function () {
        return element(by.css('aio-nav-menu'));
    };

}

module.exports = new angularioPageOb();