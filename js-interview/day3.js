//Day 3 : Control Structures
// Tasks/ Activities :
// Task 1: write a program to check if a number is positive, negative, or zero, and log the result to the console.


/*let userInput = prompt("Please enter a number:");

let number = parseFloat(userInput);

if(isNaN(number)){
    console.log("That is not a valid number");
} else {
    if( number > 0){
        console.log("The number is positive");
    } else if ( number < 0){
        console.log("The number is negative");

    } else {
        console.log("The number is zero");
    }
}*/

// Task 2: write a program to check if a person is eligible to vote (age > = 18) and log the result to the console.
  

let age = 17;

 if ( age > 0 &&  age < 18){
    console.log('You are not eligible to vote');
 } else if ( age >= 18){
    console.log("you are eligible to vote")
 } else if (age > 18  &&  age > 65){
    console.log('you are eligible to do vote');
 }


 //Acitivity 2: Nested if-Else Statement
 // Task 3: Write a program to find te largest of three numbers using nested if-else statement.

 function findGreatest(a,b,c){
    if(a>b && a>c){
        console.log("a is greater than b&c ");
    } else if(b>c) {
        console.log(`b=${b} is greater than a=${a} & c=${c}`);
    } else {
        console.log(`c=${c} is greater than a=${a} & b=${b}`);
    }
}
findGreatest(25,10,17)

// Acivity 3: Switch Case.
//Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


let dayNumber = 7;

switch(dayNumber){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4: 
        console.log("wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6: 
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number. Please enter a number between1 and 7.");
}



  

   // Task 5: Write a program that uses a switch case to assign a grade('A', 'B', 'C', 'D','F') based on a score and log the grade to the console.
   // 80-90 = A, 70- 79 = B, 60- 69=C, 50-59=D, 0-49 = F:
   // we can use prompt also ..
 let score = 85; // Change this score to test different values

let grade;
switch (true) {
  case (score >= 80 && score <= 90):
    grade = 'A';
    break;
  case (score >= 70 && score < 80):
    grade = 'B';
    break;
  case (score >= 60 && score < 70):
    grade = 'C';
    break;
  case (score >= 50 && score < 60):
    grade = 'D';
    break;
  case (score >= 0 && score < 50):
    grade = 'F';
    break;
  default:
    grade = 'Invalid score';
}


console.log(`The grade for a score of ${score} is ${grade}`);


// Acitvity 4 : Conditional (Ternary operator)
// Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

 let num = 10;
 
 num % 2 === 0 ? console.log(`${num} is even number`): console.log(`${num} is odd number`);
 
// Activity 5 : Combining Conditions 
// Task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by , but not 100 unless also divisible by 400) and log the result to the console.

let year = 2000;

if ( year % 400 == 0){
    console.log(`${year} is leep year`);
} else if ((year % 4 == 0) && (year % 100 != 0)){
    console.log(`${year} is leep year`);
} else {
    console.log(`${year} is Not a leep year`);
}
