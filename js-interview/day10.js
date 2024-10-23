// call , Bind and apply in Javascript (Explicit Binding)

// what is call  : The call mehod calls the function with a given this value and arguments provided individually.


function sayHello(age) {
    return "Hello " + this.name + "is" + age;
}

var obj = {name:"Shyam"};

console.log(sayHello.call(obj,25));