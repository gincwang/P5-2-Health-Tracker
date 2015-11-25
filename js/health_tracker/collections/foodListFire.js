(function(){
    'use strict';

    /**
      * @desc Food List Collection (Sync to Firebase)
      * Holds food models for a particular date passed into it
      *
    */

    HealthTracker.Collections.FoodListFire = Backbone.Firebase.Collection.extend({

        initialize: function(array, options){
            this.date = options.date;
        },

        model: HealthTracker.Models.Food,

        url: function(){
            return "https://health-tracker-gcw.firebaseio.com/" + this.date;
        },

        /*
         * @desc gets total calorie from its collection
         * @param none
         * @return number
        */
        getTotalCalorie: function(){
            //total calorie = quantity * calorie
            var list = this.map(function(a){return a.get("nf_calories") * a.get("quantity");});
            if(list.length > 0){
                return (_.reduce(list, function(memo, num){return memo + num;})).toFixed(2);
            }else {
                return 0;
            }
        },

        /*
         * @desc gets total calorie from its collection
         * @param none
         * @return number
        */
        getTotalItems: function(){
            var list = this.map(function(a){ return a.get("quantity"); });
            if(list.length > 0){
                return _.reduce(list, function(memo, num){return memo + num;});
            }else {
                return 0;
            }

        }
    });

})();
