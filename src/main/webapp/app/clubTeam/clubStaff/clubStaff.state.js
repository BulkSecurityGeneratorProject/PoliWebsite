(function() {
    'use strict';

    angular
        .module('poliApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('clubStaff', {
            parent: 'clubTeam',
            url: '/clubStaff',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/clubTeam/clubStaff/clubStaff.html',
                    controller: 'ClubStaffController',
                    controllerAs: 'vm'
                }
            },
             params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }]
            }
        });
    }    
})();
