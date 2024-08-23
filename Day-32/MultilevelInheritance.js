class Person {
    greet(){
        console.log("I am Person!");
    }
}
class Person2 extends Person {
    treat(){
        console.log("I am Person2!");
    }
}
class Person3 extends Person2 {
    speak(){
        console.log("I am Person3!");
    }
}
let obj = new Person3();
obj.greet();
obj.treat();
obj.speak();
