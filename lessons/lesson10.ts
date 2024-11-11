var customerFisrstName: string = "John";
var customerLastName: string = "Smith";
var customerAge: number = 25;

type Customer = {
  firstName: string;
  lastName: string;
  active: boolean;
};

var firstCustomer: Customer = {
  firstName: "Mery",
  lastName: "Johns",
  active: true,
};

console.log(firstCustomer);
