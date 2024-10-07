//map filter reduce 

/*const nums = [1,2,3,4,5];
const multiplyThree = nums.map((num,i,arr) => {
    return num* 3;
});
console.log(multiplyThree); [ 3, 6, 9, 12, 15 ]*/


/* const nums = [1,2,3,4];
const moreThanTwo = nums.filter((num)=> {
    return num > 2;
});

console.log(moreThanTwo); */


// reduce 

/*const nums = [1,2,3,4];
 
const sum = nums.reduce((acc, curr, i, arr)=>{
    return acc + curr;
},0)

console.log(sum); */



//polyfill for map 
 
/* 
Array.prototype.myMap = function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;
};
const nums = [1,2,3,4,5];
const multiplyThree = nums.myMap((num,i,arr) => {
    return num * 3;
});
console.log(multiplyThree);
 */


//polyfill for Filter 
/*

Array.prototype.myfilter = function(cb){
    let temp = [];
    for (let i = 0; i<this.length; i++){
        if(cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
}

const nums = [1,2,3,4];

const moreThanTwo = nums.myfilter((num) => {
    return num > 2;
});

console.log(moreThanTwo);
*/


// polyfills for reduce 
// arr.reduce((acc, curr, i, arr) =>{}, initialvalue)

/* 
   Array.prototype.myReduce =  function (cb, initialvalue){
    var acc = initialvalue;

    for (let i = 0; i< this.length; i++){
        acc = acc? cb (acc, this[i],i, this): this[i];
    }
    return acc;
};

const nums = [1,2,3,4];
const sum = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr;
},0);
console.log(sum);
*/



// map vs ForEach 

const arr = [ 2, 3, 4, 5, 7];

const mapResult =  arr.map((ar) => {
    return ar + 2;
});

 const  forEachReuslt = arr.forEach((ar ,i) => {
    arr[i] = ar + 3;
});

//console.log(mapResult, forEachReuslt, arr)



// map filter and reduce o/p based questions 
// 1 : Return only name of students in Capital

let students = [
    {name: "priyanka", rollno: 44, marks:90},
    {name:"shyam", rollno:43, marks: 89},
    {name:"Kaushal", rollno: 16, marks:45},
    {name:"Harshal", rollno:76, marks: 98}
];

//const names = students.map(stu => stu.name.toUpperCase());
//console.log(names);

//2 : return only details of those who score more than 60 marks

const details = students.filter((stu => stu.marks> 60));

//console.log(details); 


//3: More than 60 marks and rollnumber greater than 50;

const res = students.filter((stu => stu.marks > 60 && stu.rollno > 50));
//console.log(res); //{ name: 'Harshal', rollno: 76, marks: 98 } ] 


//4 : sum of marks of all the students

   const sum = students.reduce((acc, curr) => acc + curr.marks,0);
//console.log(sum);


// 5: Return only name of students who scored more than 60

const names = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
//console.log(names);


// 6: Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const totalMarks = students.map((stu => {
    if(stu.marks < 60)
        stu.marks += 20;
    return stu;
})).filter((stu) => stu.marks > 60).reduce((acc,curr) => acc + curr.marks, 0);

console.log(totalMarks);