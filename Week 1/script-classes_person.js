// Classes

class Person {
    isAdmin;
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greetPerson() {
    const greetingString = `Hello ${this.firstName} ${this.lastName}!`;
    console.log(greetingString);
    }
}

const olaNormann = new Person("Ola", "Normann");
const kariNormann = new Person("Kari", "Normann");

olaNormann.greetPerson();
kariNormann.greetPerson();
