//Concatination and Interpolation
var price = 80;
var itemName = "Table";
var messsageToPrint = "The price for your " + itemName + " is " + price + " dollars"; //concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`; //Interpolation
console.log(messsageToPrint);
console.log(messageToPrint2);
