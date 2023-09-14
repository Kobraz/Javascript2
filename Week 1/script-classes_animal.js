// Classes

class Animal {
  constructor() {
    //
  }

  eats() {
    console.log("The animal has eaten");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat says Meow");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog says Woof!");
  }
}

const Pookie = new Cat();
Pookie.speak();
Pookie.eats();
