//Question: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

for (let i=1; i<= 100; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log('FizzBuzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// Reverse String 
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

//Palindrome check  : Write a function to check if a given string is a palindrome.
 
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));


// Fibonacci Sequence : write a function that returns the `n` numbers of the Fobonacci sequence.

function fibonacci(n){
    const sequence = [0,1];
    for (let i = 2; i < n; i++){
        sequence.push(sequence[i -1] + sequence[i- 2]);
    }
    return sequence.splice(0, n);
} 
console.log(fibonacci(5));

// Factorial 
 
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n -1);
}
console.log(factorial(5));

// or using loop 

let num = 5
let facto = 1
let p = 1
do{
  facto*= p
  p++
} while (p <= num);
console.log(facto);

// 
function Factnum(num){
   let result = 1;
   while (num > 1){
    result *= num;
    num--;
   }
   return result;
}
console.log(Factnum(4));

// Remove Duplicates from an Array 
// Write a function to remove duplicates from a array.

function removeDuplicates(arr){
    return[...new Set(arr)];
}
console.log(removeDuplicates([1,2,3,4,4,5,6,7,7,8,9,3]));

// Find the Intersection of Two Arrays.

function Intersection(arr1, arr2){
    return arr1.filter(value => arr2.includes(value));
}
console.log(Intersection([1,2,3], [2,3,4]));

// Check for Prime Number

function isPrime(n){
    if(n <= 1) return false;
    for(let i = 2; i < n; i++){
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));

// Find the Second Largest Number in an Array

function secondLargest(arr) {
    let max = -Infinity, secondMax = -Infinity;
    for (let num of arr){
        if(num > max){
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max){
            secondMax = num;
        }
    }
    return secondMax;
}
console.log(secondLargest([3,5,7,2,8]));

// using sort method 

const secLargest = (arr) =>{
    if(arr.length < 2){
        return null;// if array has less than w elements no second largest exists.
    }  
    // sort the array in descending order
    arr.sort((a, b) => b - a);
    // find the first unique number after the largest 
    for (let i =1; i< arr.length; i++){
        if(arr[i] !== arr[0]){
            return arr[i];
        }
    }
    return null;
    

}
let array = [2, 5, 9, 8,];
console.log(secLargest(array));


// sum of Digits 
function sumofDigits(n){
    return n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumofDigits(1234));

// Anagram Check 
 
function areAnagrams(str1, str2){
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams('listen', 'silent'));

// Find the Missing Number in an Array

// write a function to find the missing number in a sequence.

function findMissingNumber(arr){
    const n = arr.length + 1;
    const total = (n * (n + 1))/ 2;
    const sum = arr.reduce((a , b) => a + b, 0);
    return total - sum;
}
console.log(findMissingNumber([1,2,3,5,]));

// count Occurance of a Character in a string

function countOccurance(str, char){
    return str.split(char).length - 1;

}
console.log(countOccurance('hello', 'l'));

// Flatten a Nested Array
function flattenArray(arr){
    return arr.flat(Infinity);
}
console.log(flattenArray([1,[2, [3,[4]]]]));

// Capitalize the First Letter of Each Word

function capitalzeWords(str){
    return str.split('').map(word => word[0].toUpperCase() + word.slice(1)).join('');
}
console.log(capitalzeWords('hello world'));


// Merge Two Sorted Array 
function mergeSortArray(arr1, arr2){
    return[...arr1, ...arr2].sort((a, b) => a - b);

}
console.log(mergeSortArray([1,3,5], [2,4,6]));

// Find the Longest Word in a sentence 
function longestWord(str) {
    return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(longestWord('The quick brown fox jumped over the lazy dog')); // "jumped"

// Find the Common Elements in Two Arrays 

function commonElements(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log(commonElements([1,2,3],[2,3,4]));

// Generate a Random Number within a Range 

function randomInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // return Math.round(Math.random() * (max - min)) + min;
}
console.log(randomInRange(1, 10));

// check if a Number is Even or Odd
function isEven(n){
    return n % 2 === 0;
}
console.log(isEven(4));