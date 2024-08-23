class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    info(){
        return console.log(`Name : ${this.name} Age : ${this.age}`);
    }
}
let obj = new Person("John", "28");
obj.info();
let obj2 = new Person("Raj", "18");
obj2.info();