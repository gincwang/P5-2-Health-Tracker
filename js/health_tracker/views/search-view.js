var HealthTracker = HealthTracker || {
    Models: {},
    Collections: {},
    Controllers: {},
    Views: {}
};


(function(){
    'use strict';

    //Search View
    //---------

    HealthTracker.Views.SearchView = Backbone.View.extend({
        initialize: function(options){
            _.bindAll(this, 'render', 'queryAPI', 'deleteResults');
            this.date = {date: options.date};
        },

        el: "#search",

        template:'<form>' +
                    '<div id="search-fields">' +
                        '<input id="search-fields-bar" placeholder="Search for food here.." type="text">' +
                        '<button type="button" id="search-fields-delete-button">x</button>' +
                        '<button id="search-fields-button"><i class="material-icons">search</i></button>' +
                    '</div>' +
                    '<div id="date-fields">' +
                        '<input id="date-picker" type="date" max="{{ date }}"' +
                    '</div>' +
                 '</form>',

        render: function(){
            this.$el.html(Mustache.to_html(this.template, this.date));
            $("#date-picker").val(this.date.date);
            return this;
        },

        events: {
            "click #search-fields-button": "queryAPI",
            "click #search-fields-delete-button": "deleteResults"
        },

        queryAPI: function(e){
            e.preventDefault();
            this.trigger("sendAjax", $("#search-fields-bar").val());
        },

        deleteResults: function(e){
            e.preventDefault();
            $("#search-fields-bar").val("");
            this.trigger("emptyResults");
        }

    });

})();
