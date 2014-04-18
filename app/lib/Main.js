///<reference path="c:\DefinitelyTyped\requirejs\require.d.ts"/>
///<reference path='App.ts'/>
/**
* Main entry point for RequireJS
*/
require([
    'App',
    'jquery',
    'jquerymobile',
    'peer',
    'socket.io-client'
], function (App) {
    'use strict';

    //$(document).ready(function () {
    //    var app = new App();
    //    console.log("we're here!", app)
    //    app.run()
    //});
    //var app = new App()
    App.run();
});
