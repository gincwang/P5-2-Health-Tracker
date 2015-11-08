
xdescribe("Food", function() {
    var food;
    beforeEach(function() {
        food = new HealthTracker.Models.Food();
    });

    it("should have default values", function() {
        var object = {
            "brand_name": "Food Corp",
            "item_name": "Food#1",
            "nf_calories": 50,
            "ng_serving_weight_grams": 300,
            "quantity": 1
        }

    expect(JSON.stringify(food.attributes)).toEqual(JSON.stringify(object));

    });


});
