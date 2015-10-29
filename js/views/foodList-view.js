
var app = app || {};

(function(){
    'use strict';

    //Food View
    //---------

    app.FoodListView = Backbone.View.extend({
        el: "#list",
        events: {
            "click .add-button": "clickAction"
        },

        render: function(){
            this.$el.empty();
            this.collection.forEach(this.addFood, this);
            return this;
        },

        addFood: function(food){
            var foodView = new app.FoodView({model: food});
            this.$el.append(foodView.render().el);
        },

        clickAction: function(e){
            console.log($(e.target).prev());
        }
    });

})();
