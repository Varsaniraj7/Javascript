class Person {
    greet(){
        console.log('Hello, I am a person!');
    }
}
class Person2 extends Person {
    treat(){
        console.log('I am treating someone!');
    }
}
class Person3 extends Person {
    speak(){
        console.log('I am speaking!');
    }
}
let obj = new Person3();
obj.greet();
obj.speak();
let obj2 = new Person2();
obj2.treat();
// obj2.great();