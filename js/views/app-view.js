var app = app || {};

(function($){
    'use strict';

    //Main App View
    //-------------
    app.AppView = Backbone.View.extend({
        initialize: function(options){
            var foodList = new app.FoodList();
            foodList.push({brand_name: "Mcdonalds", item_name: 'Carrots, raw - 1 large (7-1/4" to 8-/1/2 long)'});
            foodList.push({brand_name: "Chipotle", item_name: "Burrito Bowl"});

            this.foodListView = new app.FoodListView({collection: foodList});
        },
        el: '#foodApp',

        events: {
            "click #search-fields-button": "sendAjax",
            "click .add-button": "addFoodToStore"
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
                var url = "https://api.nutritionix.com/v1_1/search/" + input + "?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + appID + "&appKey=" + appKey;
                //reset the collection first before ajax request
                this.foodListView.collection.reset();
                this.foodListView.render();

                $.ajax({
                    context: this,
                    dataType: "json",
                    url: url,
                })
                    .done(function(response){
                    if(response.hits.length > 0){
                        //clear current collection
                        _.each(response.hits, function(element, index, list){
                            this.foodListView.collection.push({brand_name: element.fields.brand_name,
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
            console.log(food.attributes);
        }

    });
})(jQuery);
