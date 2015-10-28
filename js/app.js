var app = app || {};

$(function(){
    'use strict';

    var foodList = new app.FoodList();
    foodList.push({brand_name: "Mcdonalds", item_name: "McChicken"});
    foodList.push({brand_name: "Chipotle", item_name: "Burrito Bowl"});
    var foodListView = new app.FoodListView({collection: foodList});
    foodListView.render();
});
