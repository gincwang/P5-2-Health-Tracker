(function(){
    'use strict';

    /**
      * @desc Chart View
      * This view will render a bar graph using D3 with the weekly calorie data
    */

    HealthTracker.Views.FoodView = Backbone.View.extend({
        initialize: function(){
            this.listTemplate = $("#food-list-template").html();
        },

        tagName: "li",

        className: "food-view",

        render: function(){
            this.$el.html(Mustache.to_html(this.listTemplate, this.model.toJSON()));
            return this;
        },
    });

})();
