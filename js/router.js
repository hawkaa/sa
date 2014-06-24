define([
    'backbone',
    'math/series'
], function (Backbone, Series) {
    var SARouter = Backbone.Router.extend({
        routes: {
            'stores': 'stores',
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var sar = new SARouter();
        sar.on('route:stores', function() {
            alert(Series.fibonacci(5));
        });

        sar.on('route:defaultAction', function() {
            alert("Default route");
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});