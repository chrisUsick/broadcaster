///<reference path="c:\DefinitelyTyped\requirejs\require.d.ts"/>
require.config({
    baseUrl: 'lib',
    paths: {
        'jquery': 'jquery',
        'jquerymobile': 'jquery.mobile-1.4.0.min',
        'peer': 'peer',
        'socket.io-client': '../socket.io/socket.io'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        'socket.io-clients': {
            exports: 'io'
        }
    }
});
