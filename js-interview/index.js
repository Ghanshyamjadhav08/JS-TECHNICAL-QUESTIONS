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

console.log(mapResult, forEachReuslt, arr)