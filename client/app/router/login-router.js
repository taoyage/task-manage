/*
 * @Author: taoyage
 * @FileName: login-router.js 						   
 * @Date:   2016-11-28 16:38:04 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2016-11-28 17:45:11 	   
 */

'use strict';

((angular) => {
    let router = angular.module('router.login', []);

    router.config(($stateProvider) => {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: './views/login.html'
            });
    });
})(angular);
