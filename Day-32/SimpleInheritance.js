class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Person2 extends Person{
    constructor(name, age){
        super(name, age);
        this.greet();
    }
}
let obj = new Person2("John", 28);
obj.greet();