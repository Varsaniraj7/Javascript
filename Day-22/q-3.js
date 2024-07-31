// Given an array of numbers, create a new array containing only the even numbers.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = arr.filter((element)=>{
    return element % 2 === 0;
})
console.log(evenArr);