
(function(){
    'use strict';

    //Food Collection
    //----------
    HealthTracker.Collections.FoodList = Backbone.Collection.extend({

        model: HealthTracker.Models.Food,

        getTotalCalorie: function(){
            var list = this.map(function(a){return a.get("nf_calories") * a.get("quantity");});
            return _.reduce(list, function(memo, num){return memo + num;});
        },

        getTotalItems: function(){
            var list = this.map(function(a){return a.get("quantity");});
            return _.reduce(list, function(memo, num){return memo + num;});
        }
    });

})();
