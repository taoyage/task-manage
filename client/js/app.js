'use strict';

/*
 * @Author: taoyage
 * @FileName: app.js 						   
 * @Date:   2016-11-28 16:32:53 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2016-11-28 17:45:45 	   
 */

(function (angular) {
    'use strict';

    var app = angular.module('app', ['ui.router', 'router']);
})(angular);
/*
 * @Author: taoyage
 * @FileName: login-router.js 						   
 * @Date:   2016-11-28 16:38:04 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2016-11-28 17:45:11 	   
 */

'use strict';

(function (angular) {
    var router = angular.module('router.login', []);

    router.config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: './views/login.html'
        });
    });
})(angular);
'use strict';

/*
 * @Author: taoyage
 * @FileName: router.js 						   
 * @Date:   2016-11-28 17:25:34 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2016-11-28 17:44:59 	   
 */

(function (angular) {
    var router = angular.module('router', ['router.login']);

    router.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    });
})(angular);