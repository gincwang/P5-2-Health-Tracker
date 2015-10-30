
var app = app || {};

(function(){
    'use strict';

    //Food Collection
    //----------
    app.FoodListFire = Backbone.Firebase.Collection.extend({
        model: app.Food,

        url: "https://health-tracker-gcw.firebaseio.com/",

        getCalories: function(){
            var calories = 0;
            console.log(this.map(function(model){return model.nf_calories}));
            return calories.toString();
        }
    });

})();
