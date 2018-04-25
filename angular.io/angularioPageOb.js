function angularioPageOb () {
    return {
        getHome: function () {
            return $('a.nav-link.home[href*="/"]');
        },

        getBlog: function () {
            return $('a.nav-link[href*="https://blog.angular.io/"]');
        },

        Search: function () {
            return $('input[aria-label="search"]');
        },

        LeftButton: function () {
            return $('button.hamburger.mat-button');
        },

        OpenMenu: function () {
            return element(by.tagName('aio-shell'));
        },

        Side: function () {
            return $('mat-sidenav.sidenav.mat-sidenav');
        },

        Quickstart: function () {
            return $$('.vertical-menu-item.level-1');
        },
    }
}

module.exports = new angularioPageOb();