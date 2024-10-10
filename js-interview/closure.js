//closure in javascript
// lexical scope


//global scope
var username = "crazy coder"

function local(){
    // local scope
    console.log(username);
}

local();


function subscribe() {
    var name = "coder gyann";
    function displayName() {
        console.log(name);// this function allows to access global function   
    }
    displayName();
}
subscribe();


//  closure scope chain

var username = "Shyam";
function makeFunc() {
    var name = "Mozilla";
    function display(num){
        console.log(name, num, username)
    }
    return display;
}
makeFunc()(5);


// global function 
var e = 10;
function sum (a){
    return function (b) {
        return function (c){
            // outer function scope
            return function (d){
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4));// 20 



// wha will be logged to console?

let count = 0;
(function printCount(){
    if(count == 0){
        let count = 1;// shadowing
        console.log(count);// 1
    }
    // count 0
    console.log(count);//0
})();



// qn.2 

function createBase (num) {
    return function (innerNum) {
        console.log(innerNum + num);
    };

}

var addFive = createBase(5);
addFive(10);// returns 15
addFive(20);// return 25

/*


function find(){
    let a = [];
    for (let i = 0; i < 100000; i++) {
        a[i] = i* i;
    }
    console.log(a[index]);
}
    Time optimixation using closure

*/



function find(){
    let a = [];
    for (let i = 0; i < 100000; i++) {
        a[i] = i* i;
    }
    return function (index) {
        console.log(a[index]);
    };
}

//const closure = find();
//console.log("6");
//closure(6);
//console.timeEnd("6");
//console.time("50");
//closure(50);
//console.timeEnd("50");

// block scope and setTimeout
/* for (var i = 0; i< 3; i++){
setTimeout(function lof(){
console.log(i);
}, i* 1000);
}  it returns 3 3 3 */


for (var i = 0; i < 3; i++ ){
    function inner(i) {
        setTimeout(function log(){
            console.log(i);
        }, i * 1000);
    }
    //inner(i); 0 1 2 
}


for (let i = 0; i < 7; i++) {
    setTimeout(function log(){
        console.log(i);
    }, i* 1000);
} 


//  make this run only once 

let view;
function likeTheVideo() {
    let called = 0;
    
    return function () {
        if (called > 0) {
            console.log("Allready liked to video");
        
        } else {
            view = "video songs";
            console.log("Liked to", view);
            called++;
        }
    };

}

let isLiked = likeTheVideo();
isLiked();

isLiked();

isLiked();

isLiked();