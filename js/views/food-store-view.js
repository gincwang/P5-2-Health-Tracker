var app = app || {};

(function(){
    'use strict';

    app.FoodStoreView = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, "change", this.render);
            this.selectOPtions = {options: [
                {value: 1, text: 1, selected: false},
                {value: 2, text: 2, selected: false},
                {value: 3, text: 3, selected: false},
                {value: 4, text: 4, selected: false},
                {value: 5, text: 5, selected: false},
            ]};
            this.selectOPtions.options[this.model.get('quantity') - 1]["selected"] = true;
        },

        tagName: 'li',

        className: 'food-store-view',

        template: {
            main: '<div>' +
                    '<p class="item-name">{{ item_name }}</p>' +
                    '<p class="brand-name">{{ brand_name }}</p>' +
                    '<p class="p-calories">{{ nf_calories }} Calories</p>' +
                    '<span class="select-label">Qty</span>' +
                  '</div>' +
                  '<div class="remove-btn-wrapper"><button type="button" class="remove-button">x</button></div>',
            select: '<select class="quantity-select">{{#options}}' +
                        '<option value={{value}} {{#selected}}selected{{/selected}}>' + '{{text}}' +
                        '</option>' +
                    '{{/options}}</select>'
        },

        render: function(){
            this.$el.html(Mustache.to_html(this.template.main, this.model.toJSON()) + Mustache.to_html(this.template.select, this.selectOPtions));
            return this;
        },

        events: {
            "change select": "changeQuantity"
        },

        changeQuantity: function(e) {
            var num = $(e.target).val();
            this.model.set({"quantity": num});
            _.each(this.selectOPtions.options, function(element, index, list){
                if(index === num){
                    element.selected = true;
                }else {
                    element.selected = false;
                }
            });

        }


    });



})();
