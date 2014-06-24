define([
    'backbone'
], function (Backbone) {
    var SARouter = Backbone.Router.extend({
        routes: {
            'stores': 'stores',
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var sar = new SARouter();
        sar.on('route:stores', function() {
            alert("Stores route");
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