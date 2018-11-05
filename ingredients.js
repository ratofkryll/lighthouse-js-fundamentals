var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//Ingredients while loop
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

//Ingredients for loop
var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

//Ingredients backward
var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
