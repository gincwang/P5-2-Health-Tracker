
(function(){
    'use strict';

    //Search View
    //---------

    HealthTracker.Views.SearchView = Backbone.View.extend({
        initialize: function(options){
            _.bindAll(this, 'render', 'queryAPI', 'deleteResults', 'navigateDate', 'openModal', 'showList');
            this.date = {date: options.date};
            this.modalView = new HealthTracker.Views.ModalView({el: '#chart'});
        },

        el: "#search",

        template:'<form>' +
                    '<div id="search-fields">' +
                        '<input id="search-fields-bar" placeholder="Search for food here.." type="text">' +
                        '<button type="button" id="search-fields-delete-button">x</button>' +
                        '<button id="search-fields-button"><i class="material-icons">search</i></button>' +
                    '</div>' +
                    '<div id="date-fields">' +
                        '<input id="date-picker" type="date" max="{{ date }}">' +
                        '<button id="weekly-summary" type="button">Weekly Summary</button>' +
                    '</div>' +
                 '</form>',

        render: function(){
            this.$el.html(Mustache.to_html(this.template, this.date));
            $("#date-picker").val(this.date.date);
            return this;
        },

        events: {
            "focusin #search-fields-bar": "showList",
            "click #date-fields": "unShowList",
            "click #search-fields-button": "queryAPI",
            "click #search-fields-delete-button": "deleteResults",
            "change #date-picker": "navigateDate",
            "click #weekly-summary": "openModal"
        },

        queryAPI: function(e){
            e.preventDefault();
            this.trigger("sendAjax", $("#search-fields-bar").val());
        },

        deleteResults: function(e){
            e.preventDefault();
            $("#search-fields-bar").val("");
            this.trigger("emptyResults");
        },

        navigateDate: function(e){
            this.trigger("navigateDate",$(e.target).val());
        },

        openModal: function(e){
            console.log("open modal");
            this.modalView.render();
        },

        showList: function(){
            console.log('show');
            this.trigger("showList");
        },

        unShowList: function(){
            console.log("unshow");
            this.trigger("unShowList");
        }

    });

})();
