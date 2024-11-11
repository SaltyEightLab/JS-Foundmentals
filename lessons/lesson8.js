// Declarative function
function helloOne() {
  console.log("Hello one!");
}
helloOne();

// Anonymous function
var helloTwo = function () {
  console.log("Hello two!");
};
helloTwo();

// Arrow function
var helloThree = () => {
  console.log("Hello three!");
};
helloThree();

// Function with arguments
function printName(name, lastName) {
  console.log(name + " " + lastName);
}
printName("Mike", "Smith");

// Function with return
function multiplyByTwo(number) {
  var result = number * 2;
  return result;
}
var myResult = multiplyByTwo(5);
console.log(myResult);

// Importing a function from a module
import { printAge } from "../helpers/printHelper.js";
printAge(25);

// import everything from a module
import * as helper from "../helpers/printHelper.js";
helper.printAge(25);
