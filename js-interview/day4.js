// Day 4: Loops 
// Tasks/ Activities:
 
//Activity 1 : For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

  for (let i = 1; i <= 10 ; i++){
    console.log(i);
  }


  // Task 2: write a program to print the multiplication table of 5 using a for loop.

  for (let i = 1; i <= 10; i++){
    console.log(i*5);
  }
 // Activity 2 : while Loop
// Task 3: write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1;
let sum = 0;
while (i <= 10){
    sum += i
    i++
}
console.log(sum);

// Task 4: write a program to print numbers from 10 to 1 using while loop.


let j = 10;
while( j >= 1){
    console.log(j);
    j--
}


// Activity 3: Do ... While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do.. while loop.

let k = 1
do{
  console.log(k);
  k++;
} while (k <= 5);


// write a program to caclulate the factorial of number using do.. while loop.

let num = 5
let factorial = 1
let p = 1
do{
  factorial*= p
  p++
} while (p <= num);
console.log(factorial);

//Activity 4: Nested Loops
//Task 7 : write a program to print pattern using nested for loops:

// Outer loop for each row (1 to 5)
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  
  // Inner loop for each column in the current row
  for (let j = 1; j <= i; j++) {
      pattern += "*";
  }
  
  // Print the pattern for the current row
  console.log(pattern);
}


// Pyramid of pattern printing 
  let rows = 5;
  for(let i = 1; i <= rows; i++){
      stars = "";

      for(let j = rows -1; j< 0; j--){
        stars = "";
      }

      for ( let k = 0; k < (2 * i -1); k++){
        stars += "*";
      }
      console.log(stars);
  }

  //Acticity 5: Loop Control Statements
  // Task 8: Write a program to print numbers from 1 to 10 , but skip the number 5 using the continue statement.

  for( let i = 1; i <= 10; i++){
    if ( i == 5)
    continue
    console.log(i);
  }

  //Task 9: Write a program to print numbers from 1 to 10 , but stop the loop when the number is 7 using the break statement.

  for (let i= 1; i <= 10; i++){
    if( i == 7)
      break
    console.log(i);
  }