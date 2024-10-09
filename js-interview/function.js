// function declaration

/*
 function square(num){
 
    return num * num
  }
  console.log(square(8));
 
*/

// function expression : when you store a funcion inside of variable its knowns function expression

const square = function (num){
   return num * num;
};
console.log(square(5));


// first class function : function can be treated like variable, function can be pass another functions can be manipulated 


function displaysquare(fn) {
    console.log('Square is'+ fn(5));
}
displaysquare(square);


// IIFE 

(function square(num){
    console.log(num * num);

})(9);


//o/p base qn.
 
(function(x){
    return (function(y){
        console.log(x);//1
    })(2)
})(1)



// Function scope 
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Shyam";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "shyam scored 5"



// 7

for(let i = 0; i < 5; i++) {
    setTimeout(function (){
        console.log(i);
    }, i* 1000);
}

// function hoistiong o/p basw question

var x = 21;

var fun = function () {
    console.log(x);
    var x = 20;
};

fun();// undefined

// params vs Arguments

function double(num) {  //params
    console.log(num * 2);
}
double(99); // arguments  


// spread and rest  params 

function multiply(...nums) {// rest operator
    console.log(nums[0] * nums[1]);

}

var arr = [5,6];
multiply(...arr);//spread operator



const fn = (a, x, y, ...numbers) => {
    console.log(x, y, numbers);
};

fn(5,6,3,7,8,9);