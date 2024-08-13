// array reduce operation
let array = [1, 2, 3, 4, 5];
let result = array.reduce((accumalator,element)=>{
    return accumalator + element;
},0)
console.log(result);