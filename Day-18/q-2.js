// 5 example of array shift & unshift operations
console.log("Example 1");
let array = [1, 2, 3, 4]
console.log(array);
array.unshift(20)
console.log(array);
array.shift();
console.log(array);



console.log("Example 2");
let array2 = [10, 20, 30]
console.log(array2);
array2.unshift(20.5);
console.log(array2);
array2.shift();
console.log(array2);


console.log("Example 3");
let array3 = [20.5, 5, 20.1, 20.2, 20.3, 20.4];
console.log(array3);
array3.unshift(20.6);
console.log(array3);
array3.shift();
console.log(array3);


console.log("Example 4");
let array4 = ["a", "b", "c", "d", "e", "f"];
console.log(array4);
array4.unshift("g");
console.log(array4);
array4.shift();
console.log(array4);


console.log("Example 5");
let array5 = ["a", "b", "c", 5, 6, 7];
console.log(array5);
array5.unshift("g");
console.log(array5);
array5.shift();
console.log(array5);