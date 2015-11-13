
(function(){
    'use strict';

    //Store-FoodList View
    //---------

    HealthTracker.Views.StoreFoodListView = Backbone.View.extend({

        initialize: function(options){
            this.listenTo(this.collection, "change", this.render);
            this.listenTo(this.collection, "add", this.render);
            this.listenTo(this.collection, "remove", this.render);
        },

        el: "#shelve",

        events: {
            "click .remove-button": "removeFood",
        },

        render: function(){
            console.log("render");

            this.$el.empty();

            //render each store item
            this.collection.forEach(this.renderFood, this);

            //render summary text
            //get total calories and items
            var totalItem = this.collection.getTotalItems();
            var calories = this.collection.getTotalCalorie();
            var items = (this.collection.length > 1) ? "items" : "item";
            //append summary text
            $("#total").html("<h2 class='total-price'>Total: " + calories.toString() + " Calories (" + totalItem + " " + items + ")</h2>");

            return this;
        },

        renderFood: function(food){
            var foodView = new HealthTracker.Views.FoodStoreView({model: food});
            this.$el.append(foodView.render().el);
        },

        removeFood: function(e){
            var index = $(e.target).parent().parent().index();
            this.trigger("removeFoodFromStore", index);
        }

    });

})();
