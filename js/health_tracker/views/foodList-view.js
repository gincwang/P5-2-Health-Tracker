(function(){
    'use strict';

    /**
      * @desc FoodList View
      * This view will render all the food items returned by the ajax request
    */

    HealthTracker.Views.FoodListView = Backbone.View.extend({

        initialize: function(){
            this.listenTo(this.collection, "change", this.render);
            this.listenTo(this.collection, "reset", this.render);
        },

        el: "#list",

        events: {
            "click .add-button": "clickAddFood"
        },

        render: function(){
            this.$el.empty();

            //render each list item
            this.collection.forEach(this.addFood, this);

            return this;
        },

        addFood: function(food){
            var foodView = new HealthTracker.Views.FoodView({model: food});
            this.$el.append(foodView.render().el);
        },

        // Forwards the clicked food item index to App-View to get added to Food Store
        clickAddFood: function(e){
            //grab the index of the element clicked
            var index = $(e.target).parent().parent().index();
            this.trigger("addFoodToStore", index);
        }

    });

})();
