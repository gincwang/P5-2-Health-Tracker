

(function(){
    'use strict';

    //Search Controller
    //.................

    HealthTracker.Controllers.SearchController = function(options){

        this.view = options.view;
        this.view.on("sendAjax", this.getQueryResults, this);

        this.addFood = function(){
            alert("addFood");
        };

        this.getQueryResults = function(val){
            console.log(val);
            alert("sendAjax");
        };
    };

})();
