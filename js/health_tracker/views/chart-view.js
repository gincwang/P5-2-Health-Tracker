(function(){
    'use strict';

    HealthTracker.Views.ChartView = Backbone.View.extend({
        initialize: function(options){
            this.week = options.week;
            this.calories = [];
            this.listenTo(this, "syncComplete", this.graph);
        },
        render: function(){

        },

        getWeekCalories: function(){
            this.calories = [];
            var calorie = 0;
            var numDays = 7;
            this.week.forEach(function(day){
                var data = new HealthTracker.Collections.FoodListFire([], {date: day});
                data.on('sync', function(collection){
                    calorie = data.getTotalCalorie();
                    this.calories.push(calorie);
                    if(this.calories.length === 7){
                        console.log(this.calories);
                        this.trigger("syncComplete");
                    }
                }, this);
            }, this);
        },

        graph: function(){
            console.log("graph");
        }

    });

})();
