
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
        },

        events: {
            "click .remove-button": "removeFood"
        },

        render: function(){

            this.$el.empty();

            if(this.collection instanceof Backbone.Firebase.Collection){
                //render each store item
                this.collection.forEach(this.addFoodStore, this);

                //render summary text
                var calories = 0;
                this.collection.forEach(function(element){
                    calories += element.attributes.nf_calories;
                });
                var items = (this.collection.length > 1) ? "items" : "item";
                $("#total").html("<h3 class='total-price'>Total: " + calories.toString() + " Calories (" + this.collection.length + " " + items + ")</h3>");
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
