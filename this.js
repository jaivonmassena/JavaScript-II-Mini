/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding is left of the dot.
* 2. When "this" doesn't have a target it refers to the window it is in. (window binding)
* 3. Explicit uses call, apply or bind to bind "this" to object.
* 4. Binds this to an object using the 'new' keyword
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

function windowBinding() {
  console.log(this);
}
windowBinding();

// Principle 2

// code example for Implicit Binding
const Human = {
  name: "Jaivon",
  arms:2,
  legs : 2,
  howManyLimbs: function() {
    console.log(this.legs + this.arms);
  }
}
Human.howManyLimbs()
// Principle 3

// code example for New Binding
const Dog = function(name, breed, legs){
  this.name = name,   
  this.breed = breed,
  this.legs = legs,
  this.speak = function(){
    console.log("woof");
  }
}

const Buster = new Dog("Buster","Mutt", 4);

console.log(Buster.name);
// Principle 4

// code example for Explicit Binding

const greeTings = function(){
  console.log("Hallo! I'm", this.name, "and I love doing code challenges in the morning -__-");
}
greeTings.call(Human);
