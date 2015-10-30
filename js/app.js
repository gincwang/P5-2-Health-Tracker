var app = app || {};

$(function(){
    'use strict';
    var foodListFire = new app.FoodListFire();
    var appView = new app.AppView({storeCollection: foodListFire});
});
