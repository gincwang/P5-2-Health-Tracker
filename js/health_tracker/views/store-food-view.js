
(function(){
    'use strict';

    HealthTracker.Views.FoodStoreView = Backbone.View.extend({
        initialize: function () {
            this.selectOPtions = {options: [
                {value: 1, text: 1, selected: false},
                {value: 2, text: 2, selected: false},
                {value: 3, text: 3, selected: false},
                {value: 4, text: 4, selected: false},
                {value: 5, text: 5, selected: false},
                {value: 6, text: 6, selected: false},
                {value: 7, text: 7, selected: false},
                {value: 8, text: 8, selected: false},
                {value: 9, text: 9, selected: false},
                {value: 10, text: 10, selected: false},
            ]};
            //initialize default selected option
            this.selectOPtions.options[this.model.get('quantity') - 1]["selected"] = true;
        },

        events: {
            "change select": "changeQuantity"
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
            this.$el.html(Mustache.to_html(this.template.main, this.model.toJSON()) +
                            Mustache.to_html(this.template.select, this.selectOPtions));
            return this;
        },

        changeQuantity: function(e) {
            //get number of selected value
            var num = parseFloat($(e.target).val());

            //update the template strings
            _.each(this.selectOPtions.options, function(element, index, list){
                if(index === num){
                    element.selected = true;
                }else {
                    element.selected = false;
                }
            });

            //save to database
            this.model.set('quantity', num);
        }
    });



})();
