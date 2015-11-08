

(function(){
    'use strict';

    //Query Controller
    //................

    HealthTracker.Controllers.QueryController = function(options){
        this.view = options.view;

        this.view.on("addFoodToStore", this.addFood, this);

        this.addFood = function(){
            alert("addFood");
        }
    };


})();
