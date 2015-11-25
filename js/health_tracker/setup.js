$(function(){

    /**
      * @desc Setup File
      * NEEDS to be the LAST file included in index.html
      * instantiates App View Controller with today's date to start the application
    */

    //get today's date and use it to instantiate Firebase Collection
    var today;
    var date = new Date();
    var getDateString = function(date){
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        if( month.length < 2) { month = "0" + month;}
        if( day.length < 2) { day = "0" + day; }

        return year + "-" + month + "-" + day;
    };

    //Instantiate default collections to be rendered on app-load
    today = getDateString(date);
    HealthTracker.collections = {
        foodList: new HealthTracker.Collections.FoodList(),
        foodListFire: new HealthTracker.Collections.FoodListFire([],{date: today})
    };

    //Initialize the main App View (controller)
    HealthTracker.view = new HealthTracker.Views.AppView({data: HealthTracker.collections, date: today});
    HealthTracker.view.render();

});
