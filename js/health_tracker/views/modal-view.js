(function(){
    'use strict';

    /**
      * @desc Modal View
      * This view will render a modal containing the bar graph
    */

    HealthTracker.Views.ModalView = Backbone.View.extend({

        template:   "<div class='modal-bg'>" +
                    "<div class='modal'>" +
                        "<a href='#' class='modal-close'>X</a>" +
                        "<div class='modal-content' id='modal-content-chart'></div>" +
                    "</div></div>",

        events: {
            "click .modal-close": "hide"
        },

        render: function(){
            this.$el.show();
            this.$el.html(this.template);
            var chart = new HealthTracker.Views.ChartView({el: '#modal-content-chart', week: this.getWeekString()});
            chart.getWeekCalories();
            return this;
        },

        hide: function(){
            this.$el.hide();
        },

        /*
         * @desc Returns a 7-element array with string dates for the past week.
         * @param none
         * return string array
        */
        getWeekString: function(){
            var dates = [];
            var date = new Date();

            //needs to get date strings for the previous six days
            for(var i=0; i < 7; i++){
                dates.push(this.getDateString(date));
                date.setDate(date.getDate() - 1);
            }

            return dates;
        },

        /*
         * @desc convert date type to date string in YYYY-MM-DD format
         * @param date
         * return string
        */
        getDateString: function(date){
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            if( month.length < 2) { month = "0" + month;}
            if( day.length < 2) { day = "0" + day; }

            return year + "-" + month + "-" + day;
        }

    });

})();
