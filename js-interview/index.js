



// map filter and reduce o/p based questions 
// 1 : Return only name of students in Capital

let students = [
    {name: "priyanka", rollno: 44, marks:90},
    {name:"shyam", rollno:43, marks: 89},
    {name:"Kaushal", rollno: 16, marks:45},
    {name:"Harshal", rollno:76, marks: 98}
];

const names = students.map(stu => stu.name.toUpperCase());
console.log(names);
