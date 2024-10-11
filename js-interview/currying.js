// currying in Javascript
// question 1 = sum (2)(6)(1)

//function sum(a, b, c) {
//    return a + b + c;
//}
//console.log(sum(2, 6, 1)); // returns 9 


function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(sum(2)(6)(1));


// question 2 

/*
 evaluate ("sum") (4)(2) => 6
 evaluate ("sum") (4)(2) => 8
 evaluate ("sum") (4)(2) => 2
evaluate  ("sum") (4)(2) => 2
*/

function evaluate(operation) {
    return function (a) {
        return function (b){
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "substract") return a - b;
            else return "Invalid Operation"
        };
    };
}
const mul = evaluate("multiply");

console.log(mul(25)(25));//625
console.log(mul(2)(5));//10


//question 3: infinite Currying  => sum(1)(2)(3) .....(n)

function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}

console.log(add(5)(2)(4)(8)());



