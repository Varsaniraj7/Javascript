// Given an array of numbers, create a new array containing only the positive numbers. 
let arr = [1, 2, -4, 0 ,-11]
let postivearr = arr.filter((element)=>{
    return element > 0;
})
console.log(postivearr);