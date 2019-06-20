(function () {

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories.component.html'
            })

            .state('items', {
                url: '/items',
                templateUrl: 'src/items.component.html'
            });
}
})();
