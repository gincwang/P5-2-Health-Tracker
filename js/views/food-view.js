
var app = app || {};

(function(){
    'use strict';

    //Food View
    //---------

    app.FoodView = Backbone.View.extend({
        tagName: "li",
        className: "food-view",
        template: "<span class='item-name'>{{ item_name }}</span>  <span>{{ brand_name }} </span><span class='calorie'>{{ nf_calories }} kcal</span>",
        render: function(){
            this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
            return this;
        }
    });

})();
