// Create an array and take 10 objects inside it and each object have different property and print those properties in console
let array = [
    {
        name:"raj"
    },
    {
        num:7
    },
    {
        age:25
    },
    {
        city:"rajkot"
    },
    {
        gender:"male"
    },
    {
        hobby:"reading"
    },
    {
        language:"gujarati"
    },
    {
        food:"rotlo"
    },
    {
        book:"bagavat"
    },
    {
        movie:"avengers"
    }
]

for (let i = 0; i < array.length; i++) {
    let x = Object.values(array[i])
    console.log(x[0]);
}