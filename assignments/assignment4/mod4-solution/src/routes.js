(function () {

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories.template.html',
                controller : 'CategoriesController as myCategories',
                resolve : {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/Category={categoryShortName}',
                templateUrl: 'src/items.template.html',
                controller : 'ItemsController as myItems',
                resolve : {
                    categoryItems: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                },
                params : {
                    categoryShortName : null
                }
            });
}
})();
