
(function(){
    'use strict';

    //FoodList View
    //---------

    HealthTracker.Views.FoodListView = Backbone.View.extend({

        initialize: function(options){
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

        clickAddFood: function(e){
            //grab the index of the element clicked
            var index = $(e.target).parent().parent().index();
            this.trigger("addFoodToStore", index);
        }

    });

})();
