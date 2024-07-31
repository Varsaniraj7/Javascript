// Given an array of numbers, create a new array containing the squares of each number.
let arr = [1,2,3,4,5]
let squares = arr.map((element)=>{
    return element * element;
})
console.log(squares);