
(function(){
    'use strict';

    //Food Collection (using Firebase)
    //----------
    HealthTracker.Collections.FoodListFire = Backbone.Firebase.Collection.extend({

        initialize: function(array, options){
            this.date = options.date;
        },

        model: HealthTracker.Models.Food,

        url: function(date){
            return "https://health-tracker-gcw.firebaseio.com/" + this.date;
        },

        getTotalCalorie: function(){
            var list = this.map(function(a){return a.get("nf_calories") * a.get("quantity");});
            if(list.length > 0){
                return (_.reduce(list, function(memo, num){return memo + num;})).toFixed(2);
            }else {
                return 0;
            }

        },

        getTotalItems: function(){
            var list = this.map(function(a){return a.get("quantity");});
            if(list.length > 0){
                return _.reduce(list, function(memo, num){return memo + num;});
            }else {
                return 0;
            }

        }
    });

})();
