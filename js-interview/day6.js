// Array 
// Activity 1: Array Creation and Acess 

//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const nums = [1, 2, 3, 4, 5,];
console.log(nums);

// Task 2: Access the first and last elements of the array and log them to the console.

   let sizeofarray = nums.length;
   console.log(nums[0], nums[sizeofarray -1]);

   // ------oR -----
  // const array = [10, 20, 30, 40, 50];

// Logging the first and last elements to the console in one line
//console.log(`First element: ${array[0]}, Last element: ${array[array.length - 1]}`);

// Activity 2 : Array Methods (Basics)
// Task3 : Use the push method to add a new number to the end of the array and log the updated array.

const array = [1, 2, 3, 4, 5];
//  1: use the push method to add a new number to the end of the array ad log the updated array.
array.push(6);
console.log(array);
// 2 : Use the pop method to remove the last element from the array and log the updated array.
array.pop();
console.log(array);
// use 3: shift method to remove the first element from the array and log the updated array.
array.shift();
console.log(array);
// use the unshift method to add a new number to the beginning of the array and log the updated array.
array.unshift(7);
console.log(array);
 

// Activity 3: Array methods (Intemediate)
// Use the map method to create a new array where each number is doubled and log the new array.

const Array = [10, 20, 30, 40, 50, 51, 73, 89];
const doubledArray = Array.map(function(num){
    return num * 2;
});

console.log(doubledArray);

// use the filter method to create a new array with only even numbers an log the new array.
 
 const evenNum = Array.filter(function(num){
    return num % 2 == 0;
});
console.log(evenNum);



const SumofNum = Array.reduce(function (sum, value){
    return sum + value;
});
console.log(SumofNum);
// shortcut approach using arrov function  here sum is accumulator and value is currentvalue:___
const sum = Array.reduce((sum, value) => sum + value, 0);
console.log(sum);

// Activity 4: Array Iteration 
// Task 10 : Use a for loop to iterate over the array and log each element to the console.

  const persons = ['shyam', 'shubham', 'satish', 'dinesh','akash', 'chetan'];
  for (let i = 0; i < persons.length; i++){
    console.log(persons[i]);
  }
 
  // Task 11 : use foreach method to iterate over the array and log each element to the console.
  persons.forEach((person, index)=>{
      console.log(`${index}: ${person}`);
  })

  // Activity 5 : Multi - dimensional Arrays
  // Task 12 : Create a two-dimensional array (matrix) and log the entire array to the console.

    const matrix = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];
         for (let i = 0; i < matrix.length; i++){
            console.log(matrix[i]);
         } 
         console.log(matrix);
   //or 

    matrix.forEach(row =>{
        console.log(row);
    });

    // Task 13 : Access and log specific element from the two-dimensional array.
    const Cities = [['Delhi', 'Mumbai', 'Hyderabad', 'Pune'],['Jaipur', 'Bengluru','Chennai', 'Udaipur']];
    console.log(`First city:${Cities [0] [0]},  Second city:${Cities [1] [1]}, `);