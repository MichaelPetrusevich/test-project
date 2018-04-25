function angularioPageOb () {

    return {
        getHome: $('a.nav-link.home[href="/"]'),

        getBlog: $('a.nav-link[href="https://blog.angular.io/"]'),

        Search: $('input[aria-label="search"]'),

        LeftButton: $('button.hamburger.mat-button'),

        OpenMenu: $('aio-shell'),

        Side: $('mat-sidenav.sidenav.mat-sidenav'),

    }
}

module.exports = new angularioPageOb();