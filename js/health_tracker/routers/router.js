(function(){
    'use strict';

    HealthTracker.Router = Backbone.Router.extend({
        initialize: function(options){
            this.date = options.date;
            this.route(/(^\d{4}-\d{2}-\d{2}$)/, "goToDate");
            this.route("", "today");
        },

        today: function(){
            this.trigger("showTodayCollection", this.date);
        },

        goToDate: function(date){
            this.trigger("changeCollection", date);
        }

    });


})();
