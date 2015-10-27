//Food Model//

var app = app || {};

(function(){
    'use strict';

    //Food Model
    //----------
    app.Food = Backbone.Model.extend({
        defaults: {
            "brand_name": "Food Corp",
            "item_name": "Food#1",
            "calories": 50,
            "ng_serving_weight_grams": 300,
            "images_front_full_url": "www.img.url"
        }
    });

})();
