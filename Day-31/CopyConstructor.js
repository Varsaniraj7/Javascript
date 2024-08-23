class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    copy(){
        return new Person(this.name, this.age);
    }
}
let person = new Person("Rahul", "23");
let person2 = person.copy();
console.log(person.name);
console.log(person.age);
console.log(person2.name);
console.log(person2.age);


