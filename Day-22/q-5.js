// Given an array of ages, create a new array containing only the ages greater than or equal to 18. 
let ages = [15,18,19,20,21,22,23,10,5];
let adult = ages.filter((element)=>{
    return element >= 18;
})
console.log(adult);