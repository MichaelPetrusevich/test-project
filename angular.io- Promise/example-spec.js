var angulario = require('./angularioPageOb.js');

describe('test page angular.io/docs/', function () {

        beforeEach (async function (){
            await browser.get('https://angular.io/docs/');
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

        it('testing opening home page',async function () {
            await angulario.getHome().click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/');
        });

        it('testing header->blog',async function () {
            await browser.ignoreSynchronization = true;
            await angulario.getBlog().click();
            expect(await browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
            await browser.ignoreSynchronization = false;
        });

        it('testing search',async function () {
            await angulario.Search().click().sendKeys("Angular");
        });

    });

    //тестирование левого меню
    describe('testing left menu',async function () {

        it('open menu',async function () {
             expect(await angulario.OpenMenu().getAttribute('class')).toContain('sidenav-open');
        });

        it('testing menu',async function () {
            var EC = protractor.ExpectedConditions;
            await angulario.LeftButton().click();
            await browser.wait(EC.invisibilityOf(angulario.Side()));
            expect(await angulario.OpenMenu().getAttribute('class')).toContain('mode-stable sidenav-closed');
        });

        it('testing left menu->GETTING STARTED',async function () {
            await angulario.Quickstart().get(0).click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
        });
    });

    //тестирование нижнего меню
    describe('testing footer',async function () {

        it('testing Japanese localization',async function () {
            var jpn = element(by.partialLinkText('日本語版'));
            jpn.click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.jp/');
        });
    });

});