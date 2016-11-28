/*
 * @Author: taoyage
 * @FileName: router.js 						   
 * @Date:   2016-11-28 17:25:34 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2016-11-28 17:44:59 	   
 */

((angular) => {
    let router = angular.module('router', [
        'router.login'
    ]);

    router.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/login');
    });
})(angular);
