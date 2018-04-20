var angulario = require('./angularioPageOb.js');

describe('Страница angular.io/docs/', function () {

        var srch;
        it('load testing url', function() {
            browser.get('https://angular.io/docs/');
        });

    it('testing opening home page', function () {
        angulario.getHome().click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
    });

    /*
    it('Testing Header', function () {
        var head = element(by.partialLinkText('Features'));
        head.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/features');
    });
    */

    /*
    it('testing search', function() {
        element(by.input('search')).sendKeys('angular\n');
        expect(srch.isElementPresent(by.id('search'))).toBe(false);
    });
    */

    it('click button left menu', function () {
        var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be clickable.
        browser.wait(EC.elementToBeClickable($('button.hamburger.mat-button')), 5000);
    });

    it('testing left menu', function () {
        angulario.getLeftMenu().click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
    });

    it('testing Footer-first link-About', function () {
        var about = element(by.partialLinkText('About'));
        about.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/about');
        //expect(browser.getCurrentUrl()).toEqual('https://angular.io/about?group=Angular');
    });

    it('testing Footer-last link-Japanese localization', function () {
        var jpn = element(by.partialLinkText('日本語版'));
        jpn.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.jp/');
    });
});