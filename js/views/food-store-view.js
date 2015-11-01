var app = app || {};

(function(){
    'use strict';

    app.FoodStoreView = Backbone.View.extend({
        tagName: 'li',

        className: 'food-store-view',

        template: '<div><p class="item-name">{{ item_name }}</p><p class="brand-name">{{ brand_name }}</p><p class="p-calories">{{ nf_calories }} Calories</p><span class="select-label">Qty</span><select class="quantity-select"><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option></select></div><div class="remove-btn-wrapper"><button type="button" class="remove-button">x</button></div>',

        render: function(){
            this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
            return this;
        }


    });



})();
