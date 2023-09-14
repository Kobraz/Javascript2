

const person = {
    firstName: 'Ola',
    lastName: 'Normann',
    age: 19,
    city: 'Mosjøen',
    country: 'Norway',
};


4
const subject = {
    id: 0,
    title: 'JavaScript 2',
}


function greetsPerson({firstName, lastName}, {title}) {
    console.log(subject);
    console.log(
        `Hello ${firstName} ${lastName}! You are on the ${title} module.`
    );
};

greetsPerson(person, subject);

// 3
// function greetsPerson(person) {
//     const {firstName, lastName} = person;
//     console.log(`Hello ${firstName} ${lastName}!`);
// };


// 2
// function greetsPerson(person) {
//     const firstName = person.firstName;
//     const lastName = person.lastName;
//     console.log(`Hello ${firstName} ${lastName}!`);
// };

// 1
// function greetsPerson(person) {
//     console.log(`Hello ${person.firstName} ${person.lastName}`);
// };


