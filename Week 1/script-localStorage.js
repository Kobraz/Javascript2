
const person = { firstName: 'Ola', lastName: 'Normann' };

localStorage.setItem('person', JSON.stringify(person));

const personFromStorage = localStorage.getItem('person');
// console.log(personFromStorage);

const person2 = JSON.parse(personFromStorage);
console.log(person2);

localStorage.clear();