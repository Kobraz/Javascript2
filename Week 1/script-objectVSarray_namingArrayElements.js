const person = {
    firstName: 'Ola',
    lastName: 'Normann',
};

const numbers = [0, 100, 200, 300, 400, 500];

const {firstName} = person;

const [firstNumber, secondNumber, thirdNumber] = numbers;

console.log({firstNumber, secondNumber, thirdNumber});