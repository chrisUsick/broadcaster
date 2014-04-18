///<reference path="c:\DefinitelyTyped\requirejs\require.d.ts"/>


require.config({
    baseUrl: 'lib',

    paths: {
        'jquery': 'jquery',
        'jquerymobile': 'jquery.mobile-1.4.0.min',
        'peer': 'peer'
    },

    shim: {
        jquery: {
            exports: '$'
        }
    }
});
