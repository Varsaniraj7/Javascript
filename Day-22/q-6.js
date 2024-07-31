// Given an array of numbers, find the product of all the numbers. 
let arr = [1, 2, 3, 4, 5]
let product = arr.reduce ((accumalator,element)=>{
    return accumalator * element;
})
console.log(product);