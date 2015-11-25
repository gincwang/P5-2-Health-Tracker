
(function(){
    'use strict';

    /**
      * @desc Store Food List View
      * This view renders a collection of food items in the store
    */

    HealthTracker.Views.StoreFoodListView = Backbone.View.extend({

        initialize: function(options){
            this.listenTo(this.collection, "change", this.render);
            this.listenTo(this.collection, "add", this.render);
            this.listenTo(this.collection, "remove", this.render);
        },

        el: "#shelve",

        events: {
            "click": "unShow",
            "click .remove-button": "removeFood",
        },

        render: function(){
            this.$el.empty();

            //render each store item
            this.collection.forEach(this.renderFood, this);

            //render summary text
            //get total calories and items
            var totalItem = this.collection.getTotalItems();
            var calories = this.collection.getTotalCalorie();
            var items = (totalItem > 1) ? "items" : "item";
            //append summary text
            $("#total").html("<div><h2 class='total-price'>Total: " + calories.toString() + " Calories (" + totalItem + " " + items + ")</h2></div>");

            return this;
        },

        renderFood: function(food){
            var foodView = new HealthTracker.Views.FoodStoreView({model: food});
            this.$el.append(foodView.render().el);
        },

        //Forwards intention to hide food search results when clicked
        unShow: function(){
            this.trigger("unShowList");
        },

        //Forwards index of food item in store to delete by App-View
        removeFood: function(e){
            //grab index of clicked element
            var index = $(e.target).parent().parent().index();
            this.trigger("removeFoodFromStore", index);
        }

    });

})();
