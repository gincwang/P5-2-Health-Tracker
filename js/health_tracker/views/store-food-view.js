(function(){
    'use strict';

    /**
      * @desc Store Food View
      * This view will render a Food Model that was added to the Food Store
    */

    HealthTracker.Views.FoodStoreView = Backbone.View.extend({
        initialize: function () {
            //initialize values for templating select input
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
                {value: 10, text: 10, selected: false}
            ]};
            //initialize default selected option
            this.selectOPtions.options[this.model.get('quantity') - 1].selected = true;
            this.templateMain = $("#food-main-template").html();
            this.templateSelect = $("#food-select-template").html();
        },

        events: {
            "change select": "changeQuantity"
        },

        tagName: 'li',

        className: 'food-store-view',

        render: function(){
            this.$el.html(Mustache.to_html(this.templateMain, this.model.toJSON()) +
                            Mustache.to_html(this.templateSelect, this.selectOPtions));
            return this;
        },

        //updates the model's quantity attribute based on 'select' input
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
