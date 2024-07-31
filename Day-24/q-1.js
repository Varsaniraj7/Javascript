// Given an array of string generate an array whose first or last character is 'a'
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]
let string = ["assignment", "problem", "media", "upload"]
let firstOrLastChar = string.filter((string,index)=>{
    return string.startsWith('a') || string.endsWith('a')
})
console.log(firstOrLastChar);
