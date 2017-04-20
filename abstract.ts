abstract class Animal1 {
    abstract makeSound(): void;

    move(): void {
        console.log("moving...");
    }
}

class Dog extends Animal1 {
    makeSound():void{
        console.log('Bow Bow...');
    }
}

let d:Dog= new Dog();
d.makeSound();