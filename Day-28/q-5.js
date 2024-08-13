// array filter operation
let array = [1, 2, 3, 4, 5];
let result = array.filter((element) =>{
    if(element % 2 == 0){
        return element;
    }
})
console.log(result);