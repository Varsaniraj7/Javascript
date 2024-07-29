// Take an array and use all these methods and perform addition subtraction,multiplication for map
let arr = [1,2,3,4,5];
// Addition
const add = arr.map((element,index,arr)   =>{
    return element +2
});
console.log('Addition Result:', add);

// Subtraction
const sub = arr.map((element,index,arr)   =>{
    return element -2
});
console.log('Subtraction Result:', sub);

// Multiplication
const mul = arr.map((element,index,arr)   =>{
    return element *2
});
console.log('Multiplication Result:', mul);