
var app = app || {};

(function(){
    'use strict';

    //Food View
    //---------

    app.FoodView = Backbone.View.extend({
        tagName: "li",
        className: "food-view",
        template: "<div class='item-descriptions'><h4 class='item-name'>{{ item_name }}</h4><h5 class='brand-name'>{{ brand_name }} </h5></div><div class='nutrition'><span class='calorie'>{{ nf_calories }} kcal </span><button type='button'> + </button></div>",
        render: function(){
            this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
            return this;
        }
    });

})();
