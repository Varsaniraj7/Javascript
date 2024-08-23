class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let obj = new Person("Raj",18)
obj.greet();


class Car{
    constructor(model,year){
        this.model = model;
        this.year = year;
    }
    drive(){
        console.log(`The ${this.model} is driving & ${this.year}`);
    }
}
let carObj = new Car("Tesla",2021)
carObj.drive();


class Employee{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
}
let empObj = new Employee("John Doe",30,50000)
empObj.displayInfo();


class Store{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Weight: ${this.weight} kg`);
    }
}
let storeObj = new Store("Electronics Store",1000)
storeObj.displayInfo();