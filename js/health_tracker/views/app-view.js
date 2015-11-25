(function(){
    'use strict';

    /**
      * @desc App View (Controller).
      * This is the main controller of the application, which will instantiate all
      * of its subviews and router, and listen for various events fired from its subviews.
      *
    */

    HealthTracker.Views.AppView = Backbone.View.extend({
        initialize: function(options){
            //initialize sub-views
            this.data = options.data;
            this.searchView = new HealthTracker.Views.SearchView({date: options.date});
            this.foodListView = new HealthTracker.Views.FoodListView({collection: options.data.foodList});
            this.storeListView = new HealthTracker.Views.StoreFoodListView({collection: options.data.foodListFire});
            this.router = new HealthTracker.Router({date: options.data});

            //initialize event listeners from sub-views
            this.listenTo(this.searchView, "showList", this.showList);
            this.listenTo(this.searchView, "unShowList", this.unShowList);
            this.listenTo(this.storeListView, "unShowList", this.unShowList);
            this.listenTo(this.searchView, "sendAjax", this.sendAjax);
            this.listenTo(this.searchView, "emptyResults", this.emptyResults);
            this.listenTo(this.searchView, "navigateDate", this.navigateDate);
            this.listenTo(this.foodListView, "addFoodToStore", this.addFoodToStore);
            this.listenTo(this.storeListView, "removeFoodFromStore", this.removeFoodFromStore);
            this.listenTo(this.router, "showTodayCollection", this.showTodayCollection);
            this.listenTo(this.router, "changeCollection", this.changeCollection);
            Backbone.history.start({pushState: true});
        },

        el: "#foodApp",

        render: function(){
            this.searchView.render();
            this.foodListView.render();
            this.storeListView.render();
        },

        showList: function(){
            var $list = $("#list");
            if( $list.children('li').length > 0 ){
                $('#list-wrapper, #store').addClass("show");
            }
        },

        unShowList: function(){
            $('#list-wrapper, #store').removeClass("show");
        },

        /*
         * @desc Fires off ajax request to nutritionix API based on search string,
         * and populates search result list
         * @param string
         * return none
        */
        sendAjax: function(search){
            if(search){
                var appID = "db85c300";
                var appKey = "58eea2e9289fa4e28d86c6baa320e03f";
                var url = "https://api.nutritionix.com/v1_1/search/" + search + "?results=0:10&fields=item_name,brand_name,item_id,nf_calories&appId=" + appID + "&appKey=" + appKey;
                //reset the collection first before ajax request
                this.data.foodList.reset();

                $.ajax({
                    context: this,
                    dataType: "json",
                    url: url,
                })
                    .done(function(response){
                    if(response.hits.length > 0){
                        //clear current collection
                        _.each(response.hits, function(element, index, list){
                            this.data.foodList.push({
                                                brand_name: element.fields.brand_name,
                                                item_name: element.fields.item_name,
                                                nf_calories: element.fields.nf_calories,
                                            }, {silent: true});
                        }, this);
                        this.foodListView.render();
                        this.showList();
                    }
                })
                    .fail(function(){
                        alert("ajax fail");
                    });
            }
        },

        //Empty ajax search results
        emptyResults: function(){
            this.data.foodList.reset();
            this.unShowList();
        },

        /*
         * @desc gets the index from food result that clicked "+" button,
         * then adds it to the food store's collection.
         * @param number
         * return none
        */
        addFoodToStore: function(index){
            //grab food model info at index
            var food = this.data.foodList.at(index);

            //save food info to the food store
            this.data.foodListFire.create(food.attributes);
        },

        /*
         * @desc gets the index from food store item that clicked "X" button,
         * then remove it from food store's collection.
         * @param number
         * return none
        */
        removeFoodFromStore: function(index){
            this.data.foodListFire.remove(this.data.foodListFire.at(index));
        },

        /*
         * @desc Triggers page navigation to the date specified
         * @param string in date format: YYYY-MM-DD
         * return none
        */
        navigateDate: function(date){
            this.router.navigate(date, {trigger: true});
        },

        /*
         * @desc Changes the currently displayed collection in Food Store
         * Gets called when date is valid
         * @param string in date format: YYYY-MM-DD
         * return none
        */
        changeCollection: function(date){
            this.data.foodListFire = new HealthTracker.Collections.FoodListFire([], {date: date});
            this.storeListView = new HealthTracker.Views.StoreFoodListView({collection: this.data.foodListFire});
            this.storeListView.render();
        }


    });


})();
