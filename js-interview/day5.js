// Functions 
// Tasks/ Activities: function declaration
//Task 1: write a function  to check if a number is even or odd and log the result to the console.

function CheckNum (n){
    if( n % 2 == 0){
        console.log('number is even number');

    } else if (n % 2 != 0 ){
        console.log( 'number is odd number')
    }
}
CheckNum(12);

// Task2 : Write a function to calculate the square of a number and return the result.

function Calsquare (num){
    return num* num ;

} 
const result = Calsquare(5,);
console.log(result);

// Activity 2 : function Expression 

// Task 3: Write a function expression to find the maximum of two numbers snd log the result to the console.
  
function Maxnum (num1 , num2){
    if (num1 > num2 ){
        console.log(`${num1} is greater than ${num2}`); 
    } else if ( num2 > num1){
        console.log(`${num2} is greater than ${num1}`);

    } else {
        console.log("both numbers are equal");
    }

}
Maxnum( 5, 8);
Maxnum( 9, 9);




// task 4 : write a function expression to concatenate two strings and return the result.

const ConcatStr = function (str1 , str2) {
    return str1.concat(str2)
};
const res = ConcatStr("shyam ", "Jadhav");
console.log(res);

// ------ diff betn function declaration and  Function expression ----------

/* 
 :: Function Declarations are hoisted and have names, making them accessible throughout thier containing scope.
    Hoisted . you can call the function before its defined.
     greet(); // Output: Hello!

function greet() {
    console.log("Hello!");
}

 :: Function Expressions are not hoisted and can be anonymous, providing more flexibility in terms of scope and usage.
 Not hoisted. You must define the function before calling it
     greet(); // Error: greet is not defined

const greet = function() {
    console.log("Hello!");
};

greet(); // Output: Hello!

*/



// using arrow function ____ Activity 3 : Arrow function
 
const findMax = (a , b) => {
    let max;
    if ( a > b) {
       max = a;
    } else {
       max = b;
    }
    console.log(max);
    return max;

};

findMax(10, 30);
findMax(90, 40);

//Task 5 : Write a arrow function to calculate the sum of two numbers and return the result.

 const CalSum = ( x, y) => {
     return x + y;
 }
 const sum = CalSum(9000, 19000);
 console.log(sum);

 // Task 6 : write a arrow function to check if a string contains a specific character and return a boolean value.

 const findString = (str) =>{
    
      if (str.includes('s'))
        return true;
    else 
    return false;
 }
console.log(findString('shyam'));


const containsChar = (str, char) => str.includes(char);
 const result1 = containsChar("Shyam, jadhav", "w");
 console.log(result1);

// Activity 4 : Function Parameters and default Values 

// Task 7 : write a function that takes a two parameters and returns their product. provide a default value for the second parameter.

const multiply = (a , b = 5) => {
    return a* b;

}
console.log(multiply(6,5));
console.log(multiply(8));

// Task 8: Write a function that takes a persons name and age and returns a greetings message Provide a default value for the age.

const greet = (name, age = 25) =>{
    console.log(`hey my name is ${name} and my age is ${age}`)
}
greet("Shyam", 26);
greet("Shyam jadhav");

// Activity 5: Higher Order Functions

//Task 9 : Write a higher order function that a function and a number , and calls the function that many times.

function CallnTimes (name , num) {
 for ( let i = 0; i< num ; i++) {
    name();
 }
    
}

const PrintName = () =>{
    console.log("Hello")
}

CallnTimes(PrintName, 3);

// Task 10 : write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function composeFunctions(func1, func2, value){
    return func2(func1(value));
}

const addTwo = x => x + 2;
const square = x => x * x;

const result4 = composeFunctions(addTwo, square, 3);

console.log(result4);


 