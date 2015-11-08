
//DOM loaded
$(function(){


        var date = new Date();
        var getDateString = function(date){
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            if( month.length < 2) { month = "0" + month;}
            if( day.length < 2) { day = "0" + day; }

            return year + "-" + month + "-" + day;
        };

        var today = getDateString(date);



    HealthTracker.collection = {
        foodList: new HealthTracker.Collections.FoodList(),
        foodListFire: new HealthTracker.Collections.FoodListFire([],{date: today})
    };

    console.log(HealthTracker.collection.foodListFire);
    HealthTracker.view = new HealthTracker.Views.AppView({data: HealthTracker.collection, date: today});
    HealthTracker.view.render();

});
