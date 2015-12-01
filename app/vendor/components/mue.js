(function () {
    angular.module('mue.template', []);
})();

angular.module('mue.template').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/core/components/date-switcher/date-switcher.directive.html',
    "<button class=\"btn btn-lagoon mue-date-switcher-today\" ng-click=\"today()\" ng-disabled=\"isDisabled()\">Today</button>\n" +
    "\n" +
    "<div class=\"btn-group mue-date-switcher-navigation\">\n" +
    "    <button type=\"button\" class=\"btn btn-lagoon\" ng-click=\"prev()\"><</button>\n" +
    "    <button type=\"button\" class=\"btn btn-lagoon\" ng-click=\"next()\">></button>\n" +
    "</div>\n" +
    "\n" +
    "<mue-date-viewer mue-config=\"dateViewerConfiguration\"></mue-date-viewer>"
  );


  $templateCache.put('src/core/components/date-viewer/date-viewer.directive.html',
    "<div ng-switch=\"mueConfig.type\">\n" +
    "    <span ng-switch-when=\"1\">\n" +
    "        {{mueConfig.start | date:'dd MMMM yyyy'}}\n" +
    "    </span>\n" +
    "    <span ng-switch-when=\"2\">\n" +
    "        {{mueConfig.start | date:'dd MMMM'}} - {{mueConfig.end | date:'dd MMMM'}}, {{mueConfig.end | date:'yyyy'}}\n" +
    "    </span>\n" +
    "</div>"
  );


  $templateCache.put('src/core/components/header/header.directive.html',
    "<div class=\"mue-brand\">{{mueConfig.name}}</div>\n" +
    "<ul class=\"mue-nav mue-header-menu pull-right\">\n" +
    "    <li>\n" +
    "        {{mueConfig.email}}\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"\" ng-click=\"logoutHandler()\">Logout</a>\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('src/core/components/list-group/list-group.directive.html',
    "<div class=\"list-group mue-list-group \" ng-class=\"{'mue-list-group-flat': mueConfig.ui.flat, 'mue-list-group-dark': mueConfig.ui.dark}\">\n" +
    "    <div ng-click=\"mueConfig.clickHandler(item)\" ng-class=\"{active: item.active}\" ng-repeat=\"item in mueConfig.items\" class=\"list-group-item list-group-item-lagoon\">\n" +
    "        <div class=\"pull-left\">\n" +
    "            <i class=\"fa fa-{{item.icon}} mue-icon\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"pull-right\">\n" +
    "            <button ng-click=\"action.handler(item)\" ng-repeat=\"action in item.actions\" class=\"btn btn-clear\">\n" +
    "                <i class=\"fa fa-{{action.icon}} mue-icon\"></i>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"mue-list-group-content\">\n" +
    "            {{item.text}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/core/components/login/login.directive.html',
    "<div class=\"panel mue-panel mue-card mue-card-lagoon\">\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"mue-card-icon\">\n" +
    "            <i class=\"fa fa-calendar mue-icon\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <h4 class=\"mue-card-title\">{{mueConfig.name || 'New Application'}}</h4>\n" +
    "\n" +
    "        <div class=\"mue-card-description\" ng-if=\"mueConfig.description\">\n" +
    "            {{mueConfig.description}}\n" +
    "        </div>\n" +
    "\n" +
    "        <button ng-click=\"login()\" class=\"btn btn-action btn-strawberry btn-block\">{{mueConfig.action || 'Login'}}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/core/components/seed/seed.directive.html',
    "Seed directive"
  );


  $templateCache.put('src/core/components/sidebar/sidebar.directive.html',
    "<div ng-transclude></div>"
  );


  $templateCache.put('src/core/modal/confirm-modal.view.html',
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\">\n" +
    "        <span>X</span></button>\n" +
    "    <h4 class=\"modal-title\">\n" +
    "        Confirm\n" +
    "    </h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    {{text}}\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">{{decline}}</button>\n" +
    "    <button type=\"button\" class=\"btn btn-lagoon btn-action\" ng-click=\"ok()\">{{accept}}</button>\n" +
    "</div>"
  );

}]);

(function(){
    angular.module('mue.core.components.date-switcher', [
        'mue.template',
        'mue.core.components.date-viewer'
    ]);
})();
(function(){
    angular.module('mue.core.components.date-viewer', [
        'mue.template'
    ]);
})();
(function(){
    angular.module('mue.core.components.header', [
        'mue.template',
        'mue.core.security'
    ]);
})();
(function(){
    angular.module('mue.core.components.list-group', [
        'mue.template'
    ]);
})();
(function(){
    angular.module('mue.core.components.login', [
        'mue.template',
        'mue.core.security'
    ]);
})();
(function(){
    angular.module('mue.core.components.seed', [
        'mue.template'
    ]);
})();
(function(){
    angular.module('mue.core.components.sidebar', [
        'mue.template'
    ]);
})();
(function(){
    angular.module('mue.core.error-handler', [
        'mue.template',
        'angular-growl'
    ]);
})();
(function(){
    angular.module('mue.helpers', []);
})();
(function(){
    angular.module('mue.core.modal', [
        'mue.template'
    ]);
})();
(function () {
    'use strict';
    angular.module('mue.core.resources', [
        'restangular'
    ]);
})();
(function () {
    'use strict';
    angular.module('mue.core.security', [
        'ui.router',
        'mue.core.resources'
    ]);
})();
(function () {
    'use strict';
    angular.module('mue.core.error-handler').config(['$provide', function ($provide) {
        // decorate angular $exceptionHandler service to intercept script errors
        $provide.decorator('$exceptionHandler', ['$delegate', '$injector', function ($delegate, $injector) {
            return function (exception, cause) {
                $injector.get('mueScriptErrorHandler').handleScriptError(exception, cause);
                $delegate(exception, cause);
            };
        }]);
    }]);
})();

(function () {
    'use strict';
    angular.module('mue.core.security').config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push(['$rootScope', '$q', 'MUE_AUTH_EVENTS', function ($rootScope, $q, MUE_AUTH_EVENTS) {
            return {
                responseError: function (response) {
                    $rootScope.$broadcast({
                        401: MUE_AUTH_EVENTS.notAuthenticated,
                        403: MUE_AUTH_EVENTS.notAuthorized
                    }[response.status]);

                    return $q.reject(response);
                }
            }
        }]);
    }]);
})();
(function () {
    'use strict';
    angular.module('mue.core.error-handler').constant('MUE_ERROR_MESSAGES', {
        httpDefaultError: 'An unexpected server communication error has occurred. Status: %s.',
        httpNetworkError: 'Network communication error has occurred.',
        scriptError: 'An unexpected script error has occurred.'
    });
})();
(function () {
    'use strict';
    angular.module('mue.core.security').constant('MUE_AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        logoutFailed: 'auth-logout-failed',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });
})();

(function () {
    angular.module('mue.core.error-handler').factory('mueScriptErrorHandler', ['growl', 'MUE_ERROR_MESSAGES', function (growl, MUE_ERROR_MESSAGES) {
        function handleScriptError(exception, cause) {
            var message = MUE_ERROR_MESSAGES.scriptError;

            if (_.isString(exception.message)) {
                message += ' ' + exception.message;
            }

            growl.addErrorMessage(message);
        }

        return {
            handleScriptError: handleScriptError
        };
    }]);
})();
(function () {
    angular.module('mue.helpers').factory('mueHelpers', function () {
        return {
            guid: function () {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }

                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            }
        }
    });
})();
(function(){
    angular.module('mue.core.modal').factory('ConfirmModal', ['$modal', function ($modal) {

        function open(data){
            return $modal.open({
                templateUrl: 'src/core/modal/confirm-modal.view.html',
                controller: 'ConfirmModalController',
                resolve: {
                    data: function () {
                        return data;
                    }
                }
            });
        }

        return {
            open: open
        }
    }]);
})();
(function () {
    'use strict';
    angular.module('mue.core.resources').provider('MueResource', function () {
        var baseUrl = 'http://proxy.mue.in.ua/api';

        return {
            setBaseUrl: function (url) {
                if (url) {
                    baseUrl = url;
                }
            },
            $get: ['Restangular', function (Restangular) {
                return Restangular.withConfig(function (RestangularConfigurer) {
                    RestangularConfigurer.setBaseUrl(baseUrl);
                })
            }]
        };
    });
})();
/**
 * @ngdoc service
 * @name mueAuthentication
 *
 * @description
 * The mueAuthentication service provides the login/logout functionality and
 * ensures that a user gets authenticated before accessing the application.
 *
 * The service must be configured and injected into the application as early as possible,
 * e.g. in the main module config/run block, before any UI route changes occur.
 */
(function () {
    'use strict';
    angular.module('mue.core.security').provider('mueAuthentication', function () {
        var _loginState = null,
            _appState = null;

        /**
         * @ngdoc method
         * @name mueAuthenticationProvider#loginState
         *
         * @description
         * This method is getter / setter.
         *
         * Returns the UI state for the login view when called without any parameters.
         *
         * Sets the UI state for the login view when called with parameters.
         *
         * @param {String} stateName A name of the UI state.
         * @param {Object=} stateParams A map of parameters for the state.
         *
         * @return {Object} The UI state for the login view.
         */
        function loginState(stateName, stateParams) {
            if (arguments.length) {
                _loginState = {
                    name: stateName,
                    params: stateParams
                };
            }

            return _loginState;
        }

        /**
         * @ngdoc method
         * @name mueAuthenticationProvider#appState
         *
         * @description
         * This method is getter / setter.
         *
         * Returns the UI state to transition to after login when called without any parameters.
         *
         * Sets the UI state to transition to after login when called with parameters.
         *
         * @param {String|Object|Function} stateName A name of the UI state, a state descriptor, or a function
         *                                           that returns either a state name of a state descriptor.
         *                                           The state descriptor is an object with a 'name' and an optional
         *                                           'params' properties.
         * @param {Object=} stateParams A map of parameters for the UI state. Ignored if the stateName parameter is not
         *                              a string.
         *
         * @return {Object} The UI state to transition to after login.
         */
        function appState(stateName, stateParams) {
            if (arguments.length) {
                if (_.isString(stateName)) {
                    _appState = {
                        name: stateName,
                        params: stateParams
                    };
                } else if (_.isFunction(stateName)) {
                    _appState = stateName;
                } else if (_.isObject(stateName) && _.isString(stateName.name)) {
                    _appState = stateName;
                }
            }

            return _appState;
        }

        return {
            loginState: loginState,
            appState: appState,
            $get: ['$state', '$rootScope', '$q', 'mueAuthUserResource', 'MueUserResource', 'MueResource', 'mueSession', 'mueToken', 'MUE_AUTH_EVENTS', function ($state, $rootScope, $q, mueAuthUserResource, MueUserResource, MueResource, mueSession, mueToken, MUE_AUTH_EVENTS) {
                if (!_loginState || !_loginState.name || !_appState) {
                    throw new Error('mueAuthentication service has not been configured properly.');
                }

                var afterLoginState = _appState;

                /**
                 * @ngdoc method
                 * @name mueAuthentication#login
                 *
                 * @description
                 * Authenticates the user.
                 */
                function login() {
                    return mueAuthUserResource.login();
                }

                /**
                 * @ngdoc method
                 * @name mueAuthentication#logout
                 *
                 * @description
                 * Signs the user out of the application.
                 *
                 * @returns {Promise} A promise that will be resolved when a user is logged out, or if the logout failed.
                 */
                function logout() {
                    mueToken.destroy();
                    mueSession.destroy();

                    $rootScope.$broadcast(MUE_AUTH_EVENTS.logoutSuccess);
                }

                /**
                 * @ngdoc method
                 * @name rxAuthentication#initSession
                 *
                 * @description
                 * Initializes session by loading details for current user.
                 *
                 * @returns {Promise} Returns a promise which will be resolved when session is initialized
                 */
                function initSession() {
                    var deferred = $q.defer();

                    if (mueSession.isAlive()) {
                        deferred.resolve();
                    } else {
                        MueUserResource.getCurrentUser().then(function (user) {
                            mueSession.create(user);
                            deferred.resolve();
                        });
                    }

                    return deferred.promise;
                }

                function _loginSuccessHandler(scope, data) {
                    mueToken.create(data.client_token);

                    var targetState = afterLoginState;

                    if (_.isFunction(targetState)) {
                        targetState = targetState();
                    }

                    if (_.isString(targetState)) {
                        targetState = {
                            name: targetState
                        };
                    }

                    $state.go(targetState.name, targetState.params);

                    afterLoginState = _appState;
                }

                function _redirectToLoginState() {
                    $state.go(_loginState.name, _loginState.params);
                }

                $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                    if (toState && toState.name !== _loginState.name) {
                        afterLoginState = {
                            name: toState.name,
                            params: toParams
                        };
                    }
                });

                $rootScope.$on(MUE_AUTH_EVENTS.notAuthenticated, function () {
                    mueSession.destroy();
                    _redirectToLoginState();
                });

                $rootScope.$on(MUE_AUTH_EVENTS.loginSuccess, _loginSuccessHandler);

                function _onLogout() {
                    afterLoginState = _appState;
                    _redirectToLoginState();
                }

                $rootScope.$on(MUE_AUTH_EVENTS.logoutSuccess, _onLogout);

                $rootScope.$on(MUE_AUTH_EVENTS.logoutFailed, _onLogout);

                MueResource.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
                    if(mueToken.hasToken()){
                        headers['Authorization'] = 'Bearer ' + mueToken.getToken();
                    }

                    return {
                        element: element,
                        params: params,
                        headers: headers,
                        httpConfig: httpConfig
                    };
                });

                return {
                    login: login,
                    logout: logout,
                    initSession: initSession
                };
            }]
        };
    });
})();
(function () {
    'use strict';
    angular.module('mue.core.security').factory('mueSession', function () {
        var _user = null;

        /**
         * Creates session with provided user data
         *
         * @param {!Object} user
         * @private
         */
        function _create(user) {
            _user = user;
        }

        function _destroy() {
            _user = null;
        }

        function _getUser() {
            return _user;
        }

        function _isAlive() {
            return _user !== null;
        }

        return {
            create: _create,
            destroy: _destroy,
            getUser: _getUser,
            isAlive: _isAlive
        };
    });
})();

(function () {
    'use strict';
    angular.module('mue.core.security').factory('mueToken', function () {
        var itemName = 'mueToken';

        /**
         * Creates token
         *
         * @param {!String} token
         * @private
         */
        function _create(token) {
            localStorage.setItem(itemName, token);
        }

        function _destroy() {
            localStorage.setItem(itemName, null);
        }

        function _getToken() {
            return localStorage.getItem(itemName);
        }

        function _hasToken() {
            return Boolean(localStorage.getItem(itemName));
        }

        return {
            create: _create,
            destroy: _destroy,
            getToken: _getToken,
            hasToken: _hasToken
        };
    });
})();

/**
 * @ngdoc directive
 * @name mue.core.date-switcher.directive:mueDateSwitcher
 * @restrict E
 * @element mue-date-switcher
 *
 * @description
 * Test
 *
 *
 <example module="test">

 <file name="index.html">
 <div ng-controller="Test">
 <mue-date-switcher mue-config="config"></mue-date-switcher>
 </div>
 </file>

 <file name="script.js">
 angular.module('test', ['mue.core.date-switcher']).controller('Test', function($scope){
     $scope.config = {
            type: 2,
            start: new Date(),
            end: moment(new Date()).add(5, 'd').toDate()
        };
 });
 </file>

 </example>
 */

angular.module('mue.core.components.date-switcher')
    .directive('mueDateSwitcher', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/date-switcher/date-switcher.directive.html',
            scope: {
                mueConfig: '='
            },
            link: function (scope, element) {
                scope.today = function () {
                    switch (scope.mueConfig.type) {
                        case 1:
                            scope.mueConfig.start = new Date();
                            break;
                        case 2:
                            var period = _getPeriod();
                            scope.mueConfig.start = new Date();
                            scope.mueConfig.end = moment(new Date()).add(period, 'd').toDate();
                            break;
                    }
                };

                function _getPeriod() {
                    return Math.floor((scope.mueConfig.end - scope.mueConfig.start) / (1000 * 60 * 60 * 24));
                }

                scope.prev = function () {
                    var period = _getPeriod();

                    switch (scope.mueConfig.type) {
                        case 1:
                            scope.mueConfig.start = moment(scope.mueConfig.start).add(-1, 'd').toDate();
                            break;
                        case 2:
                            scope.mueConfig.start = moment(scope.mueConfig.start).add(-period, 'd').toDate();
                            scope.mueConfig.end = moment(scope.mueConfig.end).add(-period, 'd').toDate();
                            break;
                    }
                };

                scope.next = function () {
                    var period = _getPeriod();

                    switch (scope.mueConfig.type) {
                        case 1:
                            scope.mueConfig.start = moment(scope.mueConfig.start).add(1, 'd').toDate();
                            break;
                        case 2:
                            scope.mueConfig.start = moment(scope.mueConfig.start).add(period, 'd').toDate();
                            scope.mueConfig.end = moment(scope.mueConfig.end).add(period, 'd').toDate();
                            break;
                    }
                };

                scope.isDisabled = function () {
                    var isDisabled = true,
                        startMoment = moment(scope.mueConfig.start);

                    switch (scope.mueConfig.type) {
                        case 1:
                            isDisabled = (startMoment.format('DD') == moment(new Date()).format('DD'));
                            break;
                        case 2:
                            isDisabled = (startMoment.format('DD') == moment(new Date()).format('DD'));
                            break;
                    }

                    return isDisabled;
                };

                scope.dateViewerConfiguration = scope.mueConfig;
            }
        }
    });
/**
 * @ngdoc directive
 * @name mue.core.date-viewer.directive:mueDateViewer
 * @restrict E
 * @element mue-date-viewer
 *
 * @description
 * Test
 *
 *
 <example module="test">

 <file name="index.html">
 <div ng-controller="Test">
 <mue-date-viewer mue-config="dateViewerConfiguration"></mue-date-viewer>
 </div>
 </file>

 <file name="script.js">
 angular.module('test', ['mue.core.date-viewer']).controller('Test', function($scope){
 $scope.dateViewerConfiguration = {
            type: 2,
            start: new Date(),
            end: new Date()
        }
 });
 </file>

 </example>
 */

angular.module('mue.core.components.date-viewer')
    .directive('mueDateViewer', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/date-viewer/date-viewer.directive.html',
            scope: {
                mueConfig: '='
            },
            link: function (scope, element) {

            }
        }
    });
/**
 * @ngdoc directive
 * @name mue.core.header.directive:mueHeader
 * @restrict E
 * @element mue-header
 *
 * @description
 * Test
 *
 *
 <example module="test">

 <file name="index.html">
 <div ng-controller="Test">
 <mue-header></mue-header>
 </div>
 </file>

 <file name="script.js">
 angular.module('test', ['mue.core.header']).controller('Test', function($scope){});
 </file>

 </example>
 */

angular.module('mue.core.components.header')
    .directive('mueHeader', ['mueAuthentication', function (mueAuthentication) {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/header/header.directive.html',
            scope: {
                mueConfig: '='
            },
            link: function (scope) {
                scope.logoutHandler = function () {
                    mueAuthentication.logout();
                }
            }
        }
    }]);
/**
 * @ngdoc directive
 * @name mue.core.list-group:mueListGroup
 * @restrict E
 * @element mue-list-group
 *
 * @description
 * Test
 *
 *
 <example module="test">

 <file name="index.html">
 <div ng-controller="Test">
 <mue-list-group mue-config='config'></mue-list-group>
 </div>
 </file>

 <file name="script.js">
 angular.module('test', ['mue.core.list-group']).controller('Test', function($scope){

    function _deleteCalendar(item) {
            _.remove($scope.config.items, function (n) {
                return n.id == item.id;
            });
        }

        function _showMenu(item) {
            alert(item.text + ' showMenu');
        }

        var actions = [
            {
                icon: 'trash',
                handler: _deleteCalendar
            },
            {
                icon: 'gear',
                handler: _showMenu
            }
        ];

    $scope.config = $scope.config = {
            clickHandler: function (item) {
                item.active = !item.active;
            },

            items: [
                {
                    id: '1',
                    active: false,
                    text: 'Birthday',
                    icon: 'desktop',
                    actions: actions
                },
                {
                    id: '2',
                    active: true,
                    text: 'Holiday',
                    icon: 'trash'
                }
            ],
            ui: {
                flat: true,
                dark: true
            }
        };
 });
 </file>

 </example>
 */

angular.module('mue.core.components.list-group')
    .directive('mueListGroup', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/list-group/list-group.directive.html',
            scope: {
                mueConfig: '='
            }
        }
    });
/**
 * @ngdoc directive
 * @name mue.core.login.directive:mueLogin
 * @restrict E
 * @element mue-login
 *
 * @description
 * Test
 *
 *
 */

angular.module('mue.core.components.login')
    .directive('mueLogin', ['mueAuthentication', 'MUE_AUTH_EVENTS', '$rootScope', function (mueAuthentication, MUE_AUTH_EVENTS, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/login/login.directive.html',
            scope: {
                mueConfig: '='
            },
            link: function (scope) {
                scope.login = function () {
                    mueAuthentication.login().then(function (data) {
                        $rootScope.$broadcast(MUE_AUTH_EVENTS.loginSuccess, data);
                    });
                }
            }
        }
    }]);
/**
 * @ngdoc directive
 * @name mue.core.seed.directive:mueSeed
 * @restrict E
 * @element mue-seed
 *
 * @description
 * Test
 *
 *
 <example module="test">

 <file name="index.html">
 <div ng-controller="Test">
 <mue-seed></mue-seed>
 </div>
 </file>

 <file name="script.js">
 angular.module('test', ['mue.core.seed']).controller('Test', function($scope){});
 </file>

 </example>
 */

angular.module('mue.core.components.seed')
    .directive('mueSeed', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/seed/seed.directive.html'
        }
    });
angular.module('mue.core.components.sidebar')
    .directive('mueSidebar', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                mueConfig: '='
            },
            templateUrl: 'src/core/components/sidebar/sidebar.directive.html'
        }
    });
(function(){
    angular.module('mue.core.modal').controller('ConfirmModalController', ['$scope', '$modalInstance', 'data', function ($scope, $modalInstance, data) {
        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

        _.extend($scope, data);
    }]);
})();
(function () {
    'use strict';
    angular.module('mue.core.resources').factory('MueUserResource', ['$q', 'MueResource', function ($q, MueResource) {
        var user = MueResource.one('account/user');

        return {
            getCurrentUser: function () {
                return user.get();
            }
        }
    }]);
})();
(function () {
    'use strict';
    angular.module('mue.core.security').provider('mueAuthUserResource', function () {
        var applicationOauthKey = null,
            timeout = 1000 * 60 * 2,
            origin = 'http://proxy.mue.in.ua',
            provideServer = 'http://proxy.mue.in.ua/provide/',
            provide = null;

        function setOauthKey(oauthKey) {
            applicationOauthKey = oauthKey;
        }

        function config(options) {
            options = options || {};

            if (options.origin) {
                origin = options.origin;
                provideServer = origin + '/provide/';
            }
        }

        return {
            setOauthKey: setOauthKey,

            config: config,

            $get: ['$q', function ($q) {
                function Provide() {
                    this.timeout = 1000 * 60; // on minute
                    this.initialize();
                }

                Provide.prototype = {
                    initialize: function () {
                    },

                    open: function () {
                        var me = this;

                        this.defer = $q.defer();

                        this.window = window.open(provideServer + applicationOauthKey);

                        window.addEventListener("message", function (e) {
                            me.receiveMessage(e);
                        }, false);

                        this.openTimeout = setTimeout(function () {
                            me.reject('Timeout');
                        }, timeout);

                        this.openInterval = setInterval(function () {
                            me.window.postMessage({
                                origin: window.location.origin,
                                host: window.location.host,
                                href: window.location.href
                            }, '*');
                        }, 500);

                        this.windowClosedInterval = setInterval(function () {
                            if (me.window.closed) {
                                me.reject('Window was closed');
                            }
                        }, 1000);

                        return this.defer.promise;
                    },

                    reject: function (errorMessage) {
                        this.clearOpenInterval();
                        this.clearWindowClosedInterval();
                        this.clearOpenTimeout();
                        this.unSubscribeMessage();
                        this.defer.reject({
                            status: 500,
                            message: errorMessage || 'Server error'
                        });
                    },

                    unSubscribeMessage: function () {
                        window.removeEventListener("message", this.receiveMessage, false);
                    },

                    clearWindowClosedInterval: function () {
                        clearInterval(this.windowClosedInterval);
                    },

                    clearOpenInterval: function () {
                        if (this.openInterval) {
                            clearInterval(this.openInterval);
                            this.openInterval = null;
                        }
                    },

                    clearOpenTimeout: function () {
                        if (this.openTimeout) {
                            clearTimeout(this.openTimeout);
                            this.openTimeout = null;
                        }
                    },

                    receiveMessage: function (event) {
                        if (event.origin == origin) {
                            this.clearOpenInterval();
                            this.clearOpenTimeout();
                            this.unSubscribeMessage();

                            var data = JSON.parse(event.data);

                            if (data.status == 200) {
                                this.defer.resolve(data);
                            } else {
                                this.defer.reject(data);
                            }
                        }
                    }
                };

                function login() {
                    provide = new Provide();
                    return provide.open();
                }

                if (!applicationOauthKey) {
                    throw new Error('mueAuthUserResource service has not been configured properly.');
                }

                return {
                    login: login
                };
            }]
        };
    });
})();
