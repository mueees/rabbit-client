module.exports = (function () {
    var path = require('path');

    // Angular js files loading sequence
    var loadSequence = [
        'module',
        'config',
        'routes',
        'constant',
        'filter',
        'value',
        'run',
        'service',
        'class',
        'directive',
        'controller',
        'resource'
    ];

    return function (prefix) {
        return loadSequence.map(function (type) {
            return path.join(prefix, '**/*.' + type + '.js');
        });
    };
})();