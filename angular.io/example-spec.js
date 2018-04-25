var angulario = require('./angularioPageOb.js');

describe('test page angular.io/docs/', function () {

        beforeEach (function (){
            browser.get('https://angular.io/docs/');
        });

        afterEach (function (){
            console.log("After method executed");
        });

/*        it('load correct testing url', function() {
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs/');
            browser.get('https://angular.io/docs/');
        });*/

    //тестирование верхнего меню
    describe('testing header', function () {

        it('testing opening home page', function () {
            angulario.getHome().click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
        });

        it('testing header->blog', function () {
            browser.ignoreSynchronization = true;
            angulario.getBlog().click();
            expect(browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
            browser.ignoreSynchronization = false;
        });

        it('testing search', function () {
            angulario.Search().click().sendKeys("Angular");
        });

    });

    //тестирование левого меню
    describe('testing left menu', function () {

        it('open menu', function () {
            expect(angulario.OpenMenu().getAttribute('class')).toContain('sidenav-open');
        });

        it('testing menu',  function () {
            var EC = protractor.ExpectedConditions;
            angulario.LeftButton().click();
            browser.wait(EC.invisibilityOf(angulario.Side()));
            expect(angulario.OpenMenu().getAttribute('class')).toContain('mode-stable sidenav-closed');
        });

        it('testing left menu->GETTING STARTED', function () {
            angulario.Quickstart().get(0).click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
        });
    });

    //тестирование нижнего меню
    describe('testing footer', function () {

        it('testing Japanese localization', function () {
            var jpn = element(by.partialLinkText('日本語版'));
            jpn.click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.jp/');
        });
    });

});