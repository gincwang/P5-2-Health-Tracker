(function(){
    'use strict';

    /**
      * @desc Search View
      * This view will render the search bar, date filter, and instantiate a subview
      * for showing the Modal View. All the user interactions are recorded and forwarded
      * to the App-View Controller
    */

    HealthTracker.Views.SearchView = Backbone.View.extend({
        initialize: function(options){
            _.bindAll(this, 'render', 'queryAPI', 'deleteResults', 'navigateDate', 'openModal', 'showList');
            this.date = {date: options.date};
            this.modalView = new HealthTracker.Views.ModalView({el: '#chart'});
            this.searchTemplate = $("#search-template").html();
        },

        el: "#search",

        render: function(){
            this.$el.html(Mustache.to_html(this.searchTemplate, this.date));
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
        //Forwards search string to App-View to process ajax request
        queryAPI: function(e){
            e.preventDefault();
            this.trigger("sendAjax", $("#search-fields-bar").val());
        },

        //Forwards intention to delete current search results to App-View
        deleteResults: function(e){
            e.preventDefault();
            $("#search-fields-bar").val("");
            this.trigger("emptyResults");
        },

        //Forwards the navigation intent to App-View's router
        navigateDate: function(e){
            this.trigger("navigateDate",$(e.target).val());
        },

        openModal: function(e){
            this.modalView.render();
        },

        //Forwards intention to unhide ajax results to App-View
        showList: function(){
            this.trigger("showList");
        },

        //Forwards intention to hide ajax results to App-View
        unShowList: function(){
            this.trigger("unShowList");
        }

    });

})();
