
var app = app || {};

(function(){
    'use strict';

    //Food Collection
    //----------
    app.FoodListFire = Backbone.Firebase.Collection.extend({
        model: app.Food,
        url: "https://health-tracker-gcw.firebaseio.com/"
    });

})();
