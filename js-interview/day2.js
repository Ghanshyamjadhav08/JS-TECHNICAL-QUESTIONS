// Day 2 : Operators
//Activity 1: Arithmetic Operator
// Task 1 : write a program to add two nmbers and log the result to the console.

let num1 = 100
let num2 = 200
console.log(num1 + num2);

// Task 2: write a program to substract two numbers and log the result to the console.

let num3 = 400
let num4 = 100
console.log(num3 - num4);

//Task 3: write a program to multiply two numbers and log the result to console.

let num = 3
let number = 100
console.log(num * number);

//Task 4: Write a program to divide two nubers and log the result to the console.

let a = 900
let b = 3
console.log(a / b);

// Task 5 : write a program to find the reaminder when one number is divided by another and log the result to the console.

let val1 = 1000
let val2 = 700
console.log(val1 % val2) 

// Activity 2: Assignment Operator 
//Task 6: use the += operator to add a njmber to a variable  and log the result to the console.

let x = 20
let y = 30
 x += 20
 y += 30
 console.log(x, y);

// Task 7: Use the -= operator to substract a number from a variable and log the result to the console.

let z = 50 
let w = 90
 z -= 20
 w -= 40
 console.log( z, w);

// Acivity 3 : Comparison Operators 
// Task 8: Write a program to compq are two numbers using > and < and log  the result to the console.

const p = 50 
const q = 40
console.log( p > q);

const r = 90 ;
const s = 30 ;
console.log(s > r);//false
console.log(r < s);//false
console.log(s < r);//true

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let age1 = 10;
let age2 = 20;
console.log(`${age1} >= ${age2}:`, age1 > age2);
console.log(`${age1} <= ${age2}:`, age1 <= age2);

// Task 10: write a program to compare two numbers using == and === and log the result to the console.
let person1 = 1000;
let person2 = 1000;
console.log(`${person1} == ${person2}:`, person1 == person2);
console.log(`${person1}  === ${person2} :`, person1 === person2);

//Activity 4: Logical Operators

//Task 11: write a program that uses the && operator to combine two conditions and log the result to the console.
 let condition1 = true;
 let condition2 = false;
 console.log(`condition1 && condition2:`, condition1 && condition2);
 

//Task 12: write a program that uses the || operator to combine two conditions and log the result to the console.
 console.log(`condition 1  || condition2:`, condition1 || condition2);
//Task 13 : write a program that uses te ! operator to negate a condtition and log the result to the console.

 let condition3 = true;
 console.log(`!condition1:`, !condition3);
 
 // Task 14 : write a program that uses the ternary operaror to combine two condition and log the result to the console.

 let food = ['banana', 'grapes', 'pineaple'];

 food = 'banana';
 let result = food === 'banana' ? `${food} is healthy:`: `${food} is not healthy`;
 console.log(result);