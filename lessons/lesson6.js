//Conditional statement

// If hour between 6 and 12, print "Good morning"
// If hour between 12 nad 18, print "Good Afternoon"
//Othersise: Good Evening

var hour = 17;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

var ageIsMoreThanEighteen = false;
var isUSCitizen = true;

if (ageIsMoreThanEighteen && isUSCitizen) {
  console.log("Customer is eligible for DL");
} else {
  console.log("Customer is NOT eligible for DL");
}
