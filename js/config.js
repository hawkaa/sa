require.config({
    deps: ["bootstrap"],

    paths: {
        jquery: "../Scripts/jquery-2.1.1",
        backbone: "../Scripts/backbone",
        underscore: "../Scripts/underscore",
        handlebars: "../Scripts/handlebars.amd"
    },
    shim: {
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: 'Backbone'
        }
    },

    waitSeconds: 10
});