const app = "I don't do much."
var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles"
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!")
  }
}

function Sandwich(bread, ingredients, cut) {
  this.bread = bread
  this.ingredients = ingredients
  this.cut = cut
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"]), "rectangle")

var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal")

serve.call(gc);
serve.call(pbj);

serve.call(gc, "Terry");
serve.call(pbj, "Jesse");

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);


function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    }else {
        console.log(this.name + ". Order up!");
    }
}

pbj.describe.call(salad);

var describeSalad = pbj.describe.bind(salad);
describeSalad();


function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

salad.describe = pbj.describe.bind(salad);

var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
