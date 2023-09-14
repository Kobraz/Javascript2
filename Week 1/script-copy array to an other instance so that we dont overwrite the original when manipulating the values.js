//  Tar kopi av en array med [...numbers] og kopi av et objekt med [...person] slik at man ikke overskriver den orginale arrayen eller objektet.

const numbers = [0, 1, 2, 3];

const myNewNumbers = [...numbers];

const person = {
  firstName: "Ola",
  lastName: "Normann",
};

const newPerson = { ...person };

// const myArray = [0, 1, 2, 3, 4];

// function modifyArray(numbersArray) {
//   const myNewArray = [...numbersArray];
//   myNewArray[0] = 100;
//   return myNewArray;
// }

// console.log(myArray);
// modifyArray(myArray);
// console.log(myArray);

//-------------------------

// let myNumber = 10;

// function changeTo1000(number) {
//   number = 1000;
//   return number;
// }

// const result = changeTo1000(myNumber);
// console.log(result);
// console.log(myNumber);
