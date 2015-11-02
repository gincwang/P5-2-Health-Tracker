var app = app || {};

(function($){
    'use strict';

    //Main App View
    //-------------
    app.AppView = Backbone.View.extend({
        initialize: function(options){
            //initialize store view with firebase collection
            this.foodStoreListView = new app.FoodListView({collection: options.storeCollection, el: '#shelve'});
            this.foodStoreListView.render();    //make sure the store renders even when Firebase is empty

            //initialize list query view
            var foodList = new app.FoodList();
            this.foodListView = new app.FoodListView({collection: foodList, el: '#list'});
        },
        el: '#foodApp',

        events: {
            "click #search-fields-button": "sendAjax",
            "click #search-fields-delete-button": "deleteResults",
            "focusin #search-fields-bar": "addStyles",
            "click #store": "removeStyles",
            "click .add-button": "addFoodToStore",
            "click .remove-button": "removeFoodFromStore"
        },

        render: function(){
            this.foodListView.render();
        },

        sendAjax: function(e) {
            // AppID: db85c300
            // AppKey: 58eea2e9289fa4e28d86c6baa320e03f
            e.preventDefault();
            var input = $("#search-fields-bar").val();
            if(input){
                var appID = "db85c300";
                var appKey = "58eea2e9289fa4e28d86c6baa320e03f";
                var url = "https://api.nutritionix.com/v1_1/search/" + input + "?results=0:15&fields=item_name,brand_name,item_id,nf_calories&appId=" + appID + "&appKey=" + appKey;
                //reset the collection first before ajax request
                this.foodListView.collection.reset();

                $.ajax({
                    context: this,
                    dataType: "json",
                    url: url,
                })
                    .done(function(response){
                    if(response.hits.length > 0){
                        //clear current collection
                        _.each(response.hits, function(element, index, list){
                            this.foodListView.collection.push({
                                                brand_name: element.fields.brand_name,
                                                item_name: element.fields.item_name,
                                                nf_calories: element.fields.nf_calories,
                                            }, {silent: true});
                        }, this);
                        this.foodListView.render();
                    }
                })
                    .fail(function(){
                        alert("ajax fail");
                    });

            }

        },

        addFoodToStore: function(e) {
            //retrieve food model from clicked item
            var index = $(e.target).parent().parent().index();
            var food = this.foodListView.collection.at(index);
            this.foodStoreListView.collection.create(food.attributes);
        },

        deleteResults: function(e) {
            e.preventDefault();
            this.foodListView.collection.reset();
            $("#search-fields-bar").val("");
        },

        //slide side list from left
        addStyles: function(e) {
            $("#list-wrapper").addClass("show");
            $("#store").addClass("show");
        },

        removeStyles: function(e) {
            $("#list-wrapper").removeClass("show");
            $("#store").removeClass("show");
        }

    });
})(jQuery);
