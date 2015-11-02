
var app = app || {};

(function(){
    'use strict';

    //Food View
    //---------

    app.FoodListView = Backbone.View.extend({

        initialize: function(options){
            this.listenTo(this.collection, "add", this.render);
            this.listenTo(this.collection, "reset", this.render);
            this.listenTo(this.collection, "remove", this.render);
            this.listenTo(this.collection, "change", this.render);
        },

        events: {
            "click .remove-button": "removeFood",
        },

        render: function(){

            this.$el.empty();

            //store view and list view share the same View for food
            if(this.collection instanceof Backbone.Firebase.Collection){
                //render each store item
                this.collection.forEach(this.addFoodStore, this);

                //render summary text
                var calories = 0,
                    totalItem = 0;
                //get total calories and items
                this.collection.forEach(function(element){
                    calories += Number(element.attributes.nf_calories * element.attributes.quantity);
                    totalItem += Number(element.attributes.quantity);
                });
                var items = (this.collection.length > 1) ? "items" : "item";
                $("#total").html("<h2 class='total-price'>Total: " + calories.toString() + " Calories (" + totalItem + " " + items + ")</h2>");
            }else {
                //render each list item
                this.collection.forEach(this.addFood, this);
            }

            return this;
        },

        addFood: function(food){
            var foodView = new app.FoodView({model: food});
            this.$el.append(foodView.render().el);
        },

        addFoodStore: function(food){
            var foodView = new app.FoodStoreView({model: food});
            this.$el.append(foodView.render().el);
        },

        removeFood: function(e){
            this.collection.remove(this.collection.at($(e.target).parent().parent().index()));
        }

    });

})();
