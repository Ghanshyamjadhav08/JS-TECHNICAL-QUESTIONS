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
Array.prototype.filter = function(cb){
    let temp = [];
    for (let i = 0; i<this.length; i++){
        if(cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
}

const nums = [1,2,3,4];

const moreThanTwo = nums.filter((num) => {
    return num > 2;
});

console.log(moreThanTwo);

