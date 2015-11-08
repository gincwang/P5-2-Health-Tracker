
(function(){
    'use strict';

    //Store Controller
    //................

    HealthTracker.Controllers.StoreController = function(options){
        this.view = options.view;

        this.view.on("changeFoodQuantity", this.changeQuantity, this);
    };


})();
