var app = app || {};

(function(){
    'use strict';

    app.FoodStoreView = Backbone.View.extend({
        tagName: 'li',

        className: 'food-store-view',

        template: '<div><p class="item-name">{{ item_name }}</p><p class="brand-name">{{ brand_name }}</p><p>{{ nf_calories }} Calories</p></div><div class="remove-btn-wrapper"><button type="button" class="remove-button">Remove</button></div>',

        render: function(){
            this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
            return this;
        }


    });



})();
