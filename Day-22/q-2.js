// Given an array of lowercase strings, create a new array with all strings capitalized. 
let arr = ["apple", "banana", "cherry"];
let capitalizedArr = arr.map((element) => {
    return element.toUpperCase();
});
console.log(capitalizedArr);