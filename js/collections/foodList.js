
var app = app || {};

(function(){
    'use strict';

    //Food Collection
    //----------
    app.FoodList = Backbone.Collection.extend({
        model: app.Food
    });

})();
