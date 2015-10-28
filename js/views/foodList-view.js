
var app = app || {};

(function(){
    'use strict';

    //Food View
    //---------

    app.FoodListView = Backbone.View.extend({
        el: "#list",
        
        render: function(){
            this.$el.empty();
            this.collection.forEach(this.addFood, this);
            return this;
        },
        addFood: function(food){
            var foodView = new app.FoodView({model: food});
            this.$el.append(foodView.render().el);
        },
    });

})();
