var app = app || {};

$(function(){
    'use strict';

    var food = new app.Food();
    var view = new app.FoodView({model: food});
    console.log(view.render().el);
});
