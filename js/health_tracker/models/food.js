(function(){
    'use strict';

    /**
      * @desc Food Model.
      * Holds basic nutritional info on any food item.
    */

    HealthTracker.Models.Food = Backbone.Model.extend({

        defaults: {
            "brand_name": "Food Corp",
            "item_name": "Food#1",
            "nf_calories": 50,
            "ng_serving_weight_grams": 300,
            "quantity": 1
        }
    });
})();
