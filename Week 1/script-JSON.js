// JSON - JavaScript Object Notation

const people = ['Martin', 'Oliver', 'Abi'];

// console.log(people);

const peopleString = JSON.stringify(people);
console.log(peopleString);

const people2 = JSON.parse(peopleString);
console.log(people2);