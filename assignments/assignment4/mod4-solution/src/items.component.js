(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/items.component.html',
            bindings: {
                categoryItems: '<'
            }
        });

})();
