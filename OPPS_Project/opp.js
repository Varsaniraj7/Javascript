// Polymorphism
// Inheritance - 3 types of inheritance
// Abstraction
// Encapsulation
// 3 types of encapsulation
// Conditional classes


// Polymorphism 
// It means the method repeatedly calls as same name.
class Animal{
    speak(){
        console.log("I am an animal!");
    }
}
class Dog extends Animal{
    speak(){
        return console.log("Woof woof!");
    }
}
let animal = new Dog();
animal.speak();
let animal2 = new Animal();
animal2.speak();


// Simple inheritance
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

// Multilevel inheritance
class first {
    greet(){
        console.log("I am Person!");
    }
}
class second extends first {
    treat(){
        console.log("I am Person2!");
    }
}
class third extends second {
    speak(){
        console.log("I am Person3!");
    }
}
let obj1 = new third();
obj1.greet();
obj1.treat();
obj1.speak();

// Hierarchical inheritance
class One {
    greet(){
        console.log('Hello, I am a person!');
    }
}
class Two extends One {
    treat(){
        console.log('I am treating someone!');
    }
}
class Three extends One {
    speak(){
        console.log('I am speaking!');
    }
}
let obj2 = new Three();
obj2.greet();
obj2.speak();
let obj3 = new Two();
obj3.treat();

// Abstraction
// It means Direct output show hides the background process.
// for example parent hide the affects of children.


// Encapsulation
// Hide the data.

// Default Constructor
class Product{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}
let product = new Product("Laptop", "This is a laptop.");
console.log(product.name);
console.log(product.description);


// Perameterized Constructor
class Product2{
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    info(){
        console.log(`Name: ${this.name}, Description: ${this.description}, Price: ${this.price}`);
    }
}
let product2 = new Product2("Laptop", "This is a laptop.", 1500);
product2.info();

// Copy Constructor
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    copy(){
        return new Person(this.name, this.age);
    }
}
let human = new Human("Rahul", "23");
let human2 = human.copy();
console.log(human.name);
console.log(human.age);
console.log(human2.name);
console.log(human2.age);




// Conditional Classes
class Vote{
    constructor(age){
        if(age >= 18){
            this.vote();
        }else{
            this.notVote();
        }
    }
    vote(){
        console.log("You can vote!");
    }
    notVote(){
        console.log("You can't vote!");
    }
}
let object = new Vote(25);
