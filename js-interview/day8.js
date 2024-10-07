// ES+ Features 
// Task/Activities :
//Activity 1: Template Literals
// Task 1 : Use template literals to create a string that includes variables for a  person's  name and age and log the string to the console.

const personName = 'shyam jadhav';
const personAge = 26;

const message = `My name is ${personName} and I am ${personAge} years old.`
console.log(message);

// Task2 : Create a multiline string using template literals and log it to the console.

const MultilineString = `Hii My name is Shyam  I am from Nanded Maharashtra`;
console.log(MultilineString);

// Activity 2: Destructuring 
// Task 3 : Use array destructuring to extract the  first and second elements from an array of numbers and log them to the console.

const numbers = [10, 20, 30, 40, 50,];

const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element:${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console

const book = {
    title : 'Ignited Minds',
    author: 'Dr. A.P.J  Abdul Kalam',
    year  : 2002
} 
let { title , author} = book
console.log(title, author);

// Acitvity 3: spread and Rest Operators
 // Task 5: Use te spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

 const array =[1, 2, 3, 4, 5,6] ;
 const newArray = [...array,7,8, 9, 10, 11];
 console.log(newArray);


 // rest operator 

 //use rest operator in a function to accept an artibitary number of arguments , sum them and return the result.

 function sum (...numbers){
    return numbers.reduce((total, number)=> total + number, 0);
 }

 const result = sum(1,2,3,4,5);
 console.log(`Sum:${result}`)

 // Activity 4 : Default Parameters

   function Product (num1 , num2=1){
       return num1 * num2;
   }
   console.log(Product(5));

// Activity 5: enhanced Object Literals 
   let brand = "Mercedes";
   let color = "Black";
   let mileage = 50;
   
   // Define the describe method
   var describeCar = function() {
       console.log('This is a ' + this.brand + ' car. It is ' + this.color + ' and has a mileage of ' + this.mileage + ' km/l.');
   }
   
   let car = { brand, color, mileage, describeCar };
   console.log(car);
   car.describeCar();
   
// create an object with computed property names 
// Tak 9 : reate an object with computed property names based on variables and log the object to the console.

const key1 = 'firstname'
const value1 = 'shyam'

const key2 = 'lastname'
const value2 = 'jadhav'

const obj = {
    [key1]:value1,
    [key2]:value2,
}
console.log(obj);



