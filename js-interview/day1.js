//variable and Datatypes
// Task  Declare a variable using var , assign it a number, and log the value to the console.
var Number = 100
console.log(Math.log((Number)));
console.log(Number);
//o/p = 4.605170185988092 , 100


// Task2 Declare a variable  using let, assing it a string, and log the value to the console
let Product = "Apple-Phone"
console.log(Product);

// task 3 
// Declare a variable using const, assing it a boolean value , and log the value to the console.
const IsPizza = true;
console.log(IsPizza);
// Activity 3
// task 4
// Create variables of differnet data types (number,string , boolean, object , array) and log each variable's type using typeog operator.
let numberVariable = 42; 
console.log(typeof numberVariable);
let stringVariable = "Hello, World!"; 
console.log(typeof stringVariable);
let booleanVariable = true; 
console.log(typeof booleanVariable);
let objectVariable = { name: "John", age: 30 }; 
console.log(typeof objectVariable);
let arrayVariable = [1, 2, 3, 4, 5]; 
console.log(typeof arrayVariable);


// task 5
// Declare a variable using let , assign it an intial value, reassign a new valuem and log both values to the console.
let numVariable = 10;
console.log("Initial value:" , numVariable);

numVariable = 20;
console.log("new value:", numVariable);

let person = {
    name:"shyam",
    age:27
};
console.log("Initial person:", person);
person.name = "Ghanshyam";
person.age = 25;

console.log("New Person:", person);


//task 6 Try reassigning a variable declared with cons and observe the error.
//const IsPizza = true;
//console.log(IsPizza);
// Uncaught SyntaxError: Identifier 'IsPizza' has already been declared




// All Activity output is 
/*
4.605170185988092
100
Apple-Phone
true
number
string
boolean
object
object
Initial value: 10
new value: 20
Initial person: { name: 'shyam', age: 27 }
New Person: { name: 'Ghanshyam', age: 25 }*/