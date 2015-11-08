
(function(){
    'use strict';

    //Food Model
    //----------

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
