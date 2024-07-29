// filter them with even number first then with odd numbers,
let arr = [1, 2, 3, 4, 5];
// Even numbers
let even = arr.filter((element)=>{
    return element % 2 === 0;
})
console.log(even);
// Odd numbers
let odd = arr.filter((element)=>{
    return element % 2 !== 0;
})
console.log(odd);