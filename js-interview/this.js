//this keyword in javascript

/*

const user = {
    firstName: "shyam",
    getName() {
        const firstName = "shyam Jadhav";
        return this.firstName;
    },
};

console.log(user.getName()); //shyam

*/


// what is the result of accessing its ref? why?

function makeUser() {
    return {
        name:"john",
        ref() {
            return this;
        },
    };
}
let person = makeUser();
console.log(person.ref().name); //john



const user = {
    name:"Shyam",
    greet() {
        return `hello, ${this.name}`;
    },
    farewell: () => {
        return`Goodbye, ${this.name}`;
    },
}

console.log(user.greet()); // shyam
console.log(user.farewell());// Goodbye undefined


let calculator = {
    read() {
        this.a = 5;
        this.b = 10;
    },

    sum() {
        return this.a + this.b;

    },
    mul() {
        return this.a * this.b;
    },

}



calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


const calc = {
    total:0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    substract(a) {
        this.total -= a;
        return this;
    },
}


const result = calc.add(10).multiply(5).substract(30).add(5);
console.log(result.total);