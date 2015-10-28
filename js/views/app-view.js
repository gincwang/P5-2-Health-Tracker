var app = app || {};

(function($){
    'use strict';

    //Main App View
    //-------------
    app.AppView = Backbone.View.extend({
        initialize: function(){
            this.foodList = new app.FoodList();
            this.foodList.push({brand_name: "Mcdonalds", item_name: 'Carrots, raw - 1 large (7-1/4" to 8-/1/2 long)'});
            this.foodList.push({brand_name: "Chipotle", item_name: "Burrito Bowl"});

            this.foodListView = new app.FoodListView({collection: this.foodList});
        },
        el: '#foodApp',

        events: {
            "click #search-fields-button": "sendAjax"
        },

        sendAjax: function(e) {
            // AppID: db85c300
            // AppKey: 58eea2e9289fa4e28d86c6baa320e03f

            e.preventDefault();
            var input = $("#search-fields-bar").val();
            if(input){
                var appID = "db85c300";
                var appKey = "58eea2e9289fa4e28d86c6baa320e03f";
                var url = "https://api.nutritionix.com/v1_1/search/" + input + "?results=0:10&fields=item_name,brand_name,item_id,nf_calories&appId=" + appID + "&appKey=" + appKey;
                //var collection = this.foodListView.collection;

                $.ajax({
                    context: this,
                    dataType: "json",
                    url: url,
                })
                    .done(function(response){
                    if(response.hits.length > 0){
                        //clear current collection
                        this.foodList.reset();
                        console.log(this.foodList);
                        _.each(response.hits, function(element, index, list){
                            console.log(element.fields);
                            this.foodList.push({brand_name: element.fields.brand_name,
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

        render: function(){
            this.foodListView.render();
        }

    });
})(jQuery);
