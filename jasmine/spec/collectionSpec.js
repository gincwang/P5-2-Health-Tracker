xdescribe("Collections", function(){
    var foodList;

    beforeEach(function(){
        foodList = {};
    });

    it("can count total items", function(){
        foodList = new HealthTracker.Collections.FoodList([{
            "brand_name": "Mcdonald's",
            "item_name": "McChicken",
            "nf_calories": 100,
            "ng_serving_weight_grams": 300,
            "quantity": 3
        },
        {
            "brand_name": "Mcdonald's",
            "item_name": "Fries",
            "nf_calories": 250,
            "ng_serving_weight_grams": 300,
            "quantity": 3
        }]);

        expect(foodList.getTotalItems()).toEqual(foodList.at(0).get("quantity" + foodList.at(1).get("quantity")));
    });

    it("can count total calories", function(){
        foodList = new HealthTracker.Collections.FoodList([{
            "brand_name": "Mcdonald's",
            "item_name": "McChicken",
            "nf_calories": 100,
            "ng_serving_weight_grams": 300,
            "quantity": 4
        },
        {
            "brand_name": "Mcdonald's",
            "item_name": "Fries",
            "nf_calories": 250,
            "ng_serving_weight_grams": 300,
            "quantity": 1
        }]);

        expect(foodList.getTotalCalorie()).toEqual(
            foodList.at(0).get("nf_calories") * foodList.at(0).get("quantity") + foodList.at(1).get("nf_calories") * foodList.at(1).get("quantity"));
    });


});
