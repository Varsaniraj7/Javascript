class Human{
    constructor(name, age){
        this.name = name || "Guest";
        this.age = age >= 0 ? age :"Invalid age";
    }
}
let human1 = new Human("John", 28);
console.log(human1.name);
console.log(human1.age);

let human2 = new Human();
console.log(human2.name);
console.log(human2.age);