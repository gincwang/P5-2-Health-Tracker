# P5-2-Health-Tracker

#### Want to track your total calorie intake? Use this app and add all the food you eat during the day! 

Check out the app here: http://gincwang.github.io/P5-2-Health-Tracker

Framework/Libraries: Backbone.js, Firebase, mustache.js, Underscore.js, jQuery, d3.js.

API: Nutritionix API: http://www.nutritionix.com/business/api


##Background

#### Summmary
This is project 5-2 from Udacity's Front-End Developer Nanodegree, where we are supposed to utilize 3rd-party API to via AJAX requests, and specifically learn Backbone.js to organize our code through model-view-xxx organization. The project rubric is here: https://www.udacity.com/course/viewer#!/c-nd001/l-5030258562/m-5054019724

#### Things explored
In addition to the basic requirements, I also got to play with mustache.js (for templating inside Backbone views), d3 (for making cool plots and animating them), flexbox (as an alternative to using Bootstrap's grid systems), and for looking really hard online for how people organize their backbone apps through namespacing, separation of concerns, etc. I'm still just scratching the surface of all these technologies, but it's been loads of fun trying to get there.


##App Features
  
#### Calorie in Food
  * In the search-field look for anything you are eating today.
  * Click the "+" button on any food result to add to your food vault.

#### Food Store
  * In the Shopping Cart you will find all the food items you have added.
  * You can adjust the quantity of each food item depending on the portions you ate.
  * The "total" shows your total calorie consumption for the day, and also shows the total number of items in your cart.

#### Weekly Summary
  * If you select a different date from the calendar input box, you can retrieve the calorie consumption detail for that date.
  * You can also edit the food selection from that day, if you forget to update your consumption previously.
  * Clicking "Weekly Summary" will give you a graphical view on the current week's calorie consumption at a glance.
  

