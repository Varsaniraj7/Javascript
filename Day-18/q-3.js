// 5 example of array splice operations


console.log("Example 1")
let array = [1, 2, 3, 4, 5];
console.log(array);
array.splice(2);
console.log(array);


console.log("Example 2")
let array2 = [1, 2, 3, 4, 5];
console.log(array2);
array2.splice(1,2);
console.log(array2);


console.log("Example 3")
let array3 = [1, 2, 3, 4, 5];
console.log(array3);
array3.splice(-2);
console.log(array3);


console.log("Example 4")
let array4 = [1, 2, 3, 4, 5];
console.log(array4);
array4.splice(2,0,100);
console.log(array4);


console.log("Example 5")
let array5 = [1, 2, 3, 4, 5];
console.log(array5);
array5.splice(3,1,20);
console.log(array5);