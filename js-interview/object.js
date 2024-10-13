// object in javascript
const user = {
    name:"ghanshyam jadhav",
    age:26,
    Designation:"Developer",
    "like this code" : true
};

//console.log(user.name);// access the name property

user.name = "shyam";// modifying property
delete user.age// delete any property inside of an object
//delete  user["like this code"];// dletting this property
//console.log(user["like this code"]);//acess this property
console.log(user);

const func = (function (a) {
    delete a;
    return a;
})(5);

console.log(func);



const book = {
    name:"Half Girlfriend",
    Author:"chetan Bhagat",
    Publish:2014
};

for (key in book){
    console.log(book[key]);
}
  

// create a function multiplyByTwo(obj) that multiplies all numeric property valuew of nums by 2.

let nums = {
    a: 100,
    b:200,
    title: "My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number"){
            obj[key] = obj[key]*2;  //*=2
        } 
    }
}

console.log(nums);


// what is JSON.stringyfy and JSON.parse?

//JSON.stringify() is used to convert a JavaScript object into a JSON string.

const person = {
    name: "John",
    age: 30,
    isEmployed: true
};

// Convert the JavaScript object into a JSON string
const jsonString = JSON.stringify(person);

console.log(jsonString);
// Output: {"name":"John","age":30,"isEmployed":true}

//JSON.parse() is used to convert a JSON string back into a JavaScript object.
const jsonStr = '{"name":"John","age":30,"isEmployed":true}';

// Convert the JSON string back into a JavaScript object
const personObject = JSON.parse(jsonStr);

console.log(personObject);
// Output: { name: 'John', age: 30, isEmployed: true }


const settings = {
    username: "shyam",
    level:19,
    health:90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);// ignores username property



const shape = {
    radius:10,
    diameter() {
        return this.radius *2;

    },
    perimeter: () => 2* Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter()); // pointed to be window object and print NaN 


//destructuring in object

/*
   let user = {
   name: "Shyam",
   age:25,
   };

   const {name} = user;

   console.log(name);

*/


let Employee = {
    name:"Ghanshyam",
    age:25,
    fullName: {
        first:"Ghanshyam",
        last:"Jadhav",
    },
};

const name = "Coder  Gyaan";


const {
 fullName: {first},

} = Employee;
console.log(first);