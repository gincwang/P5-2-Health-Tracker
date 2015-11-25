(function(){
    'use strict';

    /**
      * @desc Food List Collection (Not Stored).
      * Holds a list of food results from Nutritionix API.
      *
    */

    HealthTracker.Collections.FoodList = Backbone.Collection.extend({

        model: HealthTracker.Models.Food
        
    });

})();
