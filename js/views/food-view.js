
var app = app || {};

(function(){
    'use strict';

    //Food View
    //---------

    app.FoodView = Backbone.View.extend({
        tagName: "li",
        className: "food-view",
        template: "<span>{{ brand_name }}</span>",
        render: function(){
            this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
            return this;
        }
    });

})();
