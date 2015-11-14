(function(){
    'use strict';

    HealthTracker.Views.ChartView = Backbone.View.extend({
        initialize: function(options){
            this.week = options.week;
            this.calories = [];
            this.data = [];
            this.el = options.el;
            this.listenTo(this, "syncComplete", this.render);
        },
        render: function(){
            //populates data array
            if(this.calories.length === this.week.length){
                this.data = [];
                for(var i=0; i < this.calories.length; i++){
                    this.data.push({date: this.week[i],
                                 calorie: this.calories[i]});
                }
                console.log(this.data.reverse());
            }

            //setup svg variables
            var outerWidth = 600;
            var outerHeight = 400;
            var margin = {top:25, right:50, bottom: 65, left: 75};
            var barPadding = 0.2;

            var xColumn = "calorie";
            var yColumn = "date";
            var xAxisLabelText = "Calorie";
            var xAxisLabelOffset = 45;


            var innerWidth = outerWidth - margin.left - margin.right;
            var innerHeight = outerHeight - margin.top - margin.bottom;

            //groups
            var svg = d3.select(this.el).append("svg")
                .attr("width", outerWidth)
                .attr("height", outerHeight)
                .attr("class", "svg-class");
            var g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            var xAxisG = g.append("g")
                .attr("transform", "translate(0, " + innerHeight + ")")
                .attr("class", "axis");
            var xAxisLabel = xAxisG.append("text")
                .style("text-anchor", "middle")
                .attr("x", innerWidth/2)
                .attr("y", xAxisLabelOffset)
                .attr("class", "chartLabel")
                .text(xAxisLabelText);
            var yAxisG = g.append("g")
                .attr("class", "axis");

            //scales
            var yScale = d3.scale.ordinal()
                .domain(this.data.map(function(d){ return d[yColumn]; }))
                .rangeRoundBands([innerHeight, 0], barPadding);
            var xScale = d3.scale.linear()
                .domain([0, d3.max(this.data, function(d){ return d[xColumn]; })])
                .range([0, innerWidth]);

            //axis
            var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
            var yAxis = d3.svg.axis().scale(yScale).orient("left");

            xAxisG.call(xAxis);
            yAxisG.call(yAxis);

            //bind
            var bars = g.selectAll("rect").data(this.data);

            //enter
            bars.enter().append("rect");

            //update
            bars
                .attr("x", 0)
                .attr("y", function(d){ return yScale(d[yColumn]); })
                .attr("height", yScale.rangeBand())
                .attr("width", 0);


            bars
                .transition()
                .duration(500)
                .delay(function(d,i){ return i*150 })
                .ease("cubic-in-out")
                .attr("width", function(d){ return xScale(d[xColumn]); });

            //exit
            bars.exit().remove();

        },

        getWeekCalories: function(){
            this.calories = [];
            var calorie = 0;
            var numDays = 7;
            this.week.forEach(function(day){
                var data = new HealthTracker.Collections.FoodListFire([], {date: day});
                data.on('sync', function(collection){
                    calorie = parseFloat(data.getTotalCalorie());
                    this.calories.push(calorie);
                    if(this.calories.length === 7){
                        console.log(this.calories);
                        this.trigger("syncComplete");
                    }
                }, this);
            }, this);
        }

    });

})();
